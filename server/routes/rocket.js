import express from "express";
import rocketController from "../controllers/rocketController";

const router = express.Router();

router.get("/get-all", rocketController.getAll);

export default router;
