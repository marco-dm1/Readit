const router = require("express").Router();

router.get("/me", function(req, res){
    res.sendFile(
        "profile.html",
        {"root": "./views/accounts/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

router.get("/:userId", function(req, res){
    console.log("profile with userid loaded: ", req.params);
    res.sendFile(
        "profile.html",
        {"root": "./views/accounts/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

module.exports = router;