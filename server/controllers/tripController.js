const db = require("../models");

const controller = {
  calculate: async (req, res, next) => {
    try {
          let rocket = await db.rockets.findOne({
            where: {
              id: req.body.rocket,
            },
          });
          let transport;
          //find start station orbit
          let startStationDetails = await db.stations.findOne({
            where: {
              id: req.body.startStation,
            },
          });

          //find end station orbit
          let endStationDetails = await db.stations.findOne({
            where: {
              id: req.body.endStation,
            },
          });

          if (startStationDetails.orbit !== endStationDetails.orbit) {
            transport = rocket.transOrbitFare;
          } else {
            transport = rocket.intraOrbitFare;
          }
          ///Get landing station if man-made
          let endSationDetails = await db.stations.findOne({
            where: {
              id: req.body.endStation,
            },
          });

          let endStationRoyalty = 0.0;
          if (endSationDetails.type === "Manmade") {
            endStationRoyalty = rocket.royalty;
          }
          let totalFare = Number(transport) + Number(endStationRoyalty);

          res.status(200).send({
            transportFare: Number(transport),
            royalty: Number(endStationRoyalty),
            totalFare,
          });
        } catch (e) {
      next({
        status: 500,
        message: e,
      });
    }
  },
  takeTrip: async (req, res, next) => {
    try {
      let rocket = await db.rockets.findOne({
        where: {
          id: req.body.rocket,
        },
      });
      let transport;
      if (req.body.startStation !== req.body.endStation) {
        transport = rocket.transOrbitFare;
      } else {
        transport = rocket.transport = rocket.transOrbitFare;
      }
      ///Get landing station if man-made
      let endSationDetails = await db.stations.findOne({
        where: {
          id: req.body.endStation,
        },
      });

      let endStationRoyalty = 0.0;
      if (endSationDetails.type === "Manmade") {
        endStationRoyalty = rocket.royalty;
      }
      let totalFare = Number(transport) + Number(endStationRoyalty);
      //Debit wallet for fare
      let userWallet = await db.wallets.findOne({
        where: {
          userId: req.body.userId,
        },
      });
      let presentBalance = userWallet.balance;
      let newBalance = Number(presentBalance) - Number(totalFare);
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
      res.status(200).send(`${newBalance}`);
    } catch (e) {
      next({
        status: 500,
        message: e,
      });
    }
  },
};

export { controller as default };
