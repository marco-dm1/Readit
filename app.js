const express = require("express");
const fs = require("fs");
let app = express();

app.get("/", function(request, response){
    response.sendFile(
        "views/index.html",
        {"root": "./"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                response.send("Error occurred when trying to retrieve view from server")
            }
        });
    console.log("index sent");
})

app.listen(3000);
console.log("Express server listening on localhost:3000");