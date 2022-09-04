const gameSettings = {};
const difficulties = ["easy", "medium", "hard"];

const gameSettingsProxy = new Proxy(gameSettings, {
  get: (obj, property) => {
    return property in obj ? obj[property] : "default";
  },

  set: (obj, property, value) => {
    if (
      property === "difficulty" &&
      !difficulties.includes(value).toLowerCase()
    ) {
      throw new Error("Erroneous difficulty");
    }
    obj[property] = value;
  },

  has(obj, property) {
    if (property === "difficulty") return false;
    return property in obj;
  }
});

console.log(typeof gameSettingsProxy === "object");
gameSettingsProxy.difficulty = "Light";
