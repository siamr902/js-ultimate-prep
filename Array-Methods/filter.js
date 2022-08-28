const games = ["Uncharted", "Last of Us", "Minecraft", "Terraria"];

function findGames(query) {
  return games.filter((game) => {
    return game.toLowerCase() === query.toLowerCase();
  });
}

console.log(findGames("terraria"));
