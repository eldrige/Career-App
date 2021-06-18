import asyncHandler from 'express-async-handler';
import Career from '../models/careerModel.js';

// @desc fetch all careers
// @route GET /api/careers/paginated
// @access public
const getPaginatedCareers = async (req, res) => {
  const pageSize = +req.query.pageSize || 6;
  const currentPage = +req.query.page || 1;
  const count = await Career.countDocuments();

  const careers = await Career.find({})
    .limit(pageSize)
    .skip(pageSize * (currentPage - 1));

  res.json({
    careers,
    currentPage,
    maxCount: count,
    pages: Math.ceil(count / pageSize),
  });
};

// @desc fetch all careers
// @route GET /api/careers/
// @access public
const getCareers = async (req, res) => {
  try {
    const careers = await Career.find({});
    res.json(careers);
  } catch (error) {
    throw new Error('No career found');
  }
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

// @desc Update a career
// @route GET /api/careers/edit/:id
// @access private/Admin
const editCareer = async (req, res) => {
  const career = await Career.findById(req.params.id);

  if (career) {
    res.json(career);
  } else {
    res.status(404).json({ message: 'Career not found' });
  }
};

export { getCareers, getCareerById, editCareer, getPaginatedCareers };

// ! controllers just encapsulate the logic
