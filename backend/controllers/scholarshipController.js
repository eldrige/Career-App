import Scholarship from '../models/scholarshipModel.js';

// @desc fetch all jobs
// @route GET /api/careers
// @access public
const getScholarships = async (req, res) => {
  const scholarships = await Scholarship.find({});
  res.json(scholarships);
};

export { getScholarships };

// ! controllers just encapsulate the logic
