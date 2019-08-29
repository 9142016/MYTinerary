const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitiesSchema = new Schema({
  name: { type: String },
  preview_img: { type: String }
});

const CitiesModel = mongoose.model("cities", CitiesSchema);
module.exports = CitiesModel;
