const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const BodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ALON:yeet@mytinerary-tueyu.azure.mongodb.net/public?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);

app.use(BodyParser.json());
app.use(require("./routes/api"));
app.listen(port, () =>
  console.log(`Running a Express app / API server at localhost:${port}`)
);
