import express from 'express';
const router = express.Router();
import {
  getAllSubscribers,
  saveEmailToMailingList,
  sendEmailToSubsrcibers,
} from '../controllers/emailController.js';
// ? need to implemnt 3LO with gmail for it to work
router.post('/send-bulk', sendEmailToSubsrcibers);
router.route('/').post(saveEmailToMailingList);
router.route('/').get(getAllSubscribers);

export default router;
