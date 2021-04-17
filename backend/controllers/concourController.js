// import asyncHandler from 'express-async-handler';
import Concour from '../models/concourModel.js';

// @desc fetch all concours
// @route GET /api/concours
// @access public
const getConcours = async (req, res) => {
  const concours = await Concour.find({});
  res.json(concours);
};

// @desc fetch one concour
// @route GET /api/concour/:id
// @access public
const getConcourById = async (req, res) => {
  const concour = await Concour.findById(req.params.id);

  if (concour) {
    res.json(concour);
  } else {
    res.status(404).json({ message: 'Concour not found' });
  }
};

// @desc create a new concour
// @route POST /api/concour/
// @access private
const createConcour = async (req, res) => {
  const {
    title,
    type,
    estimatedStartDate,
    numberOfAcceptedCandidates,
    eligibility,
    documentsRequired,
  } = req.body;

  const concourExist = await Concour.findOne({ title });
  if (concourExist) {
    // 400 means bad request
    res.status(400);
    throw new Error('Concour already exist');
  }
  // create is syntactic sugar, it basiclly acts like a save
  const concour = await Concour.create({
    title,
    type,
    estimatedStartDate,
    numberOfAcceptedCandidates,
    eligibility,
    documentsRequired,
  });

  if (concour) {
    // 201 means a new resource was created
    res.status(201).json({
      _id: concour._id,
      title: concour.title,
      type: concour.type,
      estimatedStartDate: concour.estimatedStartDate,
      eligibility: concour.eligibility,
      documentsRequired: concour.documentsRequired,
    });
  } else {
    res.status(400);
    throw new Error('Invalid Concour data');
  }
};

export { getConcourById, getConcours, createConcour };

// ! controllers just encapsulate the logic
