import mongoose from 'mongoose';

const carImagesSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true }, // Eindeutige ID für jedes Auto
  images: [{ type: String }] // Array von Strings für URLs zu Bildern
});

export const CarImages = mongoose.models.CarImages || mongoose.model('CarImages', carImagesSchema);
