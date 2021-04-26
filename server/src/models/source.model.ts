import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SourceSchema = new Schema({
  _id: String,
  author: String,
  accessDate: String,
  publishDate: String,
  publisher: Array,
  title: String,
  type: Number,
  url: String
});

export default mongoose.model('source', SourceSchema);