const push = function () {
    console.log("pushing it!")
}

const pull = function () {
    console.log("pulling it!")
}

const pushPull = (call) => call()

pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"

const returnTime = function (time) {
    console.log('The current time is: ' + time)
}

const getTime = (call) => {
    const time = new Date()
    call(time)
}

getTime(returnTime)

//
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//
// };
//
// const logData = (data) => console.log(data)
//
// displayData(alert, logData, "I like to party")


const sum = (p1, p2, p3) => {
    return p1 + p2 + p3
}

console.log(sum(5, 7, 9))


const capitalize = (str) => console.log(str.toLowerCase())

capitalize("bOb") // returns Bob
capitalize("TAYLOR") // returns Taylor
capitalize("feliSHIA") // returns Felishia


const determineWeather = temp => {
    if (temp > 25) {
        return "hot"
    }
    return "cold"
}

const commentOnWeather = (num) => {
    console.log(`It's ${determineWeather(num)}`)
}

    commentOnWeather(30) //returns "It's hot"
    commentOnWeather(22) //returns "It's cold"