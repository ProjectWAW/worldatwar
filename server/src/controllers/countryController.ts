import { Request, Response } from "express";
import Country from "../models/country.model";

exports.countryList = (req: Request, res: Response) => {
  res.send("NOT IMPLEMENTED: Country List");
};

exports.countryById = (req: Request, res: Response) => {
  res.send("NOT IMPLEMENTED: Country by Id" + req.params.id);
};

exports.countryCreate = (req: Request, res: Response) => {
  res.send("NOT IMPLEMENTED: Create Country");
};
