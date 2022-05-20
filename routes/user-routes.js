import express from "express";
import { allRequests, lendRequest } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", allRequests);
userRouter.post("/request", lendRequest);

export default userRouter;
