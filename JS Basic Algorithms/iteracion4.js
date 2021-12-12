//1.1
const avengers = ["Hulk", "Spiderman", "Black Panther"];
console.log(avengers[0]);

//1.2
const avengers = ['Hulk', 'Spiderman', 'Black Panther'];
avengers[0] = 'Ironman';

//1.3
const avengers = ['Hulk', 'Spiderman', 'Black Panther'];
alert(avengers.length);

//1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.5

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.6

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);