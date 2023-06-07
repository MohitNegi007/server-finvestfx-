import express from "express";
import { getDishes, addDishes } from "../controller/dishes-controller.js";

const router = express.Router();

router.get("/", getDishes);
router.post("/add", addDishes);

export default router;
