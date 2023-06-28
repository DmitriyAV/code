let p1 = {
    name: "Joe",
    age: 14,
    city: "Haifa"
}

let p2 = {
    name: "Jane",
    age: 18,
    city: "Haifa"
}

if (p1.age == p2.age && p1.city == p2.city) {
    console.log(`${p1.name} wanted to date ${p2.name}`)
} else { console.log(`${p1.name} wanted to date ${p2.name}, but couldn’t`) }

//Library

let book = {
    author: "Mark Tven",
    title: "Book"
}

let book1 = {
    author: "Van Pears",
    title: "Book"
}

let book2 = {
    author: "Tolstoy",
    title: "book"
}

let library = {
    books: [book, book1, book2]
}

console.table(library.books)


//Reservation

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const customerName = prompt('Please enter the name for your reservation');


if (reservations[customerName]?.claimed === false) {
    alert(`Welcome ${customerName}`);
} else if (reservations[customerName]?.claimed === true) {
    alert("Hmm, someone already claimed this reservation")
} else {
    alert("You have no reservation")
}
