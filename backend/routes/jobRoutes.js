import express from 'express';

const router = express.Router();
import {
  getJobs,
  getJobById,
  getPaginatedJobs,
} from '../controllers/jobController.js';

router.route('/').get(getJobs);
router.route('/paginated').get(getPaginatedJobs);

//  ? this is equivalent to router.get('/', getProducts)
router.route('/:id').get(getJobById);

export default router;
