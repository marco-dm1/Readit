// Script that handles bCrypt password hashes and session token creation

const bcrypt = require("bcrypt");
let characters = "qwertyuioplkjhgfdsazxcvbnmMNBVCXZASDFGHJKLPOIUYTREWQ1234567890";

async function createSessionToken(username){
    let sessionToken = username + "-";
    for(let i = 0; i < 50; i++){
        sessionToken = sessionToken + characters[Math.round(Math.random() * characters.length)];
    }
    return sessionToken;
}

async function hashPassword(password){
    return await bcrypt.hash(password, 5)
}

async function comparePasswords(plaintextPassword, hashedPassword){
    return bcrypt.compare(plaintextPassword, hashedPassword, function(err, result) {
        if(err){
            return false;
        }else{
            return result;
        }
    });
}

module.exports.createSessionToken = createSessionToken;
module.exports.hashPassword = hashPassword;
module.exports.comparePasswords = comparePasswords;