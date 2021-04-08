import mongoose from "mongoose";

import Config from "../modules/config/config";
import Logger from "../modules/logging/logger";

export class DbService {
  private conf: Config;

  public constructor() {
    this.conf = Config;
  }

  public async getDbConnection() {
    const uri = `mongodb+srv://${this.conf.DB.User}:${this.conf.DB.Password}@${this.conf.DB.Host}?authSource=${this.conf.DB.AuthSource}&retryWrites=true&w=majority`;

    mongoose.connect(uri);

    let db = mongoose.connection;

    db.on("error", () => Logger.error("Shit went south :("));
    db.once("open", () => Logger.debug("It works?"));
  }
}
