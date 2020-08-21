const db = require("../models");

const controller = {
  load: async (req, res, next) => {
    try {
      let userWallet = await db.wallets.findOne({
        where: {
          userId: req.body.userId,
        },
      });
      let presentBalance = userWallet.balance;
      let newBalance = Number(presentBalance) + Number(req.body.amount);
      await db.wallets.update(
        {
          balance: newBalance,
        },
        {
          where: {
            userId: req.body.userId,
          },
        }
      );
      return res.status(200).send(`${newBalance}`);
    } catch (e) {
      next({
        status: 500,
        message: e,
      });
    }
  },
  balance: async (req, res, next) => {
    try {
      let userWallet = await db.wallets.findOne({
        where: {
          userId: req.params.userId,
        },
      });
      let presentBalance = userWallet.balance;
      res.status(200).send(presentBalance);
    } catch (e) {
      next({
        status: 500,
        message: e,
      });
    }
  },
};

export { controller as default };
