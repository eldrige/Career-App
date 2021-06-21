import mongoose from 'mongoose';

const concourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
      // unique: true,
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
  },
  {
    timestamps: true, //this is going to create a time field automatically for all ppties
  }
);

const Concour = mongoose.model('Concour', concourSchema);

export default Concour;
