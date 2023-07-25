import {FINANCE, EMOTIONS, WEATHER}  from "./consts.js";

const handleComplaints = function (complaint) {
    if (complaint.type === FINANCE) {
        console.log("Money doesn’t grow on trees, you know")
    }
    else if (complaint.type === EMOTIONS) {
        console.log("It’ll pass, as all things do, with time.")
    }
    else if (complaint.type === WEATHER) {
        console.log("It is the way of nature. Not much to be done.")
    }

/*    switch (complaint) {
        case complaint.type === FINANCE:
            return "Money doesn’t grow on trees, you know";
            break;
        case complaint.type === EMOTIONS:
            return "It’ll pass, as all things do, with time.";
            break;
        case complaint.type === WEATHER:
            return "It is the way of nature. Not much to be done.";
            break;
    }*/
}

export {handleComplaints}