import express from "express";
const db = require("../models");
const sequelize = db.sequelize;
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //rockets
    await sequelize.query(
      "INSERT INTO `rockets` VALUES (1,'Falcon 1',250.00,50.00,200.00,'2020-06-10 00:00:00','2020-06-10 00:00:00'),(2,'Falcon 9',500.00,100.00,400.00,'2020-06-10 00:00:00','2020-06-10 00:00:00')",
      { raw: false }
    );
    //stations
    await sequelize.query(
      "INSERT INTO `stations` VALUES (1,'Abuja','Natural','Earth','2020-06-10 00:00:00','2020-06-10 00:00:00'),(2,'Spock','Natural','Mars','2020-06-10 00:00:00','2020-06-10 00:00:00'),(3,'International Space Station','Manmade','Earth','2020-06-10 00:00:00','2020-06-10 00:00:00'),(4,'Moon','Natural','Earth','2020-06-10 00:00:00','2020-06-10 00:00:00')",
      { raw: false }
    );
    //users
    await sequelize.query(
      "INSERT INTO `users` VALUES (1,'ademesodamilare@gmail.com','2020-06-10 00:00:00','2020-06-10 00:00:00')",
      { raw: false }
    );
    //wallets
    await sequelize.query(
      "INSERT INTO `wallets` VALUES (1,1,0.00,'2020-06-10 00:00:00','2020-08-21 07:14:35')",
      { raw: false }
    );
    res.status(200).send("Seed data successfully updated");
  } catch (e) {
    next({
      status: 500,
      message: e,
    });
  }
});

export default router;
