// import asyncHandler from 'express-async-handler';
import Job from '../models/jobModel.js';

// @desc fetch all careers
// @route GET /api/careers
// @access public
const getJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.json(jobs);
};

// @desc fetch one careers
// @route GET /api/careers/:id
// @access public
const getJobById = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ message: 'Job not found' });
  }
};

export { getJobs, getJobById };

// ! controllers just encapsulate the logic
