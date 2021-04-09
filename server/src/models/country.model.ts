import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  _id: String,
  government: String,
  headOfGovernment: String,
  name: String,
  party: String,
  status: String,
});

export default mongoose.model("Country", CountrySchema);
