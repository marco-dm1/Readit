// Handles the data for the discover page.
// The discover page data is created and stored locally everytime the server starts as opposed to being stored
// in a single document collection MongoDB database because of how often it is changed

/*
{topSubs: {
    one: subName, 
    two: subName,
    three: subName,
    four: subName,
    five: subName,
    six: subName
},
latestPost: {
    name: accountName,
    subReadit: subName,
    postId: postNumber,
    desc: description,
},
newestUser: {
    name: accountName,
    id: accountNumber,
}}


*/
const dbFunctions = require("./functions.js");

let discoverData = {}

function getDiscover(){
    return discoverData;
}


function init(){
    discoverData = {topSubs: {
        one: "test1", 
        two: "test2",
        three: "test3",
        four: "test4",
        five: "test5",
        six: "test6"
    },
    latestPost: {
        name: "testaccount",
        subReadit: "test",
        postId: 1,
        desc: "test description",
    },
    newestUser: {
        name: "testaccount",
        id: 1,
    }}
}

init();

module.exports.getDiscover = getDiscover