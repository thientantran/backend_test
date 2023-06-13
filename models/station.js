'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }
  station.init({
    name: {type:DataTypes.STRING, allowNull:false},
    address: DataTypes.STRING,
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'station',
  });
  return station;
};