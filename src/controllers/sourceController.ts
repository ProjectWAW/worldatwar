import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import Source from '../models/source.model';
import Logger from '../modules/logging/logger';

export default class SourceController {
  static getAll(req: Request, res: Response, next: NextFunction): void {
    Source.find({})
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
    Source.findById({ _id: req.params.id })
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
    const newsource = new Source(data);

    newsource.save((err) => {
      if (err) {
        Logger.error(err.message);
        return next(err);
      }

      res.status(200).json();
    });
  }
}
