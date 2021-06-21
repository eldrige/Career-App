import mongoose from 'mongoose';
import Concour from './concourModel.js';
let concourSchema = Concour.schema;

const careerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    background: [{ type: String }], // background will be an enum
    image_url: {
      title: 'Faculte Medicine des Sciences Biomedicale',
      type: String,
    },
    concours: [concourSchema], // change this to a concour schema
    institutions: [{ type: String }], // another schema
    description: {
      type: String,
    },
    // university schema [another array]
  },
  {
    timestamps: true, //this is going to create a time field automatically for all ppties
  }
);

const Career = mongoose.model('Career', careerSchema);

export default Career;
