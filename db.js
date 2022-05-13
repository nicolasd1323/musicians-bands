const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize('dataBase', 'username', 'password',{
  dialect: 'sqlite',
  storage: './music.sqlite',
  logging: false
})

module.exports = {
    sequelize,
    Sequelize, 
    Model
};
