import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://eldrige:baguvix75009@cluster0.juzpn.mongodb.net/Jongleur?retryWrites=true&w=majority',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`Mongo Db connected`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
