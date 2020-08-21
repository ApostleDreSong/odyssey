module.exports = function (sequelize, DataTypes) {
  var Station = sequelize.define("stations", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
    },
    orbit: {
      type: DataTypes.STRING,
    },
  });
  return Station;
};
