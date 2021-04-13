import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image_url: {
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
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
