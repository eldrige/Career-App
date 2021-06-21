// import asyncHandler from 'express-async-handler';
import Job from '../models/jobModel.js';

// @desc fetch all jobs
// @route GET /api/careers
// @access public
const getJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.json(jobs);
};

// @desc fetch paginated jobs
// @route GET /api/jobs
// @access public
const getPaginatedJobs = async (req, res) => {
  const pageSize = +req.query.pageSize || 5;
  const currentPage = +req.query.page || 1;
  const count = await Job.countDocuments();

  const jobs = await Job.find({})
    .limit(pageSize)
    .skip(pageSize * (currentPage - 1));

  res.json({
    jobs,
    currentPage,
    maxCount: count,
    pages: Math.ceil(count / pageSize),
  });
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

export { getJobs, getJobById, getPaginatedJobs };

// ! controllers just encapsulate the logic
