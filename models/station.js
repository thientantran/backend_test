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
    name: {type:DataTypes.STRING, allowNull:false, validate:{
      notEmpty:true,
      len:[2,20]
    }},
    address: {
      type:DataTypes.STRING,
      validate: {
        checkLen(value){
          if(value.length >=5 && value.length <= 20){
            return true
          }else{
            throw new Error("Do dai tu 5-20 cho address")
          }
        }
      }
    },
    province: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'station',
  });
  return station;
};