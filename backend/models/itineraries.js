const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItinerariesSchema = new Schema({
  hashtags: Array,
  title: String,
  city: String,
  userName: String,
  userPhoto: String,
  rating: Number,
  duration: Number,
  price: String,
  activities: {
    address: String,
    photo: String,
    cost: Number,
    comments: String,
    duration: Number
  },
  comments: Object
});

const ItineraryModel = mongoose.model("itineraries", ItinerariesSchema);
module.exports = ItineraryModel;
