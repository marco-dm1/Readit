const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/siteData", {useNewUrlParser: true, useUnifiedTopology: true})

const schemas = require("./schemas.js");

console.log(schemas.discoverModel);