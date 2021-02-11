import mongoose from 'mongoose';

const careerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  image_url: {
    type: String,
  },
  concours: [{ type: String }],
  instiitions: [{ type: String }],
  description: {
    type: String,
  },
});

const Career = mongoose.model('Career', careerSchema);

export default Career;
