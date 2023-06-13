import express from "express";
import { figureController } from "../controller";

const router = express.Router();

router.get("/", figureController.getFigures);
router.get("/units", figureController.getUnits);
router.post("/perimeter", figureController.perimeter);
router.post("/area", figureController.area);

export default router;
