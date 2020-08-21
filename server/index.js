import routers from "./routes";
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";

export default (path) => {
  // Create Instance of Express
  const app = express();
  const cors = require("cors");

  // Run Morgan for Logging
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(cors({ origin: "*" }));

  app.use(express.static(`${path}/client`));
  app.use("/api/payment", routers.payment);
  app.use("/api/user", routers.user);
  app.use("/api/wallet", routers.wallet);
  app.use("/api/rocket", routers.rocket);
  app.use("/api/station", routers.station);
  app.use("/api/fare", routers.fare);

  app.use((req, res, next) => {
    next({
      status: 404,
      message: "Page not found",
    });
  });

  app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status).send(err.message);
  });

  return app;
  // -------------------------------------------------
};
