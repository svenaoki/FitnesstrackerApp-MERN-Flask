const express = require("express");
const router = express.Router();
const Exercise = require("../Models/Exercises");

// GET
router.get("/", (req, res) => {
  Exercise.find()
    .then((exercise) => res.json(exercise))
    .catch((err) => res.json(err));
});

// POST
router.post("/add", (req, res) => {
  const newExercise = new Exercise({
    duration: Number(req.body.duration),
    heartRate: Number(req.body.heartRate),
    bodyTemp: Number(req.body.bodyTemp),
    calories: Number(req.body.calories),
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added"))
    .catch((err) => res.json(err));
});

//Get by ID
router.get("/:exerciseID", (req, res) => {
  Exercise.findById(req.params.exerciseID)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.json(err));
});

//Update
router.put("/:id", (req, res) => {
  Exercise.findByIdAndUpdate(
    req.params.id,
    { $set: req.body }
    /* { duration: Number(req.body.duration) },
    { heartRate: Number(req.body.heartRate) },
    { bodyTemp: Number(req.body.bodyTemp) },
    { calories: Number(req.body.calories) } */
  )
    .then(() => res.json("Exercise updated"))
    .catch((err) => res.json("error:" + err));
});

//Delete
router.delete("/:exerciseID", (req, res) => {
  Exercise.findByIdAndDelete(req.params.exerciseID)
    .then(() => res.json("Exercise deleted"))
    .catch((err) => res.json("Error" + err));
});

module.exports = router;
