// Handles express routing for the sub API endpoints

const router = require("express").Router();

/*

/api/sub/getSub/:subName
/api/sub/getPost/:subName/:postId
/api/sub/postLike/:subName/:postId/-1 = original post comment
/api/sub/postLike/:subName/:postId/:commentId
/api/sub/postComment/:subName/:postId

*/
module.exports = router;