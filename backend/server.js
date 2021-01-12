import express from "express";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 4000;
import careerRouter from "./routes/careerRoutes.js";

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/careers/", careerRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
