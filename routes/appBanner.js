import express from "express";
import {
  getAppBanner,
  createAppBanner
} from "../controllers/appBannerController.js";

const router = express.Router();

router.get("/", getAppBanner);
router.post("/", createAppBanner);

export default router;