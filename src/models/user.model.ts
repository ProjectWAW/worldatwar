import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  _id: String,
  email: String,
  username: String,
  password: String,
  createdDate: Date
});

export default mongoose.model('User', UserSchema);
