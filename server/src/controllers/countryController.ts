import { Request, Response } from "express";
import Country from "../models/country.model";

export default class CountryController {
  static countryList(req: Request, res: Response) {
    res.send("NOT IMPLEMENTED: Country List");
  }

  static countryById(req: Request, res: Response) {
    res.send("NOT IMPLEMENTED: Country by Id" + req.params.id);
  }

  static countryCreate(req: Request, res: Response) {
    res.send("NOT IMPLEMENTED: Create Country");
  }
}
