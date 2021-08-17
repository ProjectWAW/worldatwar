import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import User from '../models/user.model';
import Logger from '../modules/logging/logger';

export default class UserController {
  static getAll(req: Request, res: Response, next: NextFunction): void {
    User.find({})
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
    User.findById({ _id: req.params.id })
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
    const data = req.body;
    data._id = uuid();
    const newCountry = new User(data);

    newCountry.save((err) => {
      if (err) {
        Logger.error(err.message);
        return next(err);
      }

      res.status(200).json();
    });
  }
}
