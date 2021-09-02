// Handles express routing for the account API endpoints

const router = require("express").Router();
const db = require("../../database/functions.js");

/*
/api/acc/getPersonalData
/api/acc/getLogin
/api/acc/postRegister
/api/acc/getProfileData/:userId
*/

router.get("/getLogin", async function(req, res){
    res.set("Content-Type", "application/json");
    console.log(`get log in called, user: ${req.headers["username"]} pass: ${req.headers["password"]}`);
    let login = await db.checkLogin(req.headers["username"], req.headers["password"])
    if(login != false){
        res.send(JSON.stringify(login));
    }else{
        res.send(JSON.stringify({success: false}));
    }
})

router.get("/postRegister", async function(req, res){
    res.set("Content-Type", "application/json");
    console.log("post register called");
    let register = await db.registerAccount(req.headers["username"], req.headers["password"])
    if(register != false){
        res.send(JSON.stringify(register));
    }else{
        res.send(JSON.stringify({success: false}));
    }
})

module.exports = router;