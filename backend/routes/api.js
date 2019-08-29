const express = require("express");
const router = express.Router();
const ItineraryModel = require("../models/itineraries");
const UsersModel = require("../models/users");
const CitiesModel = require("../models/cities");

//test route
router.get("/api", function(req, res) {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// get all cities
router.get("/api/cities", async (req, res) => {
  const cities = await CitiesModel.find({});
  try {
    res.send(cities);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get all itineraries
router.get("/api/itineraries", async (req, res) => {
  const itineraries = await ItineraryModel.find({});
  try {
    res.send(itineraries);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get itineraries under specific city
router.get("/api/itineraries/:city", async (req, res) => {
  const itineraries = await ItineraryModel.find({ city: req.params.city });
  try {
    res.send(itineraries);
  } catch (err) {
    res.status(500).send(err);
  }
});

//post
router.post("/api/users", function(req, res) {
  UsersModel.create(req.body).then(function(inputted) {
    res.send(inputted);
  });
});

router.post("/api/itineraries", function(req, res) {
  ItineraryModel.create(req.body).then(function(inputted) {
    res.send(inputted);
  });
});

module.exports = router;
