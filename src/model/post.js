class Post {
    constructor(id = "", title = "", content = "", categoryId = "", userId = "") {
        this.id = id;
        this.title = title;
        this.content = content;
        this.categoryId = categoryId;
        this.userId = userId;
    }
}

module.exports = Post;
