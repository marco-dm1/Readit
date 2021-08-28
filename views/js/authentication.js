// Handles all client side authentication

let sessionToken = document.cookie

function redirectURLs(){
    let redirects = ["accounts/login", "accounts/register"]
    for(let i = 0; i < redirects.length; i++){
        if(document.URL.search(redirects[i]) != -1){
            if(sessionToken.search("DO-NOT-SHARE-SECURE") != -1){
                console.log("redirecting");
                window.location.replace("../");
                // document.cookie = "DO-NOT-SHARE-SECURE=test; expires=Thu, 18 Dec 2013 12:00:00 UTC"
            }
        }
    }
}

function init(){
    console.log("Loaded Readit client-side authentication script");
    redirectURLs(); // Redirect us if we are in a logged out area of the website
}

init();