import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
// import { dirname } from 'path';
import cors from 'cors';
import careerRouter from './routes/careerRoutes.js';
import userRouter from './routes/userRoutes.js';
import jobRouter from './routes/jobRoutes.js';
import concourRouter from './routes/concourRoutes.js';
import connectDB from './config/db.js';

// import expose from './expose.js';
const __dirname = path.resolve();

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;
// const __dirname = path.resolve(path.dirname(''));

app.use(express.json());
app.use(morgan('dev'));

app.use(cors());

app.use('/api/users/', userRouter);
app.use('/api/careers/', careerRouter);
app.use('/api/jobs/', jobRouter);
app.use('/api/concours/', concourRouter);

app.use(express.static(path.join(__dirname, '/frontend/dist/career-app/')));

app.get('*', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, 'frontend', 'dist', 'career-app', 'index.html')
  );
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log('this should work now');
