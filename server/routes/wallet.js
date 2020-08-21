import express from "express";
import walletController from "../controllers/walletController";

const router = express.Router();

router.post("/load", walletController.load);
router.get("/balance/:userId", walletController.balance);

export default router;
