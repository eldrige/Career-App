import asyncHandler from 'express-async-handler';
import Concour from '../models/concourModel.js';

// @desc fetch all concours
// @route GET /api/concours
// @access public
const getConcours = asyncHandler(async (req, res) => {
  const concours = await Concour.find({});
  res.json(concours);
});

// @desc fetch one concour
// @route GET /api/concour/:id
// @access public
const getConcourById = asyncHandler(async (req, res) => {
  const concour = await Concour.findById(req.params.id);
  if (concour) {
    res.json(concour);
  } else {
    res.status(404).json({ message: 'Concour not found' });
  }
});

// @desc create a new concour
// @route POST /api/concour/
// @access private/Admin
const createConcour = asyncHandler(async (req, res) => {
  const concour = new Concour({
    name: 'Faculte de Genies industrielle Douala',
    abbrev: 'FGI Douala',
    type: 'Public',
    estimatedStartDate: Date.now(),
    numberOfAcceptedCandidatesd: 100,
    eligibility: 'Sample category',
    description:
      'FGI Douala is an engineering concour, designed for students who want to become industrial engineers',
    eligibility: [
      'Has completed high school studies in a scientific field',
      'Anyone found in the CEMAC region',
      'Below the age of 30',
    ],
    documentsRequired: [
      'GCE A/L',
      'High school transcript',
      'Birth Certificate',
      '4 x 4 passport photos',
    ],
  });

  const createdConcour = await concour.save();
  res.status(201).json(createdConcour);
});

export { getConcourById, getConcours, createConcour };

// ! controllers just encapsulate the logic
