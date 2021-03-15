import express from "express";

import Logger from "./modules/logging/logger";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(PORT, () => {
  Logger.debug(`⚡[Server]: WaW server is running at http://localhost:${PORT}`);
});
