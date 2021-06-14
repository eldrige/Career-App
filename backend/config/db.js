import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_INSTANCE, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongo Db connected:Jongleur `);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
