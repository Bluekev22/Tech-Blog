const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Don't forget about BOOLEAN!",
    post_id: 1,
    user_id: 2
  },
  {
    comment_text: "Good to know!",
    post_id: 2,
    user_id: 3
  },
  {
    comment_text: "Wow, I didn't know that.",
    post_id: 3,
    user_id: 4
  },
  {
    comment_text: "So that's how they do it..",
    post_id: 4,
    user_id: 5
  },
  {
    comment_text: "That sound a lot like salting",
    post_id: 5,
    user_id: 6
  },
  {
    comment_text: "Express is my favorite!",
    post_id: 6,
    user_id: 1
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;