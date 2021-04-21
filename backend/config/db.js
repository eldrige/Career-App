import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://127.0.0.1/Jongleur', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongo Db connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
