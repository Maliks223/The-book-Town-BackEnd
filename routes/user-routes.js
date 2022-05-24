import express from "express";
import { allRequests, userForm ,lendRequest, deleteRequest } from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", allRequests); //for ADMIN
userRouter.post("/user", userForm); //FOR USER frontend
userRouter.delete('/requestDelete/:id',deleteRequest)
userRouter.post("/request", lendRequest)//For User frontend

export default userRouter;
