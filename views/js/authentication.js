// Handles all client side authentication

let sessionToken = document.cookie

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
                window.location.replace(path);
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