const { DataTypes } = require('sequelize');
// const { default: ModelManager } = require('sequelize/types/model-manager');
const { Sequelize, sequelize, Model } = require('./db');

// TODO - define the Band model
class Band extends Model{

}
Band.init({
  name: DataTypes.STRING,
  genre: DataTypes.STRING
}, {
  sequelize,
  timestamps: false,
})
module.exports = {
    Band
};