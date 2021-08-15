// Handles express routing for all api endpoints

const router = require("express").Router();
const accRouting = require("./endpoints/acc.js");
const subRouting = require("./endpoints/sub.js");

/*

/api/getDiscover

*/

router.get("/getdiscover", function(req, res){
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({success: false, data: {}}));

    /*
    Discover Schema

    - popularSubs - type: Array
    - latestPosts - type: Array
    - newestUser - type: String
    - 

    */
})

router.use("/acc", accRouting);
router.use("/sub", subRouting);

module.exports = router;