import express from "express";

import {
  getTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonialController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();



/* 🔥 GET ALL TESTIMONIALS */
router.get(
  "/",
  getTestimonials
);



/* 🔥 CREATE TESTIMONIAL (ADMIN) */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createTestimonial
);



/* 🔥 UPDATE TESTIMONIAL (ADMIN) */
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateTestimonial
);



/* 🔥 DELETE TESTIMONIAL (ADMIN) */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteTestimonial
);



export default router;