import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors'
const app = express();
import careerRouter from './routes/careerRoutes.js';
dotenv.config();
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('API is running');
});


app.use(cors());

app.use('/api/careers/', careerRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
