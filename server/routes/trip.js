import express from "express";
import tripController from "../controllers/tripController";

const router = express.Router();

router.post("/calculate", tripController.calculate);

router.post("/take-trip", tripController.takeTrip);

export default router;
