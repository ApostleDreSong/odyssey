import express from "express";
import stationController from "../controllers/stationController";

const router = express.Router();

router.get("/get-all", stationController.getAll);

export default router;
