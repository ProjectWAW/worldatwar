import mongoose from "mongoose";

import Config from "../modules/config/config";
import Logger from "../modules/logging/logger";

export class DbService {
  private conf: Config;

  public constructor() {
    this.conf = Config;
  }

  public async ConnectToDb() {
    const uri = `mongodb+srv://${this.conf.DB.User}:${this.conf.DB.Password}@${this.conf.DB.Host}?authSource=${this.conf.DB.AuthSource}&retryWrites=true&w=majority`;

    try {
      mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (err: any) {
      Logger.error(`Unable to establish DB connection: ${err.message}`);
    }
  }
}
