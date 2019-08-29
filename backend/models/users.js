const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String }
});

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;
