$(document).ready(() => {
        $('h1').addClass('h-toBlue')
        $('li:first-child').addClass('ui-to-green')
        $('li:last-child').addClass('li-to-pink')
        $('#my-input').val('Terabyte')


        const dat = $('#dataBar').data()
        console.log(dat.barcode, dat.expirationdate)

        $('#h-box').hover(function () {
            $(this).toggleClass('h-box-change')
        })

        const input = $('#btn').click(function () {
            alert('Button is clicked!')
        })

        $('.box').hover(function () {
                $(this).removeClass('box')
                $(this).addClass('box-change')
            },
            function () {
                $(this).removeClass('box-change')
                $(this).addClass('box')
            })

        $(".feedme").on("click", function () {

            let divCopy = `<div class=feedme> ${$(this).text()} </div>`

            $("body").append(divCopy)
        })


        // const names = ["Alex", "Byron", "Cassandra", "Deandre", "Ellena"]
        const names = [
            {first: "Alex", last: "Johnson"},
            {first: "Byron", last: "Loveall"},
            {first: "Cassandra", last: "Wuthers"},
            {first: "Deandre", last: "Rahm"},
            {first: "Ellena", last: "Freeman"}
        ]

        for (let name of names) {
            $("body").append(`<div>${name.first} ${name.last}</div>`)
        }


        $('.elem').hover(function () {
            $(this).remove()
        })

        $("#btn-post").click(function () {
            const newDiv = `<div class="blog">Nice</div>`

            $('#blogs').append(newDiv)

        })

        $("#blogs").on( "click", ".blog", function () {
                $(this).text("blargh")
            }
        )
    }
)
