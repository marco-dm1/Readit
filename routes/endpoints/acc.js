// Handles express routing for the account API endpoints

const router = require("express").Router();

/*

/api/acc/getPersonalData
/api/acc/getLogin
/api/acc/postRegister

/api/acc/getProfileData/:userId

*/

router.get("/getLogin", function(req, res){
    res.set("Content-Type", "application/json");
    console.log("get log in called");
    res.send(JSON.stringify({success: true, demo: "hello"}));
})

module.exports = router;