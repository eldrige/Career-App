import express from 'express';

const router = express.Router();
import { getJobs, getJobById } from '../controllers/jobController.js';

router.route('/').get(getJobs);
//  ? this is equivalent to router.get('/', getProducts)
router.route('/:id').get(getJobById);

export default router;
