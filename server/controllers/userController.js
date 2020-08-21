const db = require("../models");

const controller = {
  login: async (req, res, next) => {
    try {
      let { email } = req.body;
      if (email === "ademesodamilare@gmail.com") {
        res.status(200).send("success");
      } else {
        throw "User not found"
      }
    } catch (e) {
      next({
        status: 500,
        message: e,
      });
    }
  },
};

export { controller as default };
