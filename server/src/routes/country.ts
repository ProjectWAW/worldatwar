import express from "express";
import controller from "../controllers/countryController";

const router = express.Router();

router.get("/", controller.countryList);
router.get("/:id", controller.countryById);
router.post("/create", controller.countryCreate);

export default router;
