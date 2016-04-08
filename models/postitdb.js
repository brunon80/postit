'use strict';
module.exports = function(sequelize, DataTypes) {
  var Postitdb = sequelize.define('Postitdb', {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Postitdb;
};