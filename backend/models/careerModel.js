import mongoose from 'mongoose';

const careerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  background: String,
  image_url: {
    type: String,
  },
  concours: [{ type: String }],
  institutions: [{ type: String }],
  description: {
    type: String,
  },
});

const Career = mongoose.model('Career', careerSchema);

export default Career;
