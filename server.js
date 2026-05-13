import express from "express";
import cors from "cors";
import dotenv from "dotenv";

/* 🔥 DATABASE */
import connectDB from "./config/db.js";

/* 🔥 ROUTES */
import authRoutes from "./routes/auth.js";
import appBannerRoutes from "./routes/appBanner.js";
import sliderRoutes from "./routes/slider.js";
import categoryRoutes from "./routes/category.js";
import faqRoutes from "./routes/faq.js";
import productRoutes from "./routes/product.js";
import industryRoutes from "./routes/industry.js";
import cityRoutes from "./routes/city.js";
import testimonialRoutes from "./routes/testimonial.js";
import statRoutes from "./routes/stat.js";
import manufacturingRoutes from "./routes/manufacturing.js";
import footerRoutes from "./routes/footer.js";
import topbarRoutes from "./routes/topbar.js";
import navbarRoutes from "./routes/navbar.js";
import locationCityRoutes from "./routes/locationCity.js";

/* 🔥 ENV */
dotenv.config();

/* 🔥 APP */
const app = express();



/* 🔥 CONNECT DATABASE */
connectDB();



/* 🔥 MIDDLEWARES */

app.use(
  cors({
    origin:
      "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);



/* 🔥 STATIC FILES */
app.use(
  "/uploads",
  express.static("uploads")
);



/* 🔥 API ROUTES */

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/app-banner",
  appBannerRoutes
);

app.use(
  "/api/sliders",
  sliderRoutes
);

app.use(
  "/api/categories",
  categoryRoutes
);

app.use(
  "/api/faqs",
  faqRoutes
);

app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/industries",
  industryRoutes
);

app.use(
  "/api/cities",
  cityRoutes
);

app.use(
  "/api/testimonials",
  testimonialRoutes
);

app.use(
  "/api/stats",
  statRoutes
);

app.use(
  "/api/manufacturing",
  manufacturingRoutes
);

app.use(
  "/api/footer",
  footerRoutes
);

app.use(
  "/api/topbar",
  topbarRoutes
);

app.use(
  "/api/navbar",
  navbarRoutes
);

app.use(
  "/api/location-cities",
  locationCityRoutes
);



/* 🔥 HOME ROUTE */
app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    msg: "API Running 🚀",
  });
});



/* 🔥 404 ROUTE */
app.use((req, res) => {

  res.status(404).json({
    success: false,
    msg: "Route not found ❌",
  });
});



/* 🔥 GLOBAL ERROR HANDLER */
app.use(
  (
    err,
    req,
    res,
    next
  ) => {

    console.log(
      "SERVER ERROR:",
      err.message
    );

    res.status(500).json({
      success: false,
      msg:
        "Internal Server Error ❌",
    });
  }
);



/* 🔥 SERVER */
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `🚀 Server running on http://localhost:${PORT}`
  );
});