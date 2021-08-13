// Handles express routing for all api endpoints

const router = require("express").Router();
const accRouting = require("./endpoints/acc.js");
const subRouting = require("./endpoints/sub.js");

router.get("/getdiscover", function(req, res){
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

router.use("/acc", accRouting);
router.use("/sub", subRouting);

module.exports = router;