// Handles express routing for account login, creation, and the settings

const router = require("express").Router();

router.get("/login", function(req, res){
    res.sendFile(
        "login.html", // Get the login html page from the accounts folder
        {"root": "./views/accounts/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

router.get("/register", function(req, res){
    res.sendFile(
        "register.html", // Get the register html page from the accounts folder
        {"root": "./views/accounts/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

// Export router for use in the primary routing js file
module.exports = router;