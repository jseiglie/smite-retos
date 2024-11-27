const fs = require('fs');

fs.readFile("./client/src/assets/guru.json", "utf8", (err, data) => {
  if (err) throw err;
  const json = JSON.parse(data);
  const transformed = {};

  for (const key in json) {
    const item = json[key];
    transformed[item.name] = item;
    transformed[item.name].guru_id = transformed[item.name].id;
    
    delete transformed[item.name].id
    transformed[item.name].lifesteal = false; // Initialize lifesteal to false

    if (Array.isArray(item.stats) && item.stats.length > 0) {
      item.stats.forEach((stat) => {
        stat.description.split(" ").forEach((element) => {
          switch (element) {
            case "Physical":
              transformed[item.name].physical = true;
              transformed[item.name].magical = false;
              break;
            case "Magical":
              transformed[item.name].physical = false;
              transformed[item.name].magical = true;
              break;
            default:
              break;
          }
          if (element === "Lifesteal") {
            transformed[item.name].lifesteal = true;
          }
        });
      });
    }
  }

  fs.writeFile("./guru_transformed.json", JSON.stringify(transformed, null, 2), (err) => {
    if (err) throw err;
    console.log('Transformation complete');
  });
});