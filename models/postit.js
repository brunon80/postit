'use strict';
module.exports = function(sequelize, DataTypes) {
  var Postit = sequelize.define('Postit', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    color: DataTypes.STRING,
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