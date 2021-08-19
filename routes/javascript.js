// Handles express routing for javascript files the client runs

const router = require("express").Router();

router.get("/discoverpage.js", function(req, res){
    res.sendFile(
        "discoverPage.js",
        {"root": "./views/js/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

// Export router for use in the primary routing js file
module.exports = router;