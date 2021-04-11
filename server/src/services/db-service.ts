import mongoose from "mongoose";

import Config from "../modules/config/config";
import Logger from "../modules/logging/logger";

import Country from "../models/country.model";

export class DbService {
  private conf: Config;

  public constructor() {
    this.conf = Config;
  }

  public async ConnectToDb() {
    const uri = `mongodb+srv://${this.conf.DB.User}:${this.conf.DB.Password}@${this.conf.DB.Host}?authSource=${this.conf.DB.AuthSource}&retryWrites=true&w=majority`;

    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  }

  // public async getDbConnection() {
  //   const uri = `mongodb+srv://${this.conf.DB.User}:${this.conf.DB.Password}@${this.conf.DB.Host}?authSource=${this.conf.DB.AuthSource}&retryWrites=true&w=majority`;

  //   mongoose.connect(uri);

  //   let db = mongoose.connection;

  //   db.on("error", (err: Error) =>
  //     Logger.error(
  //       `Unable to establish connection to the database:\n\t${err.name}:\n\t${err.message}\n` +
  //         "-".repeat(80)
  //     )
  //   );
  //   db.once("open", () => Logger.debug("It works?"));

  //   const country = new Country({
  //     _id: "abc",
  //     government: "baguette",
  //     headOfGovernment: "jake",
  //     name: "france",
  //     party: "honhon",
  //     status: "surrendering",
  //   });

  //   country.save((err, country) => {
  //     if (err) {
  //       Logger.error(`Well this is borked: ${err}`);
  //     }
  //   });
  // }
}
