dataSetVersion = "2026-04-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Generation",
    key: "GENERATION",
    tooltip: "Check this to restrict to pokemon based on the generation they were introduced in.",
    checked: true,
    sub: [
      { name: "gen1", key: "gen1", tooltip: "Relevant characters Kanto"},
      { name: "gen2", key: "gen2", tooltip: "Relevant characters Johto"},
      { name: "gen3", key: "gen3", tooltip: "Relevant characters Hoenn"},
      { name: "gen4", key: "gen4", tooltip: "Relevant characters Sinnoh"},
      { name: "gen5", key: "gen5", tooltip: "Relevant characters Unova"},
      { name: "gen6", key: "gen6", tooltip: "Relevant characters Kalos"},
      { name: "gen7", key: "gen7", tooltip: "Relevant characters Alola"},
      { name: "gen8", key: "gen8", tooltip: "Relevant characters Galar"},
      { name: "gen9", key: "gen9", tooltip: "Relevant characters Paldea"},
        ]
  },
  {
    name: "Filter by Type",
    key: "TYPE",
    tooltip: "Check this to restrict to pokemon based on their type.",
    checked: true,
    sub: [
	{ name: "Normal", key: "Normal"},
    { name: "Fire", key: "Fire"},
    { name: "Water", key: "Water"},
    { name: "Electric", key: "Electric"},
    { name: "Grass", key: "Grass"},
    { name: "Ice", key: "Ice"},
    { name: "Fighting", key: "Fighting"},
    { name: "Poison", key: "Poison"},
    { name: "Ground", key: "Ground"},
    { name: "Flying", key: "Flying"},
    { name: "Psychic", key: "Psychic"},
    { name: "Bug", key: "Bug"},
    { name: "Rock", key: "Rock"},
    { name: "Ghost", key: "Ghost"},
    { name: "Dragon", key: "Dragon"},
    { name: "Dark", key: "Dark"},
    { name: "Steel", key: "Steel"},
    { name: "Fairy", key: "Fairy"}, 
    ]
  }
];

dataSet[dataSetVersion].characterData = [
{
    name: "000",
    img: "pokemon/000.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Abomasnow",
    img: "pokemon/ABOMASNOW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Abra",
    img: "pokemon/ABRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Absol",
    img: "pokemon/ABSOL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Accelgor",
    img: "pokemon/ACCELGOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },

];