// Handles express routing for the sub API endpoints

const router = require("express").Router();

/*

/api/sub/getSub/:subName
/api/sub/getPost/:subName/:postId
/api/sub/postLike/:subName/:postId/-1 = original post comment
/api/sub/postLike/:subName/:postId/:commentId
/api/sub/postComment/:subName/:postId

*/

router.get("/getSub/:subName", async function(req, res){
    res.set("Content-Type", "application/json");
    /*
    let login = await db.checkLogin(req.headers["username"], req.headers["password"])
    if(login != false){
        res.send(JSON.stringify(login));
    }else{
        res.send(JSON.stringify({success: false}));
    }
    */
   let data = [
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
       {userName: "userName", postId: "123", postTitle: "test", postBody: "this is the body"},
   ]
   res.send(JSON.stringify(data))
})


module.exports = router;