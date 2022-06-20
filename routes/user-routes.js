import express from "express";
import {
  allRequests,
  userForm,
  deleteRequest,
  deleteUser,
  updateUser,
  getRequest,
} from "../controllers/user-controller";
import { protect } from "../middleware/auth";

const userRouter = express.Router();

userRouter.get("/", protect, allRequests); //for ADMIN
userRouter.post("/user", userForm); //FOR USER frontend
userRouter.delete("/requestDelete/:id", protect, deleteRequest);
userRouter.get("/request/:id", getRequest);
userRouter.delete("/returned/:id", protect, deleteUser);
userRouter.put("/update/:id", protect, updateUser);
// userRouter.post("/request", lendRequest)//For User frontend

export default userRouter;
