const express = require("express");
const router = express.Router();
const ItineraryModel = require("../models/itineraries");
const CitiesModel = require("../models/cities");

//test route
router.get("/api", function(req, res) {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

//////////////////////////////////////////////////////// CITIES
// get all cities
router.get("/api/cities", async (req, res) => {
  const cities = await CitiesModel.find({});
  try {
    res.send(cities);
  } catch (err) {
    res.status(500).send(err);
  }
});

// update city
router.put("/api/cities/:id", function(req, res, next) {
  CitiesModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then(
    function() {
      CitiesModel.findOne({ _id: req.params.id }).then(function(city) {
        res.send(city);
      });
    }
  );
});

//////////////////////////////////////////////////////// ITINERARIES
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
router.get("/api/itineraries/byCity/:city", async (req, res) => {
  const itineraries = await ItineraryModel.find({ city: req.params.city });
  try {
    res.send(itineraries);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get specific itinerary
router.get("/api/itineraries/byID/:id", async (req, res) => {
  const itinerary = await ItineraryModel.find({ _id: req.params.id });
  try {
    res.send(itinerary);
  } catch (err) {
    res.status(500).send(err);
  }
});

//add new comment to itinerary
router.post("/api/itineraries/addComment/:itineraryID", async (req, res) => {
  ItineraryModel.findOneAndUpdate(
    req.params.itineraryID,
    { $push: { comments: req.body } },
    {
      new: true
    }
  ).then(function(itinerary) {
    res.send(itinerary);
  });
});

module.exports = router;
