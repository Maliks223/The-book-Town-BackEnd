import express from "express";
import {
  getBanner,
  addBanner,
  editBanner,
  deleteBanner,
} from "../controllers/banner-controller";

const bannerRouter = express.Router();

bannerRouter.get("/", getBanner);
bannerRouter.post("/add", addBanner);
bannerRouter.put("/edit/:id", editBanner);
bannerRouter.delete("/delete/:id", deleteBanner);

export default bannerRouter;
