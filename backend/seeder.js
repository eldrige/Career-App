import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import careers from './data/careers.js';
// import jobs from './data/jobs.js';
import connectDB from './config/db.js';
import Career from './models/careerModel.js';
import Job from './models/jobModel.js';
import User from './models/userModel.js';
import Concour from './models/concourModel.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // * remove all data from the database
    await Career.deleteMany();
    await Job.deleteMany();
    await Concour.deleteMany();
    // * Now insert into a clean database
    await Career.insertMany(careers);

    // console.log(createdCareers);
    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // remove all the data from the database
    await Career.deleteMany();
    await Job.deleteMany();
    await User.deleteMany();
    await Concour.deleteMany();
    console.log('Data destroyed!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
