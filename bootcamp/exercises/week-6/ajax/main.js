// $.get("https://www.googleapis.com/books/v1/volumes?q=isbn:0439023521", function(result){
//     console.log(result)
// })
//
// $.get("https://www.googleapis.com/books/v1/volumes?q=title:name%20of%20the%20wind", function(result){
//     console.log(result.items[0].volumeInfo.description) //prints A lot of description Text
// })
//
//
// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//     //extract the geo data of the first user
//
//     let lat = users[0].address.geo.lat
//     let long = users[0].address.geo.lng
//
//     let catchPhrase = users[0].company.catchPhrase
//
//     //log the data
//     console.log(`${lat}, ${long}, ${catchPhrase}`) //prints -37.3159, 81.1496
// })

let isbn = '0439023521'
let isbn1 = '9782806269171'

/*$('#button').on("click", function (isbnS) {

    $.ajax({
        method: "GET",
        url: ,
        success: function (data) {
            console.log(data);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
})*/

const fetcher = function (isbnS) {
    fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + `${isbnS}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

//fetcher(isnd1)


const fetcherV2 = function (queryType, queryValue) {
    let type;
    let val;
    if (queryType === "isbn") {
        type = queryType
        val = queryValue
    }
    if (queryType === "title") {
        type = queryType
        let valEdid = queryValue.toLowerCase()
        val = valEdid.replace(/\s/g, '%20')
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${type}:${val}`
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

// fetcherV2("isbn", 9789814561778)
// fetcherV2("title", "How to Win Friends and Influence People")

const fetcherV3 = function (queryType, queryValue) {
    let type;
    let val;
    if (queryType === "isbn") {
        type = queryType
        val = queryValue
    }
    if (queryType === "title") {
        type = queryType
        let valEdid = queryValue.toLowerCase()
        val = valEdid.replace(/\s/g, '%20')
    }

    let url = `https://www.googleapis.com/books/v1/volumes?q=${type}:${val}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(elm => {
                const title = elm.volumeInfo.title
                const author = elm.volumeInfo.authors[0]
                const isbn = elm.volumeInfo.industryIdentifiers[0].identifier
                console.log(title, author, isbn)
            })
        })
        .catch(err => console.log(err))
}


const fetcherV4 = function () {
    let api_key = "wwx51cK2ycS28bU4FMjpRqBqT2709t9B"
    let url = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${api_key}&limit=5`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let img = data.data[0].embed_url
            const iframe = $('<iframe>')
            iframe.attr('id', 'img')
            iframe.attr('src', img)
            $('body').append(iframe)
        })
        .catch(err => console.log(err));
}


const fetcherV5 = function () {
    let api_key = "wwx51cK2ycS28bU4FMjpRqBqT2709t9B";
    let searchQuery = $('#input').val().trim()

    if (searchQuery !== "") {
        let url = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${api_key}&limit=5`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                let gifUrl = data.data[0].embed_url;
                let source = $('#gif-template').html()
                let template = Handlebars.compile(source);
                let context = {gifUrl: gifUrl};
                let renderedHtml = template(context);

                $('#iFrameContainer').html(renderedHtml);
            })
            .catch(err => console.log(err));
    }
}

$('#button').on("click", function () {
    fetcherV5()
})