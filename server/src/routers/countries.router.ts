import express from "express";
import Logger from "../modules/logging/logger";

const router = express.Router();

// Default get all
router.get("/", (req, res) => {
  res.send("All the Countries go here");
});

export default router;
