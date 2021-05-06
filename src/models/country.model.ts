import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  _id: String,
  capital: String,
  government: String,
  headOfGovernment: String,
  headOfState: String,
  name: String,
  party: String,
  shortName: String,
  status: String
});

export default mongoose.model('Country', CountrySchema);
