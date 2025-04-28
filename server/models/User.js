import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String },
  phoneNumber: { type: String },
  country: { type: String },
  division: { type: String },
  district: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
