import mongoose from 'mongoose';

const careerSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
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

const User = mongoose.model('User', careerSchema);

export default User;
