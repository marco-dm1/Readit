// Handles register and login view functionality

function handleRequest(url, params){
    return fetch(
        url, 
        {headers: params}
    ).then(function(response){
        // Convert the response to a dictionary and return it
        return response.json().then(function(json){
            return json;
        }).catch(function(){
            return `{"success":false,"message":"An error occurred"}`;
        })
    }).catch(function(error){
        console.log(`Error occurred: ${error}`);
        return `{"success":false,"message":"An error occurred"}`;
    })
}

async function login(handleInput, passwordInput){
    console.log(`Attempting to log in with handle: ${handleInput} & password: ${passwordInput}`);
    // Send a request to the server and await for the Promise's result
    let result = await handleRequest("../api/acc/getLogin", {username: "test1", password: "test2"});
    console.log(result);
}

function register(handleInput, passwordInput, confirmPasswordInput){
    if(passwordInput === confirmPasswordInput){
        console.log(`Attempting to register with the handle: ${handleInput} & password: ${passwordInput}`);
    }
}