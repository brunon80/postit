'use strict';
module.exports = function(sequelize, DataTypes) {
  var Postitdbp = sequelize.define('Postitdbp', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    color: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Postitdbp.belongsTo(models.User);
      }
    }
  });
  return Postitdbp;
};