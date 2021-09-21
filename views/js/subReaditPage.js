// Client script that handles sub readit page functionality

let subreadit;

function filterUpdate(filter){
    console.log(filter);
}

function visualizePosts(postsData){
    let postContainer = document.getElementsById("postContainer");
    let contentCardTemplate = document.getElementsById("contentCardTemplate");

    function createDiv(user, id, title, body){
        let templateClone = contentCardTemplate.cloneNode(true);
        templateClone.id = "contentCard"
        templateClone.querySelector(".card-header").querySelector("#contentCardTitle").innerText = title;
        if(body.length > 50){
            body = body.substring(0, 50) + "..";
        }
        templateClone.querySelector(".card-body").querySelector("#contentCardBody").innerText = body;
        templateClone.style.display = "block";
        postContainer.appendChild(templateClone);
    }
}

async function getSubReaditPosts(){
    // Fetches the subReadit's data from the server and calls another function to visualize it
    let postsRequest = await fetch(`../api/sub/getSub/${subreadit}`);
    visualizePosts(postsRequest.json());
}

async function findSubReadit(){
    // Parses URL pathname for subReadit name
    let path = document.location.pathname;
    let directoryIndex = path.indexOf("/r/") + 3;
    let slashIndex = path.substring(directoryIndex).indexOf('/');
    if(slashIndex == -1){
        subreadit = path.substring(directoryIndex);
    }else{
        subreadit = path.substring(directoryIndex, slashIndex + 3);
    }
}

function init(){
    await findSubReadit(); // Figure out where the client is on the site before calling dependant functions
    getSubReaditPosts();
}

init();