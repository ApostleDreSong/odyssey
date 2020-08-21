module.exports = function (sequelize, DataTypes) {
  var Rocket = sequelize.define("rockets", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transOrbitFare: {
      type: DataTypes.DECIMAL(19, 2),
    },
    intraOrbitFare: {
      type: DataTypes.DECIMAL(19, 2),
    },
    royalty: {
      type: DataTypes.DECIMAL(19, 2),
    }
  });
  return Rocket;
};
