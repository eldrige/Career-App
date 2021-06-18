import express from 'express';
const router = express.Router();
import {
  getAllSubscribers,
  saveEmailToMailingList,
  sendEmailToSubsrcibers,
} from '../controllers/emailController.js';

router.post('/send-bulk', sendEmailToSubsrcibers);
router.route('/').post(saveEmailToMailingList);
router.route('/').get(getAllSubscribers);

export default router;
