import { NextFunction, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import Event from '../models/event.model';
import Logger from '../modules/logging/logger';

export default class EventController {
  static getAll(req: Request, res: Response, next: NextFunction): void {
    Event.find({})
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
    Event.findById({ _id: req.params.id })
      .exec()
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err: Error) => {
        Logger.error(err.message);
        return next(err);
      });
  }

  static getByDate(req: Request, res: Response, next: NextFunction): void {
    Event.find({ date: req.params.date })
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
    const newEvent = new Event(data);

    newEvent.save((err) => {
      if (err) {
        Logger.error(err.message);
        return next(err);
      }

      res.status(200).json();
    });
  }
}
