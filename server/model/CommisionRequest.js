import mongoose from "mongoose";

const CommissionRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  deadline: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
});


const CommissionRequest = mongoose.model("CommissionRequest", CommissionRequestSchema);

export default CommissionRequest;