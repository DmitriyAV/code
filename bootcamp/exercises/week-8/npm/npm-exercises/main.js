//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"

const validator = require('validator');

const email = "shoobert@dylan";
const isEmailValid = validator.isEmail(email);
console.log("Is email valid:", isEmailValid);


const phoneNumber = "786-329-9958";
const isPhoneNumberValid = validator.isMobilePhone(phoneNumber, 'en-US');
console.log("Is phone number valid:", isPhoneNumberValid);


let cleanedText = validator.blacklist(text, blacklist).toLowerCase();
console.log(cleanedText);
