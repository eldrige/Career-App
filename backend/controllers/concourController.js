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

// @desc Update a concour
// @route PUT /api/concours/:id
// @access private/Admin
const updateConcour = asyncHandler(async (req, res) => {
  const {
    name,
    abbrev,
    documentsRequired,
    description,
    eligibility,
    numberOfAcceptedCandidates,
    estimatedStartDate,
  } = req.body;

  const concour = await Concour.findById(req.params.id);
  if (concour) {
    concour.name = name;
    concour.abbrev = abbrev;
    concour.documentsRequired = documentsRequired;
    concour.description = description;
    concour.eligibility = eligibility;
    concour.numberOfAcceptedCandidates = numberOfAcceptedCandidates;
    concour.estimatedStartDate = estimatedStartDate;

    const updatedConcour = await concour.save();
    res.json(updatedConcour);
  } else {
    res.status(404);
    throw new Error('Concour not found');
  }
});

export { getConcourById, getConcours, createConcour, updateConcour };

// ! controllers just encapsulate the logic
