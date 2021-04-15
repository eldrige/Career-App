import mongoose from 'mongoose';

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
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
    company: {
      type: String,
    },
  },
  {
    timestamps: true, //this is going to create a time field automatically for all ppties
  }
);

const Job = mongoose.model('Job', jobSchema);

export default Job;
