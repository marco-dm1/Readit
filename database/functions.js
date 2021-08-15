const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/siteData", {useNewUrlParser: true, useUnifiedTopology: true})

//Get the default connection
let db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const models = require("./models.js");

let discoverModelInstance = new models.discoverModel(
    {topSubs: {
        one: "test1", 
        two: "test2",
        three: "test3",
        four: "test4",
        five: "test5",
        six: "test6"
    },
    latestPosts: {
        name: "testaccount",
        subReadit: "test",
        postId: 1,
        desc: "test description",
    },
    newestUser: {
        name: "testaccount",
        id: 1,
    }})

discoverModelInstance.save(function (err) {
    if (err) {console.log(err)};
    // saved!
    console.log("saved!");
  });

/*
    topSubs: {type: String, required: true},
    latestPosts: {type: Array, required: true},
    newestUser: {type: String, required: true}
*/