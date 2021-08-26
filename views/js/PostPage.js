let subReadit;
let postId;

function createCommentElement(name, date, likes, description){
    // likes = [upvote, downvote]
}

/*

/api/sub/postLike/:subName/:postId/-1 = original post
/api/sub/postLike/:subName/:postId/:commentId
/api/sub/postComment/:subName/:postId

*/
function postComment(comment){

}

function parsePostURL(URL){
    URL = URL.substring(URL.search("/r/") + 3); // Remove unneeded start of website URL
	let breaks = [];
	for(let i = 0; i < URL.length; i++){
		if(URL[i] == '/'){
			breaks.push(i);
		}
	}
    return [URL.substring(0, breaks[0]), URL.substring(breaks[1] + 1)];
}

function init(){
    let parsedURL = parsePostURL(document.URL);
    subReadit = parsedURL[0];
    postId = parsedURL[1];
}

init();
/*
Comment Template

<div id="contentCard" class="postCard card rounded-3 shadow-sm">
    <div class="card-body">
        <div class="comment-title">
            <i>testaccount - 0 Likes</i>
            <button class="far fa-arrow-alt-circle-up like-button"></button>
            <button class="far fa-arrow-alt-circle-down like-button"></button>
        </div>
        test body
    </div>
</div>

*/