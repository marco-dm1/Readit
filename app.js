const express = require("express");
let app = express();

app.get("/", function(request, response){
    response.send("test demo");
})

app.listen(3000);
console.log("Express server listening on localhost:3000");