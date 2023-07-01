const View = function () {

    const buildSchema = function (name, post, parentElem) {
        const schema = `<div class="post">
            <div class="name">${name}</div>
            <div class="postText">${post}</div>`

        $(parentElem).append(schema)
    }

    return {
        buildSchema
    }
}