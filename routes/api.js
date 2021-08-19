// Handles express routing for all api endpoints

const router = require("express").Router();
const accRouting = require("./endpoints/acc.js");
const subRouting = require("./endpoints/sub.js");
const database = require("../database/functions.js")

/*

/api/getDiscover

*/

router.get("/getdiscover", function(req, res){
    res.set("Content-Type", "application/json");
    let discoverData = database.getDiscoverData();
    res.send(JSON.stringify({success: true, data: JSON.stringify(discoverData)}));2
})

router.use("/acc", accRouting);
router.use("/sub", subRouting);

module.exports = router;