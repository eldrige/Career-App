import asyncHandler from 'express-async-handler';
import Email from '../models/emailModel.js';
import sendEmail from '../utils/emailUtil.js';

const saveEmailToMailingList = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const emailExist = await Email.findOne({ name });
  if (emailExist) {
    // 400 means bad request
    res.status(400);
    throw new Error('Email already exist');
  }
  // create is syntactic sugar, it basiclly acts like a save
  const email = await Email.create({
    name,
  });

  if (email) {
    // 201 means a new resource was created
    res.status(201).json({
      _id: email._id,
      name: email.name,
      mesage: 'Email added to mailing list',
    });
  } else {
    res.status(400);
    throw new Error('Invalid email');
  }
});

const getAllSubscribers = asyncHandler(async (req, res) => {
  const emailList = await Email.find({});
  res.send(emailList);
});

const sendEmailToSubsrcibers = asyncHandler(async (req, res) => {
  const { subject, message } = req.body;
  const emailList = await Email.find({});

  const emailAddresses = emailList.map((email) => email.name);
  emailAddresses.toString();

  try {
    await sendEmail(emailAddresses, subject, message);
    res.send('Emails sent');
  } catch (error) {
    console.error(error.message);
  }
});

export { saveEmailToMailingList, sendEmailToSubsrcibers, getAllSubscribers };
