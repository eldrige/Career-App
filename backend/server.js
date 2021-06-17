import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import careerRouter from './routes/careerRoutes.js';
import userRouter from './routes/userRoutes.js';
import emailRouter from './routes/emailRoutes.js';
import jobRouter from './routes/jobRoutes.js';
import concourRouter from './routes/concourRoutes.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Jongleur API is running');
});

app.use(cors());

app.use('/api/users/', userRouter);
app.use('/api/careers/', careerRouter);
app.use('/api/jobs/', jobRouter);
app.use('/api/concours/', concourRouter);
app.use('/api/emails', emailRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
