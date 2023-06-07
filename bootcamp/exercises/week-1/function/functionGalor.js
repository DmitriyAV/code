people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]


const capitalize = function (str) {
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
  capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
  return capitalizedStr
}

const getAge = function(age) {
  const underage = 21
  const oldtimer = 55

  if (age <= underage) {
    return "Underage"
   } else if (person.age >= oldtimer) {
     return "55+"
   }

}

const wrapCatchphrase = function(str) {
  let wrap = ""

  wrap += `"${str}"`

  return wrap
}

const getSummary = function (person) {

  let space = "\n"
  let filter = ""

     filter += capitalize(person.name) + space
     filter += getAge(person.age) + space
     filter += capitalize(person.profession) + space
     filter += capitalize(person.country) + ":" + space
     filter += capitalize(person.city) + space
     filter += wrapCatchphrase(capitalize(person.catchphrase)) + space

   
  return filter

}


console.log(getSummary(people_info[0]))


//SecondPart

const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const IsExsist = function(str, str1) {
  if (str === str1) {
    return true
  } else return false
}

const wordCounter = function(phrase) {

let wordStore = {}
let desired = phrase.replace(/[^\w\s]/gi, '')
let splitted = desired.split(/[ ]/)


for (let i = 0; i < splitted.lenght; i++) {
  if(!IsExsist(splitted[i], wordStore[i])) {
      wordStore[i] = word
      
  } 
}
  return wordStore
}


console.log(wordCounter(story))