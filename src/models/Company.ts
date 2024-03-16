import { Schema, model, models } from "mongoose";

const companySchema = new Schema({
   companyName: {
      type: String,
   },
   companyProfile: {
      type: String,
   },
   phone: {
      type: String,
   },
   fullName: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
   },
   confirmEmail: {
      type: Boolean,
      default: false,
   },
   password: {
      type: String,
      required: true,
   },
   role: {
      type: String,
      default: "COMPANY",
   },
   validityOfUse: {
      type: Date,
      default: () => Date.now(),
   },
   createdAt: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
   },
});

const Company = models.company || model("Company", companySchema);

export default Company;
