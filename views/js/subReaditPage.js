// Client script that handles sub readit page functionality

let subreadit;

function filterUpdate(filter){
    console.log(filter);
}

async function getSubReaditPosts(){
    let getPostRequest = await fetch(`../api/sub/getSub/${subreadit}`);
}

async function findSubReadit(){
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