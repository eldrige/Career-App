import mongoose from 'mongoose';

const universitySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
  },
  numberOfFaculties: Number,
  documentsRequired: [{ String }],
});

const University = mongoose.model('University', universitySchema);

export default University;
