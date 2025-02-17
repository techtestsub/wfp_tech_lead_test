import { Schema, model } from 'mongoose';

const CFIIDataSchema = new Schema({
  countryIso3: String,
  date: Date,
  fcs: Number,
  rcsi: Number,
  cfii: Number,
  isAlert: Boolean,
  region: String
}, { timestamps: true });

export default model('CFIIData', CFIIDataSchema);