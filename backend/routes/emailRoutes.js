import express from 'express';
const router = express.Router();
import { saveEmailToMailingList } from '../controllers/emailController.js';

router.route('/').post(saveEmailToMailingList);

export default router;
