class Comment {
    constructor(id = "", content = "", postId = "", userID = "") {
        this.id = id;
        this.content = content;
        this.postId = postId;
        this.userID = userID;
    }
}

module.exports = Comment;
