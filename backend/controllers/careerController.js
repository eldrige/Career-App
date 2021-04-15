// import asyncHandler from 'express-async-handler';
import Career from '../models/careerModel.js';

// @desc fetch all careers
// @route GET /api/careers
// @access public
const getCareers = async (req, res) => {
  const careers = await Career.find({});
  res.json(careers);
};

// @desc fetch one careers
// @route GET /api/careers/:id
// @access public
const getCareerById = async (req, res) => {
  const career = await Career.findById(req.params.id);

  if (career) {
    res.json(career);
  } else {
    res.status(404).json({ message: 'Career not found' });
  }
};

export { getCareers, getCareerById };

// ! controllers just encapsulate the logic
