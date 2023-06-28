const data = Posts()
const view = View()

const render = function () {
    $('#posts').empty()
    for (let post of data.getPost()) {
        view.buildSchema(post.name, post.post, "#posts")
    }
}

render()

$("#post-btn").on("click", function () {
    const name = $('#name-input').val()
    const post = $('#birth-wish').val()
    data.addPost(name, post)
    render()
})






