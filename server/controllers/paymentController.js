const db = require("../models");

const controller = {
  create: function(req, res) {
    db.payments.create({
        name: req.body.name,
        description: req.body.description
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

export { controller as default };
