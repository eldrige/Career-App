import mongoose from 'mongoose';

const universitySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
  },
  type: {}, // either public or private,
  numberOfFaculties: Number,
});

const University = mongoose.model('University', universitySchema);

export default University;
