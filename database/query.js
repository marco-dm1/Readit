async function checkIfExists(database, usernameInput, returnProjection){
    return database.collection("users").find({name: usernameInput}, {projection: returnProjection}).toArray().then(function(data){
        return data[0];
    }).catch(function(err){
        console.log(`Database Query checkIfExists error: ${err}`);
        return false;
    })
}

async function saveAccount(datebase, usernameInput, hashedPassword, sessionToken, joinDate){
    return datebase.collection("users").insertOne({name: usernameInput, password: hashedPassword, session: sessionToken, joined: joinDate}, function(err, res){
        if(err){
            console.log(`Database query saveAccount error: ${err}`);
            return false;
        }else{
            return true;
        }
    })
}

async function updateSessionToken(datebase, username, newToken){
    return datebase.collection("users").updateOne({name: username}, { $set: {session: newToken} }, function(err) {
        if (err){
            console.log(`Database Query updateSessionToken error: ${err}`);
            return false;
        };
        return true;
    });
}

module.exports.updateSessionToken = updateSessionToken;
module.exports.checkIfExists = checkIfExists;
module.exports.saveAccount = saveAccount;