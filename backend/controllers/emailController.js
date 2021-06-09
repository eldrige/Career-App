import asyncHandler from 'express-async-handler';
import Email from '../models/emailModel.js';

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

export { saveEmailToMailingList };
