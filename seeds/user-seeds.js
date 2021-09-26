const { User } = require('../models');

const userData = [
  {
    username: "Stephanie",
    email: "stephanie@yahoo.com",
    password: "password"
  },
  {
    username: "Angela",
    email: "angela@yahoo.com",
    password: "password"
  },
  {
    username: "Christina",
    email: "christina@yahoo.com",
    password: "password"
  },
  {
    username: "Kimberly",
    email: "kimberly@yahoo.com",
    password: "password"
  },
  {
    username: "Lynn",
    email: "lynn@yahoo.com",
    password: "password"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;