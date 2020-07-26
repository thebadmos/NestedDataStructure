/*var nestedObject = {
speakers : [{ name : "Elie" },{ name : "Tim" },{ name : "Matt" }],
data : {
continents : {
europe : {
countries : {
switzerland : {
capital : "Bern" ,
population : 8000000
}
}
}
},
languages : {
spanish : {
hello : "Hola"
},
french : {
hello : "Bonjour"
}
}
}
}*/

//Write a function addSpeaker to add a speaker to the array of speakers. The speaker you add must be an object with a key of name and a value ofwhatever you'd like
function addSpeaker(speakerName){
    nestedObject.speakers.push({
      name: speakerName
    })
  }

//Write a function addLanguage that adds a language to the languages object.The language object you add should have a key with the name of the language and the value of another object with a key of "hello" and a value ofhowever you spell "hello" in the language you add.
function addLanguage(language, helloInLanguage){
    nestedObject.data.languages[language] = {
      hello: helloInLanguage
    }
  }

//Write a function addCountry that adds a European country to the countries object (inside of the continents object, inside of the countries object). The country you add should be an object with the key as name of the country andthe value as an object with the keys of "capital" and "population" and their respective values.
function addCountry(name, capital, population){
    nestedObject.data.continents.europe.countries[name] = {
      capital: capital,
      population: population
    }
  }
  
