export const Preloader = () => {
  const pokeElements = [
    "normal",
    "fire",
    "water",
    "electric",
    "grass",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dragon",
    "dark",
    "steel",
    "fairy",
  ];

  pokeElements.forEach((elem) => {
    const img = new Image();
    img.src = require(`../assets/svg/${elem}.svg`);
  });

  console.log("Preload Complete");
};
