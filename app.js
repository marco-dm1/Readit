const express = require("express");
let app = express();
const accountsRouting = require("./routes/accounts.js");
const subReaditRouting = require("./routes/subreadits");

const fs = require("fs");
app.get("/", function(request, response){
    response.sendFile(
        "views/index.html", // Get the index html page from the views folder
        {"root": "./"}, // Search for the file inside of the view folder from the current location
        function(err){
            if(err){
                console.log("Error occured: ", err);
                response.send("Error occurred when trying to retrieve view from server")
            }
        });
    console.log("index sent");
})

app.get("/createsub", function(request, response){
    response.sendFile(
        "views/createSub.html", // Get the sub creation html page from the views folder
        {"root": "./"}, // Search for the file inside of the view folder from the current location
        function(err){
            if(err){
                console.log("Error occured: ", err);
                response.send("Error occurred when trying to retrieve view from server")
            }
        });
})

app.use("/accounts", accountsRouting);
app.use("/r", subReaditRouting)

app.listen(3000);
console.log("Express server listening on localhost:3000");