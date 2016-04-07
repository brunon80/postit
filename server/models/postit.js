'use strict';
module.exports = function(sequelize, DataTypes) {
  var Postit = sequelize.define('Postit', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Postit.belongsTo(models.User);
      }
    }
  });
  return Postit;
};