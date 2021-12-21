//1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
showButton = document.querySelector(".showme");
console.log(showButton);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
h1 = document.querySelector("#pillado");
console.log(h1);

//1.3 Usa querySelector para mostrar por consola todos los p
showP = document.querySelectorAll("p");
console.log(showP);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
showPokemon = document.querySelectorAll(".pokemon");
console.log(showPokemon);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
showDataFunctions = document.querySelectorAll('[data-function="testMe"]');
console.log(showDataFunctions);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
FunctionNumber3 = document.querySelectorAll('[data-function="testMe"]');
console.log(FunctionNumber3[3]);
