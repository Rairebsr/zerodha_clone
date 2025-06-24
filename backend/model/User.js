import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  verified: { type: Boolean, default: false },
  userId: { type: String, unique: true, sparse: true },
  password: { type: String, default: null },
  stepsCompleted: {
    pan: { type: Boolean, default: false },
    aadhaar: { type: Boolean, default: false },
    profile: { type: Boolean, default: false },
    bank: { type: Boolean, default: false },
    webcam: { type: Boolean, default: false },
    
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);