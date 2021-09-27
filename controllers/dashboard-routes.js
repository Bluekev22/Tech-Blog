const router = require('express').Router();
const sequelize = require('../config/connection');

const { Post, User, Comment } = require('../models');

const withAuth = require('../utils/with-auth')


router.get('/', withAuth, (req, res) => {
   
    Post.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: { exclude: ['password'] }
          }
        },
        {
          model: User,
          attributes: { exclude: ['password'] }
        }
      ]
    })
      .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard-posts', { layout: "dashboard", posts });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// A route to edit a post
router.get('/edit/:id', withAuth, (req, res) => {
  // All of the users posts are obtained from the database
  Post.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Comment,
        include: {
          model: User,
          attributes: { exclude: ['password'] }
        }
      },
      {
        model: User,
        attributes: { exclude: ['password'] }
      }
    ]
  })
    .then(dbPostData => {
      // if no post by that id exists, return an error
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      // serialize data before passing to template
      const post = dbPostData.get({ plain: true });
      res.render('edit-post', { layout: "dashboard",
      post });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;