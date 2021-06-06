import mongoose from 'mongoose';

const emailSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //this is going to create a time field automatically for all ppties
  }
);

const Email = mongoose.model('Email', emailSchema);

export default Email;
