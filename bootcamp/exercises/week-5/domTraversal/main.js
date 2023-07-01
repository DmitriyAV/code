$('.generator').on('click', function () {
    let computer = $(this).closest('.computer')
    let obj = {}
    let idProc = computer.find(".processor").attr('id')
    let idComp = computer.data().id
    let bus = computer.find('.BUS').text()

    obj = {
        processor: idProc,
        cmp_id: idComp,
        bus: bus
    }

    console.table(obj)

})

$('.validator').on('click', function () {
    let computer = $(this).closest('.computer')
    let genText = computer.find('.generator').text()
    let mb = computer.find('.MB').text()
    let qr = computer.find('.QR').map(function (){
        return $(this).text()
    }).get()

    let obj = {
        gen: genText,
        mb: mb,
        qr: qr.join(', ')
    }

    console.table(obj)
})

