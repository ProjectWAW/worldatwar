import mongoose from "mongoose";
import { Guid } from "guid-typescript";

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  _id: Guid,
  government: String,
  headOfGovernment: String,
  name: String,
  party: String,
  status: String,
});

export default mongoose.model("Country", CountrySchema);
