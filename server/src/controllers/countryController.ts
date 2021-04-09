import { NextFunction, Request, Response } from "express";

import Country from "../models/country.model";
import Logger from "../modules/logging/logger";

export default class CountryController {
  static countryList(req: Request, res: Response, next: NextFunction) {
    Country.find({})
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err: Error) => {
        Logger.error(err.message);
        return next(err);
      });
  }

  static countryById(req: Request, res: Response, next: NextFunction) {
    Country.findById({ _id: req.params.id })
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err: Error) => {
        Logger.error(err.message);
        return next(err);
      });
  }

  static countryCreate(req: Request, res: Response) {
    res.send("NOT IMPLEMENTED: Create Country");
  }
}
