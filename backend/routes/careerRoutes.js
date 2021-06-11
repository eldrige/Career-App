import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();
import {
  getCareers,
  getCareerById,
  editCareer,
  getPaginatedCareers,
} from '../controllers/careerController.js';

router.route('/').get(getCareers);
//  ? this is equivalent to router.get('/', getProducts)
router.route('/:id').get(getCareerById);
router.route('/edit/:id').post(protect, admin, editCareer);
router.route('/paginated').get(getPaginatedCareers);

export default router;
