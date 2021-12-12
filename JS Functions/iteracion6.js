const duplicates = [
    "sushi",
    "pizza",
    "burger",
    "potatoe",
    "pasta",
    "ice-cream",
    "pizza",
    "chicken",
    "onion rings",
    "pasta",
    "soda",
  ];
  
  function removeDuplicates(param) {
    let unique = [];
    for (let i = 0; i < param.length; i++) {
      if (!unique.includes(param[i])) {
        unique.push(param[i]);
      }
    }
    return console.log(unique);
  }
  
  removeDuplicates(duplicates);