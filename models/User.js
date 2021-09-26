const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password 
    checkPassword(loginPW) {
        return await bcrypt.compareSync(loginPW, this.password);
    }
}




module.exports = User;