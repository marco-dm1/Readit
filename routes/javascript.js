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

router.get("/subreaditpage.js", function(req, res){
    res.sendFile(
        "subReaditPage.js",
        {"root": "./views/js/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

router.get("/postpage.js", function(req, res){
    res.sendFile(
        "postPage.js",
        {"root": "./views/js/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

router.get("/authentication.js", function(req, res){
    res.sendFile(
        "authentication.js",
        {"root": "./views/js/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

router.get("/accounts.js", function(req, res){
    res.sendFile(
        "accounts.js",
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