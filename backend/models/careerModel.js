import mongoose from 'mongoose';

const careerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  background: String, // background will be an enum
  image_url: {
    type: String,
  },
  concours: [{ type: String }], // change this to a concour schema
  institutions: [{ type: String }], // another schema
  description: {
    type: String,
  },
  // university schema [another array]
});

const Career = mongoose.model('Career', careerSchema);

export default Career;
