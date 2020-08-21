module.exports = function (sequelize, DataTypes) {
  var Wallet = sequelize.define("wallets", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    balance: {
      type: DataTypes.DECIMAL(19, 2),
      allowNull: false,
      defaultValue: 0.00,
    },
  });
  Wallet.associate = (models) => {
    models.wallets.belongsTo(models.users, {
      constraints: false,
      foreignKey: "userId",
      onDelete: "RESTRICT",
      onUpdate: "CASCADE",
    });
  };
  return Wallet;
};
