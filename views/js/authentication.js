// Handles all client side authentication

let sessionToken;

function redirectURLs(){
    let redirects = [["accounts/login", 1], ["accounts/register", 1]]
    for(let i = 0; i < redirects.length; i++){
        if(document.URL.search(redirects[i][0]) != -1){
            if(document.cookie.search("DO-NOT-SHARE-SECURE") != -1){
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
    // Set the session token cookie to expire and reload the page
    if(sessionToken != null){
        document.cookie = "DO-NOT-SHARE-SECURE=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        location.reload();
    }
}

function loginVisuals(){
    // Make any logged in only content visible
    function makeVisible(button){
        button.style.display = "block";
    }
    let logoutButton = document.getElementById("logoutButton");
    let viewProfileButton = document.getElementById("viewProfileButton");
    if(logoutButton){
        makeVisible(logoutButton);
    }
    if(viewProfileButton){
        makeVisible(viewProfileButton);
    }
}

function tokenInit(){
    // Find and set the session token if it exists
    let rawCookie = document.cookie;
    let tokenPosition = rawCookie.search("DO-NOT-SHARE-SECURE=");
    if(tokenPosition != -1){
        sessionToken = rawCookie.substring(20);
        loginVisuals();
    }
}

function init(){
    console.log("Loaded Readit client-side authentication script");
    redirectURLs(); // Redirect us if we are in a logged out area of the website
    tokenInit();
}

init();