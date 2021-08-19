// Client script that populates the discover page with data.

// localhost:3000/js/discoverpage.js

async function getData(){
    let discoverData = await fetch("../api/getdiscover");
    return discoverData.json();
}


getData().then(function(data){
        console.log("fetch properly got data: ", JSON.stringify(data));
    }.catch(function(err){
        console.log("Fetch didnt get data: ", err);
    }))