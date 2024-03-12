import { Schema, model, models } from "mongoose";

const campanySchema = new Schema({
   campanyName: {
      type: String,
   },
   campanyProfile: {
      type: String,
   },
   userName: {
      type: String,
      required: true,
   },
   fullName: {
      type: String,
   },
   email: {
      type: String,
      required: true,
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

const Campany = models.campany || model("Campany", campanySchema);

export default Campany;
