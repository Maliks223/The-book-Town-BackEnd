import express from "express";
import { getAdmin, login, signup } from "../controllers/admin-controller";
import { protect } from "../middleware/auth";

const adminRouter = express.Router();

adminRouter.get("/", getAdmin);
adminRouter.post("/signup", signup);
adminRouter.post("/login", login);

export default adminRouter;
