module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("users", {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  });
  User.associate = (models) => {
    models.users.hasOne(models.wallets);
  };
  return User;
};
