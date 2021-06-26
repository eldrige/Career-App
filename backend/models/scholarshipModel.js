import mongoose from 'mongoose';

const scholarshipSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
    },
    location: {
      type: String,
    },
    contractType: {
      type: String,
    },
    datePublished: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true, //this is going to create a time field automatically for all ppties
  }
);

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

export default Scholarship;
