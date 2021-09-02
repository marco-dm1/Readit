// Handles all client side authentication

let sessionToken;

function redirectURLs(){
    let redirects = [["accounts/login", 1], ["accounts/register", 1]]
    for(let i = 0; i < redirects.length; i++){
        if(document.URL.search(redirects[i][0]) != -1){
            if(sessionToken.search("DO-NOT-SHARE-SECURE") != -1){
                console.log("redirecting");
                let path;
                switch(redirects[i][1]){
                    case 3:
                        path = "../../../";
                        break;
                    case 2:
                        path = "../../";
                        break;
                    default:
                        path = "../";
                        break;
                }
                //window.location.replace(path + "accounts/user/me");
                // document.cookie = "DO-NOT-SHARE-SECURE=test; expires=Thu, 18 Dec 2013 12:00:00 UTC"
            }
        }
    }
}

function logoutClick(){
    // Set the session took cookie to expire and reload the page
    if(sessionToken != null){
        document.cookie = "sessionToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        location.reload();
    }
}

function logoutInit(){
    // Find and set the session token if it exists
    let rawCookie = document.cookie;
    let tokenPosition = rawCookie.search("DO-NOT-SHARE-SECURE=");
    if(tokenPosition != -1){
        sessionToken = rawCookie.substring(20);
        let logoutButton = document.getElementById("logoutButton");
        if(logoutButton){
            logoutButton.style.display = "block"; // Makes the logout button visible
        }
    }
}

function init(){
    console.log("Loaded Readit client-side authentication script");
    redirectURLs(); // Redirect us if we are in a logged out area of the website
}

init();