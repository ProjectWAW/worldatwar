import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  _id: String,
  country: String,
  cssClass: String,
  date: String,
  location: Array,
  marker: String,
  pageWeight: Number,
  source: String,
  text: String
});

export default mongoose.model('Event', EventSchema);