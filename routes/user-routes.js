import express from "express";
import { allRequests, lendRequest } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", allRequests);//for ADMIN
userRouter.post("/request", lendRequest);//FOR USER frontend

export default userRouter;
