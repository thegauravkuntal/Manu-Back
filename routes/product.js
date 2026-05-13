import express from "express";

import {
  getFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import authMiddleware from "../middlewares/authMiddleware.js";

import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();



/* 🔥 GET FEATURED PRODUCTS */
router.get(
  "/featured",
  getFeaturedProducts
);



/* 🔥 CREATE PRODUCT (ADMIN) */
router.post(
  "/",
  authMiddleware,
  roleMiddleware("admin"),
  createProduct
);



/* 🔥 UPDATE PRODUCT (ADMIN) */
router.put(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  updateProduct
);



/* 🔥 DELETE PRODUCT (ADMIN) */
router.delete(
  "/:id",
  authMiddleware,
  roleMiddleware("admin"),
  deleteProduct
);



export default router;