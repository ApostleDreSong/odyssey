import express from "express";
import paymentController from "../controllers/paymentController"

const router = express.Router();

router.get("/", paymentController.create);

export default router;
