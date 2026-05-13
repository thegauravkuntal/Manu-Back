import express from "express";

import {
  getTopbar,
  createTopbar,
  updateTopbar,
  deleteTopbar,
} from "../controllers/topbarController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();



/* 🔥 GET TOPBAR */
router.get(
  "/",
  getTopbar
);



/* 🔥 CREATE TOPBAR (ADMIN) */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createTopbar
);



/* 🔥 UPDATE TOPBAR (ADMIN) */
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateTopbar
);



/* 🔥 DELETE TOPBAR (ADMIN) */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteTopbar
);



export default router;