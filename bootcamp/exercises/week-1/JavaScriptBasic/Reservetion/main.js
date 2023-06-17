//Reservation

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const onClick = function () {

    const customerName = document.getElementById('input')
    const val = customerName.value

    if (reservations[val]?.claimed === false) {
        alert(`Welcome ${val}`);
    } else if (reservations[val]?.claimed === true) {
        alert("Hmm, someone already claimed this reservation")
    } else {
        alert("You have no reservation")
    }
}


