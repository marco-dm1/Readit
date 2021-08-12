// Handles express routing for subreadit viewing, post creation, and post viewing

const router = require("express").Router();

router.get("/:subReadit", function(req, res){
    console.log("subreadit loaded: ", req.params);
    res.sendFile(
        "subReadit.html",
        {"root": "./views/subreadits/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

router.get("/:subReadit/post/:postId", function(req, res){
    console.log("subreadit post loaded", req.params);
    res.sendFile(
        "viewPost.html",
        {"root": "./views/subreadits/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

router.get("/:subReadit/createpost", function(req, res){
    console.log("subreadit create post loaded", req.params);
    res.sendFile(
        "createPost.html",
        {"root": "./views/subreadits/"},
        function(err){
            if(err){
                console.log("Error occured: ", err);
                res.send("Error occurred when trying to retrieve view from server")
            }
        });
})

// Export router for use in the primary routing js file
module.exports = router;