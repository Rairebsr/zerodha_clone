import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  verified: { type: Boolean, default: false },
  userId: { type: String, unique: true, sparse: true },
  password: { type: String, default: null },

  // ✅ Steps completion tracker
  stepsCompleted: {
    pan: { type: Boolean, default: false },
    aadhaar: { type: Boolean, default: false },
    profile: { type: Boolean, default: false },
    bank: { type: Boolean, default: false },
    webcam: { type: Boolean, default: false },
  },

  // ✅ PAN & Aadhaar data (if needed later)
  panDetails: {
    panNumber: { type: String },
    dob: { type: String }
  },
  aadhaarDetails: {
    aadhaarNumber: { type: String }
  },

  // ✅ Profile details
  profileDetails: {
    fatherName: { type: String },
    motherName: { type: String },
    maritalStatus: { type: String },
    income: { type: String },
    experience: { type: String },
    occupation: { type: String },
    settlementPref: { type: String },
    pepStatus: { type: String }
  },

  // ✅ Bank details
  bankDetails: {
    ifsc: { type: String },
    micr: { type: String },
    accountNo: { type: String },
    bankName: { type: String },
    branch: { type: String }
  },

  // ✅ TOTP (2FA) and metadata
  totpSecret: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('User', userSchema);
