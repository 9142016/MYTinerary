const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
  name: String,
  country: String,
  preview_img: String
});

const CitiesModel = mongoose.model("cities", CitiesSchema);
module.exports = CitiesModel;
