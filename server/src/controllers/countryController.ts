import { NextFunction, Request, Response } from "express";

import Country from "../models/country.model";
import Logger from "../modules/logging/logger";

export default class CountryController {
  static getAll(req: Request, res: Response, next: NextFunction): void {
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

  static getById(req: Request, res: Response, next: NextFunction): void {
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

  static add(req: Request, res: Response, next: NextFunction): void {
    res.send("NOT IMPLEMENTED: Create Country");
  }
}
