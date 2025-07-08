// models/PartnerRegistration.js

import mongoose from "mongoose";

const Vendor = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
    },
    brandName: {
      type: String,
      required: true,
      trim: true,
    },
    aboutProduct: {
      type: String,
      default: "",
      trim: true,
    },
    logoUrl: {
      type: String,
      default: "",
    },
    aadharCardUrl: {
      type: String,
      required: true,
    },
    panCardUrl: {
      type: String,
      required: true,
    },
    cancelChequeUrl: {
      type: String,
      required: true,
    },
    bankAccNumber: {
      type: String,
      required: true,
    },
    IFSC: {
      type: String,
      required: true,
    },
    accountHolderName: {
      type: String,
      required: true,
    },
    bankBranch: {
      type: String,
      required: true,
    },
    GSTNumber: {
      type: String,
      required: true,
    },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    aadharNumber:{type:Number,required:true},
    panNumber:{type:Number, required:true},
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
);

// If already compiled, use existing, else compile
export default mongoose.models.PartnerRegistration ||
  mongoose.model("Vendor", Vendor);
