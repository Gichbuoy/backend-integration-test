const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync({ alter: true }) // This will create the table if it doesn't exist
  .then(() => console.log('User table synced'))
  .catch(err => console.error('Error syncing User table:', err));

module.exports = User;
