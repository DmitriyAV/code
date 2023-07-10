const classData = {
    classmates: [
        {name: "That on gal", description: "Always has the answer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}


const menuData = {
    menu: [
        { name: "Google", link: "http://google.com", socialNetwork: true },
        { name: "Facebook", link: "http://facebook.com", socialNetwork: false },
        { name: "Instagram", link: "http://nstagram.com", socialNetwork: true },
        { name: "Twitter", link: "http://twitter.com", socialNetwork: true },
    ]
};


// append our new html to the page

const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const sour = $('#animals-template').html();
const templ = Handlebars.compile(sour);
const newHTM = templ(animals);

// append our new html to the page
console.log(newHTM)
$('#box').append(newHTM);

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const sou = $('#languages-template').html();
const temp = Handlebars.compile(sou);
const newHT = temp(languages);

// append our new html to the page
$('#box1').append(newHT);
