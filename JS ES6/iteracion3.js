//3.1

const pointsList = [32, 54, 21, 64, 75, 43];

const pointsListCopy = [...pointsList];

//3.2

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyCopy = { ...toy };

//3.3

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];

const fusion = [...pointsList, ...pointsList2];

//3.4

const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const fusion = { ...toy, ...toyUpdate };

//3.5

const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsCopy = [...colors];
colorsCopy.splice(2, 1);

console.log(colors);
console.log(colorsCopy);