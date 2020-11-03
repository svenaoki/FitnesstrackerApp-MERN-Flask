const express = require("express");
const router = express.Router();
const Member = require("../Models/Member");
const { route } = require("./exerciseRoutes");

// CREATE (POST)
router.post("/", (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    city: req.body.city,
  });

  newMember
    .save()
    .then(() => res.json("New Member added"))
    .catch((err) => res.json(`Error: ${err}`));
});

// READ (GET)
router.get("/", (req, res) => {
  Member.find()
    .then((members) => res.json(members))
    .catch((err) => res.json(`ERROR: ${errr}`));
});

// UPDATE (PUT)
router.put("/:id", (req, res) => {
  Member.findByIdAndUpdate(
    { _id: req.params.id },
    { name: req.body.name },
    { city: req.body.city }
  )
    .then(() => res.json(`Member updated!`))
    .catch((err) => res.json(`Error: ${err}`));
});

// DELETE
router.delete("/:id", (req, res) => {
  Member.findByIdAndDelete(req.params.id)
    .then(() => res.json("Member deleted"))
    .catch((err) => res.json(`Error: ${err}`));
});

// READ by ID (GET by ID)
router.get("/:id", (req, res) => {
  Member.findById(req.params.id)
    .then((member) => res.json(member))
    .catch((err) => res.json(`Error: ${err}`));
});

module.exports = router;
