import mongoose from 'mongoose';

const concourSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
  },
  estimatedStartDate: Date,
  numberOfAcceptedCandidates: Number,
  eligibility: [{ String }],
  documentsRequired: [{ String }],
});

const Concour = mongoose.model('Concour', concourSchema);

export default Concour;
