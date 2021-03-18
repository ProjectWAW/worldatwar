import express from "express";

import Logger from "./modules/logging/logger";
import Config from "./modules/config/config";

const app = express();
const PORT = Config.App.Port;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  Logger.debug(`⚡[Server]: WaW server is running at http://localhost:${PORT}`);
});
