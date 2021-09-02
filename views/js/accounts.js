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

function showNotification(classInput, messageInput){
    let notificationBox = document.getElementById("notificationBox");
    notificationBox.classList.remove("alert-danger");
    notificationBox.classList.remove("alert-success");
    notificationBox.classList.add(classInput);
    notificationBox.innerHTML = messageInput;
    notificationBox.style.display = "block";
}

async function login(handleInput, passwordInput){
    console.log(`Attempting to log in with handle: ${handleInput} & password: ${passwordInput}`);
    // Send a request to the server and await for the Promise's result
    if(handleInput != "" && passwordInput != ""){
        let result = await handleRequest("../api/acc/getLogin", {username:  String(handleInput), password: String(passwordInput)});
        if(result["success"] == true){
            let tokenExpiration = new Date().toUTCString();
            /*
            let date = new Date();
            console.log(date.toUTCString());
            date.setMinutes(date.getMinutes()+15);
            console.log(date.toUTCString());
            */
            let date = new Date();
            date.setDate(date.getDate() + 1);
            //document.cookie = `DO-NOT-SHARE-SECURE=${result["token"]}; expires=${date.toUTCString()}`
            document.cookie = `DO-NOT-SHARE-SECURE=${result["token"]};`;
            showNotification("alert-success", "Successfully logged in, redirecting...")
            setTimeout(function(){
                location.href = "../discover";
            }, 2000)
        }else{
            if(result["message"] != null){
                showNotification("alert-danger", result["message"]);
            }else{
                showNotification("alert-danger", "An error occurred.");
            }
        }
    }else{
        showNotification("alert-danger", "Your inputs can not be empty");
    }
}

function register(handleInput, passwordInput, confirmPasswordInput){
    if(passwordInput === confirmPasswordInput){
        console.log(`Attempting to register with the handle: ${handleInput} & password: ${passwordInput}`);
    }else{
        showNotification("alert-warning", "Your passwords do not match.");
    }
}