import express from 'express';

const router = express.Router();
import { getScholarships } from '../controllers/scholarshipController.js';

router.route('/').get(getScholarships);

export default router;
