const mongoose = require("mongoose");

const discoverModel = new mongoose.Schema({
    topSubs: {type: Array, required: true},
    latestPosts: {type: Array, required: true},
    newestUser: {type: String, required: true}
})

module.exports.discoverModel = mongoose.model("discoverModel", discoverModel);