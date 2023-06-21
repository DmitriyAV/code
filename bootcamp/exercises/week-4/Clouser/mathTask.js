// const mathOperations = function () {
//     const add = function (x, y) {
//         return x + y;
//     }
//
//     const subtract = function (x, y) {
//         return x - y;
//     }
//
//     const multiply = function (x, y) {
//         return x * y;
//     }
//
//     const divide = function (x, y) {
//         return x / y;
//     }
//     return {
//         add: add,
//         sub: subtract,
//         mult: multiply,
//         div: divide
//     }
// }
//
// const calc = mathOperations()
//
// console.log(calc.add(5,9))
// console.log(calc.div(50, (calc.mult(6, 2))))


/*

const UserModule = function () {
    const _users = []

    const addUser = (name) => _users.push(name)

    const listUsers = () => _users.forEach(console.log)

    return {
        addUser: addUser,
        listUSer: listUsers
    }
}

const users = UserModule()

users.addUser("Jone")
users.addUser("Fin")
users.addUser("MIke")
users.listUSer()
*/

/*
const StringFormatter = function () {

    const capitalizeFirst = (str) => {
        const first = str[0].toUpperCase()
        const res = first + str.slice(1)
        console.log(res)
    }

    const toSkewerCase = (str) => {
        const trim = str.trim()
        const res = trim.replace(/\s+/g, '-')
        console.log(res)
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}


const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy")
//should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box*/


//Exercise 2


/*
const Bank = function (){
    let money = 500

    const deposit = (cash) => money += cash

    const showBalance = () => console.log(`${money}`)

    return {
        deposit: deposit,
        showBalance: showBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950
*/


//Exercise 3


const SongsManager = function () {
    const firstPartUri = "https://www.youtube.com/watch?v="
    let songs = {}
    const getUrl = id => firstPartUri + id.slice(1)
    const addSong = (track, url) => {
        songs[track] = url.split(firstPartUri)
    }

    const getSong = (track) => console.log(getUrl(songs[track]))

    return {
        addSong: addSong,
        getSong: getSong
    }
}


const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ