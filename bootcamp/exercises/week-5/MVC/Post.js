const Posts = function () {

    const _posts = [
        {name: "Jay", post: "HBD"},
        {name: "Fill", post: "HBD"}
    ]

    const addPost = function (name, post) {_posts.push({name: name, post: post})}

    const getPost = function () {return [..._posts]}

    return {
        getPost,
        addPost
    }
}