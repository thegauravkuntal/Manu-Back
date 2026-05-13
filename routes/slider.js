import express from "express";
import { getSlides, createSlide } from "../controllers/sliderController.js";

const router = express.Router();

router.get("/", getSlides);
router.post("/", createSlide);

export default router;