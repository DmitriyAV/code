
const getApi = function (word) {
    return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
}
const getWord = function () {
    $.get("https://random-word-api.herokuapp.com/word")
        .then((result) => {
            getApi(result)
                .then(res => {
                    console.log(res)
                })
        })
}

const fetcherV6 = function (searchQuery) {
    let api_key = "wwx51cK2ycS28bU4FMjpRqBqT2709t9B";
    if (searchQuery !== "") {
        let url = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${api_key}&limit=5`;
        $.get(url)
            .then((response) => {
                let gifUrl = response.data[0].embed_url;
                let source = $('#gif-template').html()
                let template = Handlebars.compile(source);
                let context = {gifUrl: gifUrl};
                let renderedHtml = template(context);

                $('#iFrameContainer').html(renderedHtml);
            })
            .catch(err => console.log(err));
    }
}

const getRandomWord = function () {
    $.get("https://random-word-api.herokuapp.com/word")
        .then((result) => {
            fetcherV6(result[0])

        })
}
$('#button').on("click", function () {
    getRandomWord()
})