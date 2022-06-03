import express from "express";
import {
  addContorlFront,
  getControlFront,
} from "../controllers/control-F-controller";

const controlFRouter = express.Router();

controlFRouter.get("/", getControlFront);
controlFRouter.post("/add", addContorlFront);

export default controlFRouter;
