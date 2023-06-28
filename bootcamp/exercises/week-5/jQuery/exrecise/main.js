$(document).ready(function () {
    $(`#btn-creat-human`).on("click", function () {
        let input = $('#my-input').val()
        const newHuman = `<li class="human">${input}</li>`
        $('#list-of-humans').append(newHuman)
    })

    $('#list-of-humans').on("click", ".human", function () {
        $(this).remove()
    })

    const container = `<div class="container"></div>`
    const box = `<div class="box" id="1"></div>`
    const box2 = `<div class="box" id="2"></div>`
    $("body").append(container)
    $('.container').append(box, box2)


    $('#1').hover(function () {
            $('#2').addClass("box-switch")
        },
        function () {
            $('#2').removeClass("box-switch")
        })

    $('#2').hover(function () {
            $('#1').addClass("box-switch")
        },
        function () {
            $('#1').removeClass("box-switch")
        })


    $('#items').on("click", ".item[data-instock='true']", function () {
        const div = `<div class="item">${$(this).text()}</div>`
        $('#cart').append(div)
    })

    const fruits = [
        { name: "Orange", color: "orange" },
        { name: "Banana", color: "yellow" },
        { name: "Coconut", color: "brown" },
        { name: "Kiwi", color: "brown" },
        { name: "Lemon", color: "yellow" },
        { name: "Cucumber", color: "green" },
        { name: "Persimmon", color: "orange" },
        { name: "Pumpkin", color: "orange" }
    ]

    for (let fruit of fruits){

        const div = `<div class="${fruit.color}">${fruit.name}</div>`
        $('#basket').append(div)
    }
})