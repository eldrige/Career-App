import express from 'express';
import Career from '../models/careerModel.js';
import asyncHandler from 'express-async-handler';
const careerRouter = express.Router();
// import careers from '../data/careers.js';

// @desc fetch all careers
// @route GET /api/careers
// @access public
careerRouter.get(
  '/',
  asyncHandler(async (req, res) => {
    const careers = await Career.find({});
    res.json(careers);
  })
);
// @desc fetch one careers
// @route GET /api/careers/:id
// @access public

careerRouter.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const career = await Career.findById(req.params.id);

    if (career) {
      res.json(career);
    } else {
      res.status(404).json({ message: 'Career not found' });
    }
  })
);

export default careerRouter;
