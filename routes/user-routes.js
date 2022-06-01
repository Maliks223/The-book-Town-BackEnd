import express from "express";
import {
  allRequests,
  userForm,
  deleteRequest,
  deleteUser,
  updateUser,
} from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.get("/", allRequests); //for ADMIN
userRouter.post("/user", userForm); //FOR USER frontend
userRouter.delete("/requestDelete/:id", deleteRequest);
userRouter.delete("/returned/:id", deleteUser);
userRouter.put("/update/:id", updateUser);
// userRouter.post("/request", lendRequest)//For User frontend

export default userRouter;
