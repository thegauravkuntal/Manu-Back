import express from "express";

import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();



/* 🔥 GET ALL CATEGORIES */
router.get(
  "/",
  getCategories
);



/* 🔥 CREATE CATEGORY (ADMIN) */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createCategory
);



/* 🔥 UPDATE CATEGORY (ADMIN) */
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateCategory
);



/* 🔥 DELETE CATEGORY (ADMIN) */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteCategory
);



export default router;