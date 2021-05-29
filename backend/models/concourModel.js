import mongoose from 'mongoose';

const concourSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  abbrev: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
  estimatedStartDate: Date,
  numberOfAcceptedCandidates: Number,
  eligibility: [{ String }],
  documentsRequired: [{ String }],
});

const Concour = mongoose.model('Concour', concourSchema);

export default Concour;
