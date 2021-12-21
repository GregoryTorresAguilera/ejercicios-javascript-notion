//5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const greaterThan18 = ages.filter((age) => age > 18);

console.log(greaterThan18);

//5.2

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numPar = ages.filter((num) => {
  return num % 2 == 0;
});

console.log(numPar);
//5.3

const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  const lolPlayers = streamers.filter((gamer) => {
    return gamer.gameMorePlayed == "League of Legends";
  });
  
  console.log(lolPlayers);
  //5.4

const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  const playersWithU = streamers.filter((player) => {
    return player.name.includes("u");
  });
  
  console.log(playersWithU);
  //5.5

const streamers = [
    { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
    { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
    { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
    { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
  ];
  
  const filteredLoleros = streamers.filter((streamer) => {
    const toReturn = streamer.gameMorePlayed.toLowerCase().includes("legends");
  
    if (toReturn && streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
  
    return toReturn;
  });
  
  console.log(filteredLoleros);
  