module.exports = function(sequelize, DataTypes) {
  var Payment = sequelize.define("payments", {
    walletId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(19, 2),
    },
    paymentDate: {
      type: DataTypes.DATE
    }
  });
   Payment.associate = (models) => {
     models.payments.belongsTo(models.wallets, {
       constraints: false,
       foreignKey: "walletId",
       onDelete: "RESTRICT",
       onUpdate: "CASCADE",
     });
   };
  return Payment;
};
