import express from "express";
const careerRouter = express.Router();
import careers from "../data/careers.js";

// @desc fetch all careers
// @route GET /api/careers
// @access public
careerRouter.get("/", (req, res) => {
  res.json(careers);
});

// @desc fetch one careers
// @route GET /api/careers/:id
// @access public
careerRouter.get("/:id", (req, res) => {
  let param = req.params.id;
  const career = careers.find((c) => c._id === param);
  if (career) {
    res.json(career);
  } else {
    res.status(404).json({ message: "Career not found" });
  }
});

export default careerRouter;
