const db = require("../models");

const controller = {
  getAll: async (req, res, next) => {
    try {
      let rockets = await db.rockets.findAll();
      res.status(200).send(rockets);
    } catch (e) {
      next({
        status: 500,
        message: e,
      });
    }
  },
};

export { controller as default };
