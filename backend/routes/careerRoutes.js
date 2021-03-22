import express from 'express';

const router = express.Router();
import { getCareers, getCareerById } from '../controllers/careerController.js';

router.route('/').get(getCareers);
//  ? this is equivalent to router.get('/', getProducts)
router.route('/:id').get(getCareerById);

export default router;
