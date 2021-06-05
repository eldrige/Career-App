import mongoose from 'mongoose';

const concourSchema = mongoose.Schema({
  name: {
    type: String,
    // required: true,
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
  estimatedStartDate: {
    type: Date,
  },
  numberOfAcceptedCandidates: { type: Number },
  eligibility: [{ type: String }],
  documentsRequired: [{ type: String }],
});

const Concour = mongoose.model('Concour', concourSchema);

export default Concour;
