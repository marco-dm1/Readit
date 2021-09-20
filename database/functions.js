
const mongoDB = require("mongodb").MongoClient
const security = require("./security.js");
const discover = require("./discover.js");
const query = require("./query.js");
let liveDatabase;

mongoDB.connect("mongodb://localhost:27017/websiteData", { useUnifiedTopology: true }, function(err, db){
    if(err){console.log("An error occured when connecting to the MongoDB database."); throw err;}
    liveDatabase = db.db("siteDatabase");
    console.log("Connected to the MongoDB database server.");
});

function getTime(){
    let currentTime = new Date();
    return String(currentTime.getMonth() + 1) + "/" + String(currentTime.getDate()) + "/" + String(currentTime.getFullYear()) + " - " + String(currentTime.getHours()) + ":" + String(currentTime.getMinutes()) + ":" + String(currentTime.getSeconds())
}

async function checkLogin(username, password){
    let checkExistingAccounts = await query.checkIfExists(liveDatabase, username, { session: 0, joinDate: 0 });
    if(typeof(checkExistingAccounts) == "object" && checkExistingAccounts[0] != null){
        let comparePasswords = await security.comparePasswords(password, checkExistingAccounts[0]["password"]);
        if(comparePasswords == true){
            let newSessionToken = await security.createSessionToken(username);
            await query.updateSessionToken(liveDatabase, username, newSessionToken);
            return {success: true, token: newSessionToken, id: checkExistingAccounts[0]["_id"]};
        }else{
            return {success: false, message: "Your password is incorrect."}
        }
    }else{
        return {success: false, message: "Unable to find the account with that username."}
    }
}

async function registerAccount(username, password){
    let checkExistingAccounts = await query.checkIfExists(liveDatabase, username, { _id: 0, session: 0, joinDate: 0, password: 0 });
    if(checkExistingAccounts == undefined){
        let hashedPassword = await security.hashPassword(password);
        if(hashedPassword === false){
            return false;
        }else{
            let newSessionToken = await security.createSessionToken(username);
            let newJoinDate = getTime();
            await query.saveAccount(liveDatabase, username, hashedPassword, newSessionToken, newJoinDate);
            return {success: true, token: newSessionToken}
        }
    }else{
        return {success: false, message: "An account with that username already exists."}
    }
}

function getDiscoverData(){
    return discover.getDiscover();
}

module.exports.checkLogin = checkLogin;
module.exports.registerAccount = registerAccount;
module.exports.getDiscoverData = getDiscoverData;