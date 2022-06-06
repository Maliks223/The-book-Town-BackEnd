import express from "express";
import {
  addContorlFront,
  getControlFront,
  updateControlFront
} from "../controllers/control-F-controller";

const controlFRouter = express.Router();

controlFRouter.get("/", getControlFront);
controlFRouter.post("/add", addContorlFront);
controlFRouter.put('/udpate/:id',updateControlFront)
controlFRouter.delete('/delete/:id')

export default controlFRouter;
