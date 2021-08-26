// Handles all client side authentication

let sessionToken = document.cookie

function redirectURLs(){
    let redirects = ["accounts/login", "accounts/register"]
    for(let i = 0; i < redirects.length; i++){
        if(document.URL.search(redirects[i]) != -1){
            // Check if logged in and redirect
            if(sessionToken.search("DO-NOT-SHARE-")){
                window.location.replace("../");
            }
        }
    }
}

function init(){
    redirectURLs();
}

init();