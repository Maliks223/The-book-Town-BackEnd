import express from "express";
import { addContorlFront } from "../controllers/control-F-controller";

const controlFRouter = express.Router();

controlFRouter.post("/add", addContorlFront);

export default controlFRouter;
