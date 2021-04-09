import express from "express";

import Logger from "./modules/logging/logger";
import Config from "./modules/config/config";
import Countries from "./routers/countries.router";
import { DbService } from "./services/db-service";

const app = express();
const PORT = Config.App.Port;

const dbService = new DbService();

// Routes
app.get("/", (req, res) => res.send("Server Status is good! ✔"));

app.use("/countries", Countries);

app.get("/dbtest", (req, res) => {
  dbService.getDbConnection();
  res.send("Testing DB");
});

app.listen(PORT, () => {
  Logger.debug(`⚡[Server]: WaW server is running at http://localhost:${PORT}`);
});
