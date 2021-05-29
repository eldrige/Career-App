import mongoose from 'mongoose';
import Concour from './concourModel.js';
let concourSchema = Concour.schema;

const careerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  background: [{ type: String }], // background will be an enum
  image_url: {
    type: String,
  },
  concours: [concourSchema], // change this to a concour schema
  institutions: [{ type: String }], // another schema
  description: {
    type: String,
  },
  // university schema [another array]
});

const Career = mongoose.model('Career', careerSchema);

export default Career;
