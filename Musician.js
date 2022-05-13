const { DataTypes } = require('sequelize');
const {Sequelize, sequelize, Model} = require('./db');

// TODO - define the Musician model
// let Musician;

class Musician extends Model{

}
Musician.init({ 
  name: DataTypes.STRING,
  instrument: DataTypes.STRING
},
  {
    sequelize,
    timestamps: false,
})
module.exports = {
    Musician
};