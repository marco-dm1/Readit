// Client script that populates the discover page with data.

// localhost:3000/js/discoverpage.js

function populatePopularSubs(one, two, three, four, five, six){
    function formulateSubLink(sub){
        return `./r/${sub}`
    }
    
    document.getElementById("popularSubOne").innerHTML = `<a href="${formulateSubLink(one)}">${one}</a>`;
    document.getElementById("popularSubTwo").innerHTML = `<a href="${formulateSubLink(two)}">${two}</a>`;
    document.getElementById("popularSubThree").innerHTML = `<a href="${formulateSubLink(three)}">${three}</a>`;
    document.getElementById("popularSubFour").innerHTML = `<a href="${formulateSubLink(four)}">${four}</a>`;
    document.getElementById("popularSubFive").innerHTML = `<a href="${formulateSubLink(five)}">${five}</a>`;
    document.getElementById("popularSubSix").innerHTML = `<a href="${formulateSubLink(six)}">${six}</a>`;
}

function populateLatestPost(userName, titleText, bodyText, subName, postId){
    document.getElementById("contentCard").style = "display: block;";
    document.getElementById("contentCardTitle").innerHTML = `\"${titleText}\" <i>by ${userName}</i> in /r/${subName}`;
    document.getElementById("contentCardBody").innerHTML = bodyText + ` <a href=\"./r/${subName}/${postId}\">Read More ></a>`;
}

function populateNewestUser(userId, userName){
    document.getElementById("newestUserHeader").innerHTML = `Newest User: <i><a href="./accounts/user/${userId}">${userName}</a></i>`;
}

async function getData(){
    let discoverData = await fetch("../api/getdiscover");
    return discoverData.json();
}

getData().then(function(data){
        if(data.success == true){
            data = JSON.parse(data.data);
            console.log(data);
            populatePopularSubs(
                data.topSubs.one,
                data.topSubs.two,
                data.topSubs.three,
                data.topSubs.four,
                data.topSubs.five,
                data.topSubs.six);
            populateLatestPost(data.latestPost.name,
                data.latestPost.title,
                data.latestPost.desc,
                data.latestPost.subReadit,
                data.latestPost.postId);
            populateNewestUser(data.newestUser.id, data.newestUser.name);
        }else{
            throw "Success not true";
        }
    }).catch(function(err){
        console.log(err);
    })