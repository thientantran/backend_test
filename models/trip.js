'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({station, ticket}) {
      // define association here
      this.belongsTo(station, {foreignKey:"fromStation", as: "from"})
      this.belongsTo(station, {foreignKey:"toStation", as: "to"})
      this.hasMany(ticket, {foreignKey:"trip_id"})
    }
  }
  trip.init({
    startTime: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'trip',
  });
  return trip;
};