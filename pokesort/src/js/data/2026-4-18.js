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
  },
  {
    name: "Filter by Form",
    key: "FORM",
    tooltip: "",
    checked: true,
    sub: [
	{ name: "Mega Evolution (and Primal)", key: "Mega"},
  { name: "Base Forms", key: "Base"},
  { name: "Final Evolution (Not implemented yet)", key: "Final"},
    ]
  }
];

dataSet[dataSetVersion].characterData = [
{
    name: "000",
    img: "pokemon/000.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bird", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Abomasnow",
    img: "pokemon/ABOMASNOW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Abra",
    img: "pokemon/ABRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Absol",
    img: "pokemon/ABSOL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Accelgor",
    img: "pokemon/ACCELGOR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Aegislash",
    img: "pokemon/AEGISLASH.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Steel", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Aerodactyl",
    img: "pokemon/AERODACTYL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Aggron",
    img: "pokemon/AGGRON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Aipom",
    img: "pokemon/AIPOM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Alakazam",
    img: "pokemon/ALAKAZAM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Alcremie",
    img: "pokemon/ALCREMIE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Alomomola",
    img: "pokemon/ALOMOMOLA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Altaria",
    img: "pokemon/ALTARIA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Amaura",
    img: "pokemon/AMAURA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ice", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Ambipom",
    img: "pokemon/AMBIPOM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Amoonguss",
    img: "pokemon/AMOONGUSS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Ampharos",
    img: "pokemon/AMPHAROS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Annihilape",
    img: "pokemon/ANNIHILAPE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fighting", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Anorith",
    img: "pokemon/ANORITH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Appletun",
    img: "pokemon/APPLETUN.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Applin",
    img: "pokemon/APPLIN.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Araquanid",
    img: "pokemon/ARAQUANID.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Arbok",
    img: "pokemon/ARBOK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Arboliva",
    img: "pokemon/ARBOLIVA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Arcanine",
    img: "pokemon/ARCANINE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Arceus",
    img: "pokemon/ARCEUS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Archaludon",
    img: "pokemon/ARCHALUDON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Archen",
    img: "pokemon/ARCHEN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Archeops",
    img: "pokemon/ARCHEOPS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Arctibax",
    img: "pokemon/ARCTIBAX.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Arctovish",
    img: "pokemon/ARCTOVISH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Arctozolt",
    img: "pokemon/ARCTOZOLT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Ariados",
    img: "pokemon/ARIADOS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Armaldo",
    img: "pokemon/ARMALDO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Armarouge",
    img: "pokemon/ARMAROUGE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Aromatisse",
    img: "pokemon/AROMATISSE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Aron",
    img: "pokemon/ARON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Arrokuda",
    img: "pokemon/ARROKUDA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Articuno",
    img: "pokemon/ARTICUNO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ice", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Audino",
    img: "pokemon/AUDINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Aurorus",
    img: "pokemon/AURORUS.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Avalugg",
    img: "pokemon/AVALUGG.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Axew",
    img: "pokemon/AXEW.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Azelf",
    img: "pokemon/AZELF.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Azumarill",
    img: "pokemon/AZUMARILL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Azurill",
    img: "pokemon/AZURILL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Bagon",
    img: "pokemon/BAGON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Baltoy",
    img: "pokemon/BALTOY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Banette",
    img: "pokemon/BANETTE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Barbaracle",
    img: "pokemon/BARBARACLE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Barboach",
    img: "pokemon/BARBOACH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Barraskewda",
    img: "pokemon/BARRASKEWDA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Basculin",
    img: "pokemon/BASCULIN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Bastiodon",
    img: "pokemon/BASTIODON.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Baxcalibur",
    img: "pokemon/BAXCALIBUR.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Bayleef",
    img: "pokemon/BAYLEEF.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Beartic",
    img: "pokemon/BEARTIC.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Beautifly",
    img: "pokemon/BEAUTIFLY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Beedrill",
    img: "pokemon/BEEDRILL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Beheeyem",
    img: "pokemon/BEHEEYEM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Beldum",
    img: "pokemon/BELDUM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Bellibolt",
    img: "pokemon/BELLIBOLT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Bellossom",
    img: "pokemon/BELLOSSOM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Bellsprout",
    img: "pokemon/BELLSPROUT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Bergmite",
    img: "pokemon/BERGMITE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Bewear",
    img: "pokemon/BEWEAR.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Bibarel",
    img: "pokemon/BIBAREL.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Bidoof",
    img: "pokemon/BIDOOF.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Binacle",
    img: "pokemon/BINACLE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Bisharp",
    img: "pokemon/BISHARP.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Blacephalon",
    img: "pokemon/BLACEPHALON.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Blastoise",
    img: "pokemon/BLASTOISE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Blaziken",
    img: "pokemon/BLAZIKEN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Blipbug",
    img: "pokemon/BLIPBUG.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Blissey",
    img: "pokemon/BLISSEY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Blitzle",
    img: "pokemon/BLITZLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Boldore",
    img: "pokemon/BOLDORE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Boltund",
    img: "pokemon/BOLTUND.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Bombirdier",
    img: "pokemon/BOMBIRDIER.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Flying", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Bonsly",
    img: "pokemon/BONSLY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Bouffalant",
    img: "pokemon/BOUFFALANT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Bounsweet",
    img: "pokemon/BOUNSWEET.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Braixen",
    img: "pokemon/BRAIXEN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Brambleghast",
    img: "pokemon/BRAMBLEGHAST.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Bramblin",
    img: "pokemon/BRAMBLIN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Braviary",
    img: "pokemon/BRAVIARY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Breloom",
    img: "pokemon/BRELOOM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Brionne",
    img: "pokemon/BRIONNE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Bronzong",
    img: "pokemon/BRONZONG.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Steel", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Bronzor",
    img: "pokemon/BRONZOR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Steel", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Brutebonnet",
    img: "pokemon/BRUTEBONNET.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Bruxish",
    img: "pokemon/BRUXISH.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Budew",
    img: "pokemon/BUDEW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Buizel",
    img: "pokemon/BUIZEL.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Bulbasaur",
    img: "pokemon/BULBASAUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Buneary",
    img: "pokemon/BUNEARY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Bunnelby",
    img: "pokemon/BUNNELBY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Burmy",
    img: "pokemon/BURMY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Butterfree",
    img: "pokemon/BUTTERFREE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Buzzwole",
    img: "pokemon/BUZZWOLE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Cacnea",
    img: "pokemon/CACNEA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Cacturne",
    img: "pokemon/CACTURNE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Calyrex",
    img: "pokemon/CALYREX.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Camerupt",
    img: "pokemon/CAMERUPT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Capsakid",
    img: "pokemon/CAPSAKID.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Carbink",
    img: "pokemon/CARBINK.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Carkol",
    img: "pokemon/CARKOL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Rock", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Carnivine",
    img: "pokemon/CARNIVINE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Carracosta",
    img: "pokemon/CARRACOSTA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Carvanha",
    img: "pokemon/CARVANHA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Cascoon",
    img: "pokemon/CASCOON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Castform",
    img: "pokemon/CASTFORM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal", "Fire", "Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Caterpie",
    img: "pokemon/CATERPIE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Celebi",
    img: "pokemon/CELEBI.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Celesteela",
    img: "pokemon/CELESTEELA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Centiskorch",
    img: "pokemon/CENTISKORCH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fire", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Ceruledge",
    img: "pokemon/CERULEDGE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Cetitan",
    img: "pokemon/CETITAN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Cetoddle",
    img: "pokemon/CETODDLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Chandelure",
    img: "pokemon/CHANDELURE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ghost", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Chansey",
    img: "pokemon/CHANSEY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Charcadet",
    img: "pokemon/CHARCADET.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Charizard",
    img: "pokemon/CHARIZARD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Charjabug",
    img: "pokemon/CHARJABUG.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Charmander",
    img: "pokemon/CHARMANDER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Charmeleon",
    img: "pokemon/CHARMELEON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Chatot",
    img: "pokemon/CHATOT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Cherrim",
    img: "pokemon/CHERRIM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Cherubi",
    img: "pokemon/CHERUBI.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Chesnaught",
    img: "pokemon/CHESNAUGHT.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Chespin",
    img: "pokemon/CHESPIN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Chewtle",
    img: "pokemon/CHEWTLE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Chien-Pao",
    img: "pokemon/CHIENPAO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Chikorita",
    img: "pokemon/CHIKORITA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Chimchar",
    img: "pokemon/CHIMCHAR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Chimecho",
    img: "pokemon/CHIMECHO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Chinchou",
    img: "pokemon/CHINCHOU.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Chingling",
    img: "pokemon/CHINGLING.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Chi-Yu",
    img: "pokemon/CHIYU.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Cinccino",
    img: "pokemon/CINCCINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Cinderace",
    img: "pokemon/CINDERACE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Clamperl",
    img: "pokemon/CLAMPERL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Clauncher",
    img: "pokemon/CLAUNCHER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Clawitzer",
    img: "pokemon/CLAWITZER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Claydol",
    img: "pokemon/CLAYDOL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Clefable",
    img: "pokemon/CLEFABLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Clefairy",
    img: "pokemon/CLEFAIRY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Cleffa",
    img: "pokemon/CLEFFA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Clobbopus",
    img: "pokemon/CLOBBOPUS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Clodsire",
    img: "pokemon/CLODSIRE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Cloyster",
    img: "pokemon/CLOYSTER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Coalossal",
    img: "pokemon/COALOSSAL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Cobalion",
    img: "pokemon/COBALION.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Cofagrigus",
    img: "pokemon/COFAGRIGUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Combee",
    img: "pokemon/COMBEE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Combusken",
    img: "pokemon/COMBUSKEN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Comfey",
    img: "pokemon/COMFEY.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Conkeldurr",
    img: "pokemon/CONKELDURR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Copperajah",
    img: "pokemon/COPPERAJAH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Corphish",
    img: "pokemon/CORPHISH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Corsola",
    img: "pokemon/CORSOLA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Corviknight",
    img: "pokemon/CORVIKNIGHT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Flying", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Corvisquire",
    img: "pokemon/CORVISQUIRE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Cosmoem",
    img: "pokemon/COSMOEM.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Cosmog",
    img: "pokemon/COSMOG.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Cottonee",
    img: "pokemon/COTTONEE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Crabominable",
    img: "pokemon/CRABOMINABLE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fighting", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Crabrawler",
    img: "pokemon/CRABRAWLER.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Cradily",
    img: "pokemon/CRADILY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Cramorant",
    img: "pokemon/CRAMORANT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Cranidos",
    img: "pokemon/CRANIDOS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Crawdaunt",
    img: "pokemon/CRAWDAUNT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Cresselia",
    img: "pokemon/CRESSELIA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Croagunk",
    img: "pokemon/CROAGUNK.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Crobat",
    img: "pokemon/CROBAT.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Poison", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Crocalor",
    img: "pokemon/CROCALOR.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Croconaw",
    img: "pokemon/CROCONAW.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Crustle",
    img: "pokemon/CRUSTLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Cryogonal",
    img: "pokemon/CRYOGONAL.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Cubchoo",
    img: "pokemon/CUBCHOO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Cubone",
    img: "pokemon/CUBONE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Cufant",
    img: "pokemon/CUFANT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Cursola",
    img: "pokemon/CURSOLA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Cutiefly",
    img: "pokemon/CUTIEFLY.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Cyclizar",
    img: "pokemon/CYCLIZAR.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Cyndaquil",
    img: "pokemon/CYNDAQUIL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Dachsbun",
    img: "pokemon/DACHSBUN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Darkrai",
    img: "pokemon/DARKRAI.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Darmanitan",
    img: "pokemon/DARMANITAN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Dartrix",
    img: "pokemon/DARTRIX.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Darumaka",
    img: "pokemon/DARUMAKA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Decidueye",
    img: "pokemon/DECIDUEYE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Dedenne",
    img: "pokemon/DEDENNE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Electric", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Deerling",
    img: "pokemon/DEERLING.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Deino",
    img: "pokemon/DEINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Delcatty",
    img: "pokemon/DELCATTY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Delibird",
    img: "pokemon/DELIBIRD.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ice", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Delphox",
    img: "pokemon/DELPHOX.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Deoxys",
    img: "pokemon/DEOXYS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Dewgong",
    img: "pokemon/DEWGONG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Dewott",
    img: "pokemon/DEWOTT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Dewpider",
    img: "pokemon/DEWPIDER.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Dhelmise",
    img: "pokemon/DHELMISE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Dialga",
    img: "pokemon/DIALGA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Diancie",
    img: "pokemon/DIANCIE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Diggersby",
    img: "pokemon/DIGGERSBY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ground", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Diglett",
    img: "pokemon/DIGLETT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Dipplin",
    img: "pokemon/DIPPLIN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Ditto",
    img: "pokemon/DITTO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Dodrio",
    img: "pokemon/DODRIO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Doduo",
    img: "pokemon/DODUO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Dolliv",
    img: "pokemon/DOLLIV.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Dondozo",
    img: "pokemon/DONDOZO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Donphan",
    img: "pokemon/DONPHAN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Dottler",
    img: "pokemon/DOTTLER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Bug", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Doublade",
    img: "pokemon/DOUBLADE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ghost", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Dracovish",
    img: "pokemon/DRACOVISH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Dracozolt",
    img: "pokemon/DRACOZOLT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Dragalge",
    img: "pokemon/DRAGALGE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Dragapult",
    img: "pokemon/DRAGAPULT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dragon", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Dragonair",
    img: "pokemon/DRAGONAIR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Dragonite",
    img: "pokemon/DRAGONITE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dragon", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Drakloak",
    img: "pokemon/DRAKLOAK.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dragon", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Drampa",
    img: "pokemon/DRAMPA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Drapion",
    img: "pokemon/DRAPION.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Dratini",
    img: "pokemon/DRATINI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Drednaw",
    img: "pokemon/DREDNAW.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Dreepy",
    img: "pokemon/DREEPY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dragon", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Drifblim",
    img: "pokemon/DRIFBLIM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Drifloon",
    img: "pokemon/DRIFLOON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Drilbur",
    img: "pokemon/DRILBUR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Drizzile",
    img: "pokemon/DRIZZILE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Drowzee",
    img: "pokemon/DROWZEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Druddigon",
    img: "pokemon/DRUDDIGON.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Dubwool",
    img: "pokemon/DUBWOOL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Ducklett",
    img: "pokemon/DUCKLETT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Dudunsparce",
    img: "pokemon/DUDUNSPARCE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Dugtrio",
    img: "pokemon/DUGTRIO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Dunsparce",
    img: "pokemon/DUNSPARCE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Duosion",
    img: "pokemon/DUOSION.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Duraludon",
    img: "pokemon/DURALUDON.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Steel", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Durant",
    img: "pokemon/DURANT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Dusclops",
    img: "pokemon/DUSCLOPS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Dusknoir",
    img: "pokemon/DUSKNOIR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Duskull",
    img: "pokemon/DUSKULL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Dustox",
    img: "pokemon/DUSTOX.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Dwebble",
    img: "pokemon/DWEBBLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Eelektrik",
    img: "pokemon/EELEKTRIK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Eelektross",
    img: "pokemon/EELEKTROSS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Eevee",
    img: "pokemon/EEVEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Eiscue",
    img: "pokemon/EISCUE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Ekans",
    img: "pokemon/EKANS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Eldegoss",
    img: "pokemon/ELDEGOSS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Electabuzz",
    img: "pokemon/ELECTABUZZ.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Electivire",
    img: "pokemon/ELECTIVIRE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Electrike",
    img: "pokemon/ELECTRIKE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Electrode",
    img: "pokemon/ELECTRODE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Elekid",
    img: "pokemon/ELEKID.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Elgyem",
    img: "pokemon/ELGYEM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Emboar",
    img: "pokemon/EMBOAR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Emolga",
    img: "pokemon/EMOLGA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Empoleon",
    img: "pokemon/EMPOLEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Entei",
    img: "pokemon/ENTEI.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Escavalier",
    img: "pokemon/ESCAVALIER.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Espathra",
    img: "pokemon/ESPATHRA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Espeon",
    img: "pokemon/ESPEON.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Espurr",
    img: "pokemon/ESPURR.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Eternatus",
    img: "pokemon/ETERNATUS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Poison", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Excadrill",
    img: "pokemon/EXCADRILL.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Exeggcute",
    img: "pokemon/EXEGGCUTE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Exeggutor",
    img: "pokemon/EXEGGUTOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Exploud",
    img: "pokemon/EXPLOUD.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Falinks",
    img: "pokemon/FALINKS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Farfetchd",
    img: "pokemon/FARFETCHD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Farigiraf",
    img: "pokemon/FARIGIRAF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Fearow",
    img: "pokemon/FEAROW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Feebas",
    img: "pokemon/FEEBAS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Fennekin",
    img: "pokemon/FENNEKIN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Feraligatr",
    img: "pokemon/FERALIGATR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Ferroseed",
    img: "pokemon/FERROSEED.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Ferrothorn",
    img: "pokemon/FERROTHORN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Fezandipiti",
    img: "pokemon/FEZANDIPITI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Fidough",
    img: "pokemon/FIDOUGH.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Finizen",
    img: "pokemon/FINIZEN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Finneon",
    img: "pokemon/FINNEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Flaaffy",
    img: "pokemon/FLAAFFY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Flabebe",
    img: "pokemon/FLABEBE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Flamigo",
    img: "pokemon/FLAMIGO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Flying", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Flapple",
    img: "pokemon/FLAPPLE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Flareon",
    img: "pokemon/FLAREON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Fletchinder",
    img: "pokemon/FLETCHINDER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Fletchling",
    img: "pokemon/FLETCHLING.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Flittle",
    img: "pokemon/FLITTLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Floatzel",
    img: "pokemon/FLOATZEL.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Floette",
    img: "pokemon/FLOETTE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Floragato",
    img: "pokemon/FLORAGATO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Florges",
    img: "pokemon/FLORGES.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Flutter Mane",
    img: "pokemon/FLUTTERMANE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Flygon",
    img: "pokemon/FLYGON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Fomantis",
    img: "pokemon/FOMANTIS.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Foongus",
    img: "pokemon/FOONGUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Forretress",
    img: "pokemon/FORRETRESS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Fraxure",
    img: "pokemon/FRAXURE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Frigibax",
    img: "pokemon/FRIGIBAX.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Frillish",
    img: "pokemon/FRILLISH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Froakie",
    img: "pokemon/FROAKIE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Frogadier",
    img: "pokemon/FROGADIER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Froslass",
    img: "pokemon/FROSLASS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Frosmoth",
    img: "pokemon/FROSMOTH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Fuecoco",
    img: "pokemon/FUECOCO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Furfrou",
    img: "pokemon/FURFROU.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Furret",
    img: "pokemon/FURRET.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Gabite",
    img: "pokemon/GABITE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Gallade",
    img: "pokemon/GALLADE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Galvantula",
    img: "pokemon/GALVANTULA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Garbodor",
    img: "pokemon/GARBODOR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Garchomp",
    img: "pokemon/GARCHOMP.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Gardevoir",
    img: "pokemon/GARDEVOIR.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Garganacl",
    img: "pokemon/GARGANACL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Gastly",
    img: "pokemon/GASTLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ghost", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Gastrodon",
    img: "pokemon/GASTRODON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Genesect",
    img: "pokemon/GENESECT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Gengar",
    img: "pokemon/GENGAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ghost", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Geodude",
    img: "pokemon/GEODUDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Gholdengo",
    img: "pokemon/GHOLDENGO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Gible",
    img: "pokemon/GIBLE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Gigalith",
    img: "pokemon/GIGALITH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Gimmighoul",
    img: "pokemon/GIMMIGHOUL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Girafarig",
    img: "pokemon/GIRAFARIG.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Giratina",
    img: "pokemon/GIRATINA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Glaceon",
    img: "pokemon/GLACEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Glalie",
    img: "pokemon/GLALIE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Glameow",
    img: "pokemon/GLAMEOW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Glastrier",
    img: "pokemon/GLASTRIER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Gligar",
    img: "pokemon/GLIGAR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Glimmet",
    img: "pokemon/GLIMMET.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Glimmora",
    img: "pokemon/GLIMMORA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Gliscor",
    img: "pokemon/GLISCOR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Gloom",
    img: "pokemon/GLOOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Gogoat",
    img: "pokemon/GOGOAT.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Golbat",
    img: "pokemon/GOLBAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Goldeen",
    img: "pokemon/GOLDEEN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Golduck",
    img: "pokemon/GOLDUCK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Golem",
    img: "pokemon/GOLEM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Golett",
    img: "pokemon/GOLETT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Golisopod",
    img: "pokemon/GOLISOPOD.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Golurk",
    img: "pokemon/GOLURK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ghost", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Goodra",
    img: "pokemon/GOODRA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Goomy",
    img: "pokemon/GOOMY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Gorebyss",
    img: "pokemon/GOREBYSS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Gossifleur",
    img: "pokemon/GOSSIFLEUR.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Gothita",
    img: "pokemon/GOTHITA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Gothitelle",
    img: "pokemon/GOTHITELLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Gothorita",
    img: "pokemon/GOTHORITA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Gouging Fire",
    img: "pokemon/GOUGINGFIRE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Gourgeist",
    img: "pokemon/GOURGEIST.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ghost", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Grafaiai",
    img: "pokemon/GRAFAIAI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Granbull",
    img: "pokemon/GRANBULL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Grapploct",
    img: "pokemon/GRAPPLOCT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Graveler",
    img: "pokemon/GRAVELER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Great Tusk",
    img: "pokemon/GREATTUSK.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ground", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Greavard",
    img: "pokemon/GREAVARD.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Greedent",
    img: "pokemon/GREEDENT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Greninja",
    img: "pokemon/GRENINJA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Grimer",
    img: "pokemon/GRIMER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Grimmsnarl",
    img: "pokemon/GRIMMSNARL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Grookey",
    img: "pokemon/GROOKEY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Grotle",
    img: "pokemon/GROTLE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Groudon",
    img: "pokemon/GROUDON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Grovyle",
    img: "pokemon/GROVYLE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Growlithe",
    img: "pokemon/GROWLITHE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Grubbin",
    img: "pokemon/GRUBBIN.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Grumpig",
    img: "pokemon/GRUMPIG.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Gulpin",
    img: "pokemon/GULPIN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Gumshoos",
    img: "pokemon/GUMSHOOS.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Gurdurr",
    img: "pokemon/GURDURR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Guzzlord",
    img: "pokemon/GUZZLORD.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dark", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Gyarados",
    img: "pokemon/GYARADOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Hakamo-o",
    img: "pokemon/HAKAMOO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dragon", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Happiny",
    img: "pokemon/HAPPINY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Hariyama",
    img: "pokemon/HARIYAMA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Hatenna",
    img: "pokemon/HATENNA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Hatterene",
    img: "pokemon/HATTERENE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Hattrem",
    img: "pokemon/HATTREM.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Haunter",
    img: "pokemon/HAUNTER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ghost", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Hawlucha",
    img: "pokemon/HAWLUCHA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fighting", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Haxorus",
    img: "pokemon/HAXORUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Heatmor",
    img: "pokemon/HEATMOR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Heatran",
    img: "pokemon/HEATRAN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Heliolisk",
    img: "pokemon/HELIOLISK.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Electric", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Helioptile",
    img: "pokemon/HELIOPTILE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Electric", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Heracross",
    img: "pokemon/HERACROSS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Herdier",
    img: "pokemon/HERDIER.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Hippopotas",
    img: "pokemon/HIPPOPOTAS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Hippowdon",
    img: "pokemon/HIPPOWDON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Hitmonchan",
    img: "pokemon/HITMONCHAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Hitmonlee",
    img: "pokemon/HITMONLEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Hitmontop",
    img: "pokemon/HITMONTOP.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Honchkrow",
    img: "pokemon/HONCHKROW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dark", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Honedge",
    img: "pokemon/HONEDGE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Steel", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Ho-oh",
    img: "pokemon/HOOH.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Hoopa",
    img: "pokemon/HOOPA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Hoothoot",
    img: "pokemon/HOOTHOOT.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Hoppip",
    img: "pokemon/HOPPIP.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Horsea",
    img: "pokemon/HORSEA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Houndoom",
    img: "pokemon/HOUNDOOM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Houndour",
    img: "pokemon/HOUNDOUR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Houndstone",
    img: "pokemon/HOUNDSTONE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Huntail",
    img: "pokemon/HUNTAIL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Hydrapple",
    img: "pokemon/HYDRAPPLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Hydreigon",
    img: "pokemon/HYDREIGON.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Hypno",
    img: "pokemon/HYPNO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Igglybuff",
    img: "pokemon/IGGLYBUFF.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Illumise",
    img: "pokemon/ILLUMISE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Impidimp",
    img: "pokemon/IMPIDIMP.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Incineroar",
    img: "pokemon/INCINEROAR.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Indeedee",
    img: "pokemon/INDEEDEE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Infernape",
    img: "pokemon/INFERNAPE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Inkay",
    img: "pokemon/INKAY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dark", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Inteleon",
    img: "pokemon/INTELEON.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Boulder",
    img: "pokemon/IRONBOULDER.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Bundle",
    img: "pokemon/IRONBUNDLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ice", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Crown",
    img: "pokemon/IRONCROWN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Hands",
    img: "pokemon/IRONHANDS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fighting", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Jugulis",
    img: "pokemon/IRONJUGULIS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Leaves",
    img: "pokemon/IRONLEAVES.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Moth",
    img: "pokemon/IRONMOTH.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Thorns",
    img: "pokemon/IRONTHORNS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Treads",
    img: "pokemon/IRONTREADS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ground", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Iron Valiant",
    img: "pokemon/IRONVALIANT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Ivysaur",
    img: "pokemon/IVYSAUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Jangmo-o",
    img: "pokemon/JANGMOO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Jellicent",
    img: "pokemon/JELLICENT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Jigglypuff",
    img: "pokemon/JIGGLYPUFF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Jirachi",
    img: "pokemon/JIRACHI.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Jolteon",
    img: "pokemon/JOLTEON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Joltik",
    img: "pokemon/JOLTIK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Jumpluff",
    img: "pokemon/JUMPLUFF.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Jynx",
    img: "pokemon/JYNX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ice", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Kabuto",
    img: "pokemon/KABUTO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Kabutops",
    img: "pokemon/KABUTOPS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Kadabra",
    img: "pokemon/KADABRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Kakuna",
    img: "pokemon/KAKUNA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Kangaskhan",
    img: "pokemon/KANGASKHAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Karrablast",
    img: "pokemon/KARRABLAST.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Kartana",
    img: "pokemon/KARTANA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Kecleon",
    img: "pokemon/KECLEON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Keldeo",
    img: "pokemon/KELDEO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Kilowattrel",
    img: "pokemon/KILOWATTREL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Kingambit",
    img: "pokemon/KINGAMBIT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Kingdra",
    img: "pokemon/KINGDRA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Kingler",
    img: "pokemon/KINGLER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Kirlia",
    img: "pokemon/KIRLIA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Klang",
    img: "pokemon/KLANG.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Klawf",
    img: "pokemon/KLAWF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Klefki",
    img: "pokemon/KLEFKI.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Steel", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Klink",
    img: "pokemon/KLINK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Klinklang",
    img: "pokemon/KLINKLANG.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Koffing",
    img: "pokemon/KOFFING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Komala",
    img: "pokemon/KOMALA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Kommoo",
    img: "pokemon/KOMMOO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dragon", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Koraidon",
    img: "pokemon/KORAIDON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fighting", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Krabby",
    img: "pokemon/KRABBY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Kricketot",
    img: "pokemon/KRICKETOT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Kricketune",
    img: "pokemon/KRICKETUNE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Krokorok",
    img: "pokemon/KROKOROK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Krookodile",
    img: "pokemon/KROOKODILE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Kubfu",
    img: "pokemon/KUBFU.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Kyogre",
    img: "pokemon/KYOGRE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Kyurem",
    img: "pokemon/KYUREM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Lairon",
    img: "pokemon/LAIRON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Lampent",
    img: "pokemon/LAMPENT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Landorus",
    img: "pokemon/LANDORUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Lanturn",
    img: "pokemon/LANTURN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Lapras",
    img: "pokemon/LAPRAS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Larvesta",
    img: "pokemon/LARVESTA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Larvitar",
    img: "pokemon/LARVITAR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Latias",
    img: "pokemon/LATIAS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Latios",
    img: "pokemon/LATIOS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Leafeon",
    img: "pokemon/LEAFEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Leavanny",
    img: "pokemon/LEAVANNY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Lechonk",
    img: "pokemon/LECHONK.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Ledian",
    img: "pokemon/LEDIAN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Ledyba",
    img: "pokemon/LEDYBA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Lickilicky",
    img: "pokemon/LICKILICKY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Lickitung",
    img: "pokemon/LICKITUNG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Liepard",
    img: "pokemon/LIEPARD.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Lileep",
    img: "pokemon/LILEEP.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Lilligant",
    img: "pokemon/LILLIGANT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Lillipup",
    img: "pokemon/LILLIPUP.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Linoone",
    img: "pokemon/LINOONE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Litleo",
    img: "pokemon/LITLEO.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Litten",
    img: "pokemon/LITTEN.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Litwick",
    img: "pokemon/LITWICK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Lokix",
    img: "pokemon/LOKIX.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Lombre",
    img: "pokemon/LOMBRE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Lopunny",
    img: "pokemon/LOPUNNY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Lotad",
    img: "pokemon/LOTAD.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Loudred",
    img: "pokemon/LOUDRED.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Lucario",
    img: "pokemon/LUCARIO.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fighting", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Ludicolo",
    img: "pokemon/LUDICOLO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Lugia",
    img: "pokemon/LUGIA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Flying", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Lumineon",
    img: "pokemon/LUMINEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Lunala",
    img: "pokemon/LUNALA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Lunatone",
    img: "pokemon/LUNATONE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Lurantis",
    img: "pokemon/LURANTIS.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Luvdisc",
    img: "pokemon/LUVDISC.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Luxio",
    img: "pokemon/LUXIO.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Luxray",
    img: "pokemon/LUXRAY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Lycanroc",
    img: "pokemon/LYCANROC.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Mabosstiff",
    img: "pokemon/MABOSSTIFF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Machamp",
    img: "pokemon/MACHAMP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Machoke",
    img: "pokemon/MACHOKE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Machop",
    img: "pokemon/MACHOP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Magby",
    img: "pokemon/MAGBY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Magcargo",
    img: "pokemon/MAGCARGO.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Rock", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Magearna",
    img: "pokemon/MAGEARNA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Magikarp",
    img: "pokemon/MAGIKARP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Magmar",
    img: "pokemon/MAGMAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Magmortar",
    img: "pokemon/MAGMORTAR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Magnemite",
    img: "pokemon/MAGNEMITE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Magneton",
    img: "pokemon/MAGNETON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Magnezone",
    img: "pokemon/MAGNEZONE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Makuhita",
    img: "pokemon/MAKUHITA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Malamar",
    img: "pokemon/MALAMAR.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Mamoswine",
    img: "pokemon/MAMOSWINE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Manaphy",
    img: "pokemon/MANAPHY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Mandibuzz",
    img: "pokemon/MANDIBUZZ.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Manectric",
    img: "pokemon/MANECTRIC.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Mankey",
    img: "pokemon/MANKEY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Mantine",
    img: "pokemon/MANTINE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Mantyke",
    img: "pokemon/MANTYKE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Maractus",
    img: "pokemon/MARACTUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Mareanie",
    img: "pokemon/MAREANIE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Mareep",
    img: "pokemon/MAREEP.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Marill",
    img: "pokemon/MARILL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Marowak",
    img: "pokemon/MAROWAK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Marshadow",
    img: "pokemon/MARSHADOW.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fighting", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Marshtomp",
    img: "pokemon/MARSHTOMP.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Maschiff",
    img: "pokemon/MASCHIFF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Masquerain",
    img: "pokemon/MASQUERAIN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Maushold",
    img: "pokemon/MAUSHOLD.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Mawile",
    img: "pokemon/MAWILE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Medicham",
    img: "pokemon/MEDICHAM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Meditite",
    img: "pokemon/MEDITITE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Meganium",
    img: "pokemon/MEGANIUM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Melmetal",
    img: "pokemon/MELMETAL.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Meloetta",
    img: "pokemon/MELOETTA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic", "Normal", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Meltan",
    img: "pokemon/MELTAN.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Meowscarada",
    img: "pokemon/MEOWSCARADA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Meowstic",
    img: "pokemon/MEOWSTIC.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Meowth",
    img: "pokemon/MEOWTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Mesprit",
    img: "pokemon/MESPRIT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Metagross",
    img: "pokemon/METAGROSS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Metang",
    img: "pokemon/METANG.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Metapod",
    img: "pokemon/METAPOD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Mew",
    img: "pokemon/MEW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Mewtwo",
    img: "pokemon/MEWTWO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Mienfoo",
    img: "pokemon/MIENFOO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Mienshao",
    img: "pokemon/MIENSHAO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Mightyena",
    img: "pokemon/MIGHTYENA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Milcery",
    img: "pokemon/MILCERY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Milotic",
    img: "pokemon/MILOTIC.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Miltank",
    img: "pokemon/MILTANK.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Mime Jr.",
    img: "pokemon/MIMEJR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Mimikyu",
    img: "pokemon/MIMIKYU.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ghost", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Minccino",
    img: "pokemon/MINCCINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Minior",
    img: "pokemon/MINIOR.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Rock", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Minun",
    img: "pokemon/MINUN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Miraidon",
    img: "pokemon/MIRAIDON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Misdreavus",
    img: "pokemon/MISDREAVUS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Mismagius",
    img: "pokemon/MISMAGIUS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Moltres",
    img: "pokemon/MOLTRES.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Monferno",
    img: "pokemon/MONFERNO.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Morelull",
    img: "pokemon/MORELULL.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Morgrem",
    img: "pokemon/MORGREM.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Morpeko",
    img: "pokemon/MORPEKO.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Mothim",
    img: "pokemon/MOTHIM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Mr. Mime",
    img: "pokemon/MRMIME.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Mr. Rime",
    img: "pokemon/MRRIME.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Mudbray",
    img: "pokemon/MUDBRAY.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Mudkip",
    img: "pokemon/MUDKIP.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Mudsdale",
    img: "pokemon/MUDSDALE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Muk",
    img: "pokemon/MUK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Munchlax",
    img: "pokemon/MUNCHLAX.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Munkidori",
    img: "pokemon/MUNKIDORI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Munna",
    img: "pokemon/MUNNA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Murkrow",
    img: "pokemon/MURKROW.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Musharna",
    img: "pokemon/MUSHARNA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Nacli",
    img: "pokemon/NACLI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Naclstack",
    img: "pokemon/NACLSTACK.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Naganadel",
    img: "pokemon/NAGANADEL.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Poison", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Natu",
    img: "pokemon/NATU.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Necrozma",
    img: "pokemon/NECROZMA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic", "Steel", "Ghost", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Nickit",
    img: "pokemon/NICKIT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Nidoking",
    img: "pokemon/NIDOKING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Nidoqueen",
    img: "pokemon/NIDOQUEEN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Nidoranfe",
    img: "pokemon/NIDORANfE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Nidoranma",
    img: "pokemon/NIDORANmA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Nidorina",
    img: "pokemon/NIDORINA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Nidorino",
    img: "pokemon/NIDORINO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Nihilego",
    img: "pokemon/NIHILEGO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Rock", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Nincada",
    img: "pokemon/NINCADA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Ninetales",
    img: "pokemon/NINETALES.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Ninjask",
    img: "pokemon/NINJASK.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Noctowl",
    img: "pokemon/NOCTOWL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Noibat",
    img: "pokemon/NOIBAT.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Flying", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Noivern",
    img: "pokemon/NOIVERN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Flying", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Nosepass",
    img: "pokemon/NOSEPASS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Numel",
    img: "pokemon/NUMEL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Nuzleaf",
    img: "pokemon/NUZLEAF.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Nymble",
    img: "pokemon/NYMBLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Obstagoon",
    img: "pokemon/OBSTAGOON.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Octillery",
    img: "pokemon/OCTILLERY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Oddish",
    img: "pokemon/ODDISH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Ogerpon",
    img: "pokemon/OGERPON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Water", "Fire", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Oinkologne",
    img: "pokemon/OINKOLOGNE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Okidogi",
    img: "pokemon/OKIDOGI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Omanyte",
    img: "pokemon/OMANYTE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Omastar",
    img: "pokemon/OMASTAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Onix",
    img: "pokemon/ONIX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Oranguru",
    img: "pokemon/ORANGURU.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Orbeetle",
    img: "pokemon/ORBEETLE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Bug", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Oricorio",
    img: "pokemon/ORICORIO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire", "Flying", "Electric", "Psychic", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Orthworm",
    img: "pokemon/ORTHWORM.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Oshawott",
    img: "pokemon/OSHAWOTT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Pachirisu",
    img: "pokemon/PACHIRISU.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Palafin",
    img: "pokemon/PALAFIN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Palkia",
    img: "pokemon/PALKIA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Palossand",
    img: "pokemon/PALOSSAND.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ghost", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Palpitoad",
    img: "pokemon/PALPITOAD.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Pancham",
    img: "pokemon/PANCHAM.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Pangoro",
    img: "pokemon/PANGORO.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fighting", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Panpour",
    img: "pokemon/PANPOUR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Pansage",
    img: "pokemon/PANSAGE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Pansear",
    img: "pokemon/PANSEAR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Paras",
    img: "pokemon/PARAS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Parasect",
    img: "pokemon/PARASECT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Passimian",
    img: "pokemon/PASSIMIAN.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Patrat",
    img: "pokemon/PATRAT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Pawmi",
    img: "pokemon/PAWMI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Pawmo",
    img: "pokemon/PAWMO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Pawniard",
    img: "pokemon/PAWNIARD.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Pecharunt",
    img: "pokemon/PECHARUNT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Pelipper",
    img: "pokemon/PELIPPER.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Perrserker",
    img: "pokemon/PERRSERKER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Persian",
    img: "pokemon/PERSIAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Petilil",
    img: "pokemon/PETILIL.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Phanpy",
    img: "pokemon/PHANPY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Phantump",
    img: "pokemon/PHANTUMP.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ghost", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Pheromosa",
    img: "pokemon/PHEROMOSA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Phione",
    img: "pokemon/PHIONE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Pichu",
    img: "pokemon/PICHU.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Pidgeot",
    img: "pokemon/PIDGEOT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Pidgeotto",
    img: "pokemon/PIDGEOTTO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Pidgey",
    img: "pokemon/PIDGEY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Pidove",
    img: "pokemon/PIDOVE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Pignite",
    img: "pokemon/PIGNITE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Pikachu",
    img: "pokemon/PIKACHU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Pikipek",
    img: "pokemon/PIKIPEK.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Piloswine",
    img: "pokemon/PILOSWINE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Pincurchin",
    img: "pokemon/PINCURCHIN.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Pineco",
    img: "pokemon/PINECO.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Pinsir",
    img: "pokemon/PINSIR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Piplup",
    img: "pokemon/PIPLUP.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Plusle",
    img: "pokemon/PLUSLE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Poipole",
    img: "pokemon/POIPOLE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Politoed",
    img: "pokemon/POLITOED.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Poliwag",
    img: "pokemon/POLIWAG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Poliwhirl",
    img: "pokemon/POLIWHIRL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Poliwrath",
    img: "pokemon/POLIWRATH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Poltchageist",
    img: "pokemon/POLTCHAGEIST.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Polteageist",
    img: "pokemon/POLTEAGEIST.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Ponyta",
    img: "pokemon/PONYTA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Poochyena",
    img: "pokemon/POOCHYENA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Popplio",
    img: "pokemon/POPPLIO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Porygon",
    img: "pokemon/PORYGON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Porygon2",
    img: "pokemon/PORYGON2.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Porygonz",
    img: "pokemon/PORYGONZ.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Primarina",
    img: "pokemon/PRIMARINA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Primeape",
    img: "pokemon/PRIMEAPE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Prinplup",
    img: "pokemon/PRINPLUP.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Probopass",
    img: "pokemon/PROBOPASS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Rock", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Psyduck",
    img: "pokemon/PSYDUCK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Pumpkaboo",
    img: "pokemon/PUMPKABOO.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ghost", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Pupitar",
    img: "pokemon/PUPITAR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Purrloin",
    img: "pokemon/PURRLOIN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Purugly",
    img: "pokemon/PURUGLY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Pyroar",
    img: "pokemon/PYROAR.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Pyukumuku",
    img: "pokemon/PYUKUMUKU.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Quagsire",
    img: "pokemon/QUAGSIRE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Quaquaval",
    img: "pokemon/QUAQUAVAL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Quaxly",
    img: "pokemon/QUAXLY.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Quaxwell",
    img: "pokemon/QUAXWELL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Quilava",
    img: "pokemon/QUILAVA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Quilladin",
    img: "pokemon/QUILLADIN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Qwilfish",
    img: "pokemon/QWILFISH.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Raboot",
    img: "pokemon/RABOOT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Rabsca",
    img: "pokemon/RABSCA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Raging Bolt",
    img: "pokemon/RAGINGBOLT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Raichu",
    img: "pokemon/RAICHU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Raikou",
    img: "pokemon/RAIKOU.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Ralts",
    img: "pokemon/RALTS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Rampardos",
    img: "pokemon/RAMPARDOS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Rapidash",
    img: "pokemon/RAPIDASH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Raticate",
    img: "pokemon/RATICATE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Rattata",
    img: "pokemon/RATTATA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Rayquaza",
    img: "pokemon/RAYQUAZA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Regice",
    img: "pokemon/REGICE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Regidrago",
    img: "pokemon/REGIDRAGO.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Regieleki",
    img: "pokemon/REGIELEKI.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Regigigas",
    img: "pokemon/REGIGIGAS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Regirock",
    img: "pokemon/REGIROCK.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Registeel",
    img: "pokemon/REGISTEEL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Relicanth",
    img: "pokemon/RELICANTH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Rellor",
    img: "pokemon/RELLOR.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Remoraid",
    img: "pokemon/REMORAID.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Reshiram",
    img: "pokemon/RESHIRAM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Reuniclus",
    img: "pokemon/REUNICLUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Revavroom",
    img: "pokemon/REVAVROOM.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Rhydon",
    img: "pokemon/RHYDON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Rhyhorn",
    img: "pokemon/RHYHORN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Rhyperior",
    img: "pokemon/RHYPERIOR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Ribombee",
    img: "pokemon/RIBOMBEE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Rillaboom",
    img: "pokemon/RILLABOOM.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Riolu",
    img: "pokemon/RIOLU.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Roaringmoon",
    img: "pokemon/ROARINGMOON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Rockruff",
    img: "pokemon/ROCKRUFF.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Roggenrola",
    img: "pokemon/ROGGENROLA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Rolycoly",
    img: "pokemon/ROLYCOLY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Rookidee",
    img: "pokemon/ROOKIDEE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Roselia",
    img: "pokemon/ROSELIA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Roserade",
    img: "pokemon/ROSERADE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Rotom",
    img: "pokemon/ROTOM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Rowlet",
    img: "pokemon/ROWLET.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Rufflet",
    img: "pokemon/RUFFLET.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Runerigus",
    img: "pokemon/RUNERIGUS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ground", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Sableye",
    img: "pokemon/SABLEYE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Salamence",
    img: "pokemon/SALAMENCE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Salandit",
    img: "pokemon/SALANDIT.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Poison", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Salazzle",
    img: "pokemon/SALAZZLE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Poison", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Samurott",
    img: "pokemon/SAMUROTT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Sandaconda",
    img: "pokemon/SANDACONDA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Sandile",
    img: "pokemon/SANDILE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Sandshrew",
    img: "pokemon/SANDSHREW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Sandslash",
    img: "pokemon/SANDSLASH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Sandygast",
    img: "pokemon/SANDYGAST.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ghost", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Sandy Shocks",
    img: "pokemon/SANDYSHOCKS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Sawk",
    img: "pokemon/SAWK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Sawsbuck",
    img: "pokemon/SAWSBUCK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Scatterbug",
    img: "pokemon/SCATTERBUG.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Sceptile",
    img: "pokemon/SCEPTILE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Scizor",
    img: "pokemon/SCIZOR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Scolipede",
    img: "pokemon/SCOLIPEDE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Scorbunny",
    img: "pokemon/SCORBUNNY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Scovillain",
    img: "pokemon/SCOVILLAIN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Scrafty",
    img: "pokemon/SCRAFTY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Scraggy",
    img: "pokemon/SCRAGGY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Scream-Tail",
    img: "pokemon/SCREAMTAIL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Scyther",
    img: "pokemon/SCYTHER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Seadra",
    img: "pokemon/SEADRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Seaking",
    img: "pokemon/SEAKING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Sealeo",
    img: "pokemon/SEALEO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Seedot",
    img: "pokemon/SEEDOT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Seel",
    img: "pokemon/SEEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Seismitoad",
    img: "pokemon/SEISMITOAD.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Sentret",
    img: "pokemon/SENTRET.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Serperior",
    img: "pokemon/SERPERIOR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Servine",
    img: "pokemon/SERVINE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Seviper",
    img: "pokemon/SEVIPER.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Sewaddle",
    img: "pokemon/SEWADDLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Sharpedo",
    img: "pokemon/SHARPEDO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Shaymin",
    img: "pokemon/SHAYMIN.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Shedinja",
    img: "pokemon/SHEDINJA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Shelgon",
    img: "pokemon/SHELGON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Shellder",
    img: "pokemon/SHELLDER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Shellos",
    img: "pokemon/SHELLOS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Shelmet",
    img: "pokemon/SHELMET.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Shieldon",
    img: "pokemon/SHIELDON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Rock", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Shiftry",
    img: "pokemon/SHIFTRY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Shiinotic",
    img: "pokemon/SHIINOTIC.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Shinx",
    img: "pokemon/SHINX.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Shroodle",
    img: "pokemon/SHROODLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Shroomish",
    img: "pokemon/SHROOMISH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Shuckle",
    img: "pokemon/SHUCKLE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Rock", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Shuppet",
    img: "pokemon/SHUPPET.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Sigilyph",
    img: "pokemon/SIGILYPH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Silcoon",
    img: "pokemon/SILCOON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Silicobra",
    img: "pokemon/SILICOBRA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Silvally",
    img: "pokemon/SILVALLY.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Simipour",
    img: "pokemon/SIMIPOUR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Simisage",
    img: "pokemon/SIMISAGE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Simisear",
    img: "pokemon/SIMISEAR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Sinistcha",
    img: "pokemon/SINISTCHA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Sinistea",
    img: "pokemon/SINISTEA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Sirfetchd",
    img: "pokemon/SIRFETCHD.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Sizzlipede",
    img: "pokemon/SIZZLIPEDE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fire", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Skarmory",
    img: "pokemon/SKARMORY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Steel", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Skeledirge",
    img: "pokemon/SKELEDIRGE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Skiddo",
    img: "pokemon/SKIDDO.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Skiploom",
    img: "pokemon/SKIPLOOM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Skitty",
    img: "pokemon/SKITTY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Skorupi",
    img: "pokemon/SKORUPI.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Skrelp",
    img: "pokemon/SKRELP.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Poison", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Skuntank",
    img: "pokemon/SKUNTANK.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Skwovet",
    img: "pokemon/SKWOVET.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Slaking",
    img: "pokemon/SLAKING.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Slakoth",
    img: "pokemon/SLAKOTH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Sliggoo",
    img: "pokemon/SLIGGOO.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dragon", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Slither-Wing",
    img: "pokemon/SLITHERWING.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Slowbro",
    img: "pokemon/SLOWBRO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Slowking",
    img: "pokemon/SLOWKING.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Slowpoke",
    img: "pokemon/SLOWPOKE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Slugma",
    img: "pokemon/SLUGMA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Slurpuff",
    img: "pokemon/SLURPUFF.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Smeargle",
    img: "pokemon/SMEARGLE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Smoliv",
    img: "pokemon/SMOLIV.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Smoochum",
    img: "pokemon/SMOOCHUM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ice", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Sneasel",
    img: "pokemon/SNEASEL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Snivy",
    img: "pokemon/SNIVY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Snom",
    img: "pokemon/SNOM.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Snorlax",
    img: "pokemon/SNORLAX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Snorunt",
    img: "pokemon/SNORUNT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Snover",
    img: "pokemon/SNOVER.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Snubbull",
    img: "pokemon/SNUBBULL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Sobble",
    img: "pokemon/SOBBLE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Solgaleo",
    img: "pokemon/SOLGALEO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Solosis",
    img: "pokemon/SOLOSIS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Solrock",
    img: "pokemon/SOLROCK.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Spearow",
    img: "pokemon/SPEAROW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Spectrier",
    img: "pokemon/SPECTRIER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Spewpa",
    img: "pokemon/SPEWPA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Spheal",
    img: "pokemon/SPHEAL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Spidops",
    img: "pokemon/SPIDOPS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Spinarak",
    img: "pokemon/SPINARAK.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Spinda",
    img: "pokemon/SPINDA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Spiritomb",
    img: "pokemon/SPIRITOMB.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Spoink",
    img: "pokemon/SPOINK.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Sprigatito",
    img: "pokemon/SPRIGATITO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Spritzee",
    img: "pokemon/SPRITZEE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Squawkabilly",
    img: "pokemon/SQUAWKABILLY.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Squirtle",
    img: "pokemon/SQUIRTLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Stakataka",
    img: "pokemon/STAKATAKA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Rock", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Stantler",
    img: "pokemon/STANTLER.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Staraptor",
    img: "pokemon/STARAPTOR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Staravia",
    img: "pokemon/STARAVIA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Starly",
    img: "pokemon/STARLY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Starmie",
    img: "pokemon/STARMIE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Staryu",
    img: "pokemon/STARYU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Steelix",
    img: "pokemon/STEELIX.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Steel", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Steenee",
    img: "pokemon/STEENEE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Stonjourner",
    img: "pokemon/STONJOURNER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Stoutland",
    img: "pokemon/STOUTLAND.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Stufful",
    img: "pokemon/STUFFUL.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Stunfisk",
    img: "pokemon/STUNFISK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Stunky",
    img: "pokemon/STUNKY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Sudowoodo",
    img: "pokemon/SUDOWOODO.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Suicune",
    img: "pokemon/SUICUNE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Sunflora",
    img: "pokemon/SUNFLORA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Sunkern",
    img: "pokemon/SUNKERN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Surskit",
    img: "pokemon/SURSKIT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Swablu",
    img: "pokemon/SWABLU.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Swadloon",
    img: "pokemon/SWADLOON.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Swalot",
    img: "pokemon/SWALOT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Swampert",
    img: "pokemon/SWAMPERT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Swanna",
    img: "pokemon/SWANNA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Swellow",
    img: "pokemon/SWELLOW.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Swinub",
    img: "pokemon/SWINUB.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Swirlix",
    img: "pokemon/SWIRLIX.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Swoobat",
    img: "pokemon/SWOOBAT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Sylveon",
    img: "pokemon/SYLVEON.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Tadbulb",
    img: "pokemon/TADBULB.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Taillow",
    img: "pokemon/TAILLOW.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Talonflame",
    img: "pokemon/TALONFLAME.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Tandemaus",
    img: "pokemon/TANDEMAUS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Tangela",
    img: "pokemon/TANGELA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Tangrowth",
    img: "pokemon/TANGROWTH.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Tapu Bulu",
    img: "pokemon/TAPUBULU.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Tapu Fini",
    img: "pokemon/TAPUFINI.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Tapu Koko",
    img: "pokemon/TAPUKOKO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Electric", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Tapu Lele",
    img: "pokemon/TAPULELE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Tarountula",
    img: "pokemon/TAROUNTULA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Tatsugiri",
    img: "pokemon/TATSUGIRI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Tauros",
    img: "pokemon/TAUROS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Teddiursa",
    img: "pokemon/TEDDIURSA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Tentacool",
    img: "pokemon/TENTACOOL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Tentacruel",
    img: "pokemon/TENTACRUEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Tepig",
    img: "pokemon/TEPIG.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Terapagos",
    img: "pokemon/TERAPAGOS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Terrakion",
    img: "pokemon/TERRAKION.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Thievul",
    img: "pokemon/THIEVUL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Throh",
    img: "pokemon/THROH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Thundurus",
    img: "pokemon/THUNDURUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Thwackey",
    img: "pokemon/THWACKEY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Timburr",
    img: "pokemon/TIMBURR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Ting Lu",
    img: "pokemon/TINGLU.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Tinkatink",
    img: "pokemon/TINKATINK.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Tinkaton",
    img: "pokemon/TINKATON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Tinkatuff",
    img: "pokemon/TINKATUFF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Tirtouga",
    img: "pokemon/TIRTOUGA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Toedscool",
    img: "pokemon/TOEDSCOOL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ground", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Toedscruel",
    img: "pokemon/TOEDSCRUEL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ground", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Togedemaru",
    img: "pokemon/TOGEDEMARU.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Electric", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Togekiss",
    img: "pokemon/TOGEKISS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Flying", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Togepi",
    img: "pokemon/TOGEPI.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Togetic",
    img: "pokemon/TOGETIC.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fairy", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Torchic",
    img: "pokemon/TORCHIC.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Torkoal",
    img: "pokemon/TORKOAL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Tornadus",
    img: "pokemon/TORNADUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Torracat",
    img: "pokemon/TORRACAT.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Torterra",
    img: "pokemon/TORTERRA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Totodile",
    img: "pokemon/TOTODILE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Toucannon",
    img: "pokemon/TOUCANNON.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Toxapex",
    img: "pokemon/TOXAPEX.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Toxel",
    img: "pokemon/TOXEL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Toxicroak",
    img: "pokemon/TOXICROAK.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Toxtricity",
    img: "pokemon/TOXTRICITY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Tranquill",
    img: "pokemon/TRANQUILL.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Trapinch",
    img: "pokemon/TRAPINCH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Treecko",
    img: "pokemon/TREECKO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Trevenant",
    img: "pokemon/TREVENANT.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass", "Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Tropius",
    img: "pokemon/TROPIUS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Trubbish",
    img: "pokemon/TRUBBISH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Trumbeak",
    img: "pokemon/TRUMBEAK.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Tsareena",
    img: "pokemon/TSAREENA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Turtonator",
    img: "pokemon/TURTONATOR.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Turtwig",
    img: "pokemon/TURTWIG.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Tympole",
    img: "pokemon/TYMPOLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Tynamo",
    img: "pokemon/TYNAMO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Typenull",
    img: "pokemon/TYPENULL.png",
      FORM: ["Base"],
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Typhlosion",
    img: "pokemon/TYPHLOSION.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Tyranitar",
    img: "pokemon/TYRANITAR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Rock"],
      FORM: ["Base"],
    }
  },
{
    name: "Tyrantrum",
    img: "pokemon/TYRANTRUM.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Tyrogue",
    img: "pokemon/TYROGUE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Tyrunt",
    img: "pokemon/TYRUNT.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Umbreon",
    img: "pokemon/UMBREON.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Unfezant",
    img: "pokemon/UNFEZANT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Flying", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Unown",
    img: "pokemon/UNOWN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Ursaluna",
    img: "pokemon/URSALUNA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ground", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Ursaring",
    img: "pokemon/URSARING.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Urshifu",
    img: "pokemon/URSHIFU.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Fighting", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Uxie",
    img: "pokemon/UXIE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Vanillish",
    img: "pokemon/VANILLISH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Vanillite",
    img: "pokemon/VANILLITE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Vanilluxe",
    img: "pokemon/VANILLUXE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Vaporeon",
    img: "pokemon/VAPOREON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Varoom",
    img: "pokemon/VAROOM.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Veluza",
    img: "pokemon/VELUZA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Venipede",
    img: "pokemon/VENIPEDE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Venomoth",
    img: "pokemon/VENOMOTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Venonat",
    img: "pokemon/VENONAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Venusaur",
    img: "pokemon/VENUSAUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Vespiquen",
    img: "pokemon/VESPIQUEN.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Vibrava",
    img: "pokemon/VIBRAVA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Victini",
    img: "pokemon/VICTINI.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Victreebel",
    img: "pokemon/VICTREEBEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Vigoroth",
    img: "pokemon/VIGOROTH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Vikavolt",
    img: "pokemon/VIKAVOLT.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Vileplume",
    img: "pokemon/VILEPLUME.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Virizion",
    img: "pokemon/VIRIZION.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Fighting"],
      FORM: ["Base"],
    }
  },
{
    name: "Vivillon",
    img: "pokemon/VIVILLON.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Flying", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Volbeat",
    img: "pokemon/VOLBEAT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Volcanion",
    img: "pokemon/VOLCANION.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Volcarona",
    img: "pokemon/VOLCARONA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Voltorb",
    img: "pokemon/VOLTORB.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Vullaby",
    img: "pokemon/VULLABY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Vulpix",
    img: "pokemon/VULPIX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
      FORM: ["Base"],
    }
  },
{
    name: "Wailmer",
    img: "pokemon/WAILMER.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Wailord",
    img: "pokemon/WAILORD.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Walkingwake",
    img: "pokemon/WALKINGWAKE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Walrein",
    img: "pokemon/WALREIN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ice"],
      FORM: ["Base"],
    }
  },
{
    name: "Wartortle",
    img: "pokemon/WARTORTLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Watchog",
    img: "pokemon/WATCHOG.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Wattrel",
    img: "pokemon/WATTREL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Weavile",
    img: "pokemon/WEAVILE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Weedle",
    img: "pokemon/WEEDLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Weepinbell",
    img: "pokemon/WEEPINBELL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Weezing",
    img: "pokemon/WEEZING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Whimsicott",
    img: "pokemon/WHIMSICOTT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Whirlipede",
    img: "pokemon/WHIRLIPEDE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Base"],
    }
  },
{
    name: "Whiscash",
    img: "pokemon/WHISCASH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Whismur",
    img: "pokemon/WHISMUR.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Wigglytuff",
    img: "pokemon/WIGGLYTUFF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fairy", "Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Wiglett",
    img: "pokemon/WIGLETT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Wimpod",
    img: "pokemon/WIMPOD.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Wingull",
    img: "pokemon/WINGULL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Wishiwashi",
    img: "pokemon/WISHIWASHI.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Wobbuffet",
    img: "pokemon/WOBBUFFET.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Wochien",
    img: "pokemon/WOCHIEN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Woobat",
    img: "pokemon/WOOBAT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Wooloo",
    img: "pokemon/WOOLOO.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Wooper",
    img: "pokemon/WOOPER.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Ground"],
      FORM: ["Base"],
    }
  },
{
    name: "Wormadam",
    img: "pokemon/WORMADAM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass", "Ground", "Steel", "Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Wugtrio",
    img: "pokemon/WUGTRIO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
      FORM: ["Base"],
    }
  },
{
    name: "Wurmple",
    img: "pokemon/WURMPLE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug"],
      FORM: ["Base"],
    }
  },
{
    name: "Wynaut",
    img: "pokemon/WYNAUT.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Wyrdeer",
    img: "pokemon/WYRDEER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal", "Psychic"],
      FORM: ["Base"],
    }
  },
{
    name: "Xatu",
    img: "pokemon/XATU.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Xerneas",
    img: "pokemon/XERNEAS.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Base"],
    }
  },
{
    name: "Xurkitree",
    img: "pokemon/XURKITREE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Yamask",
    img: "pokemon/YAMASK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ghost"],
      FORM: ["Base"],
    }
  },
{
    name: "Yamper",
    img: "pokemon/YAMPER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Yanma",
    img: "pokemon/YANMA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Yanmega",
    img: "pokemon/YANMEGA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Yungoos",
    img: "pokemon/YUNGOOS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Yveltal",
    img: "pokemon/YVELTAL.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dark", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Zacian",
    img: "pokemon/ZACIAN.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fairy", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Zamazenta",
    img: "pokemon/ZAMAZENTA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting", "Steel"],
      FORM: ["Base"],
    }
  },
{
    name: "Zangoose",
    img: "pokemon/ZANGOOSE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Zapdos",
    img: "pokemon/ZAPDOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Zarude",
    img: "pokemon/ZARUDE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Grass"],
      FORM: ["Base"],
    }
  },
{
    name: "Zebstrika",
    img: "pokemon/ZEBSTRIKA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Zekrom",
    img: "pokemon/ZEKROM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Zeraora",
    img: "pokemon/ZERAORA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Electric"],
      FORM: ["Base"],
    }
  },
{
    name: "Zigzagoon",
    img: "pokemon/ZIGZAGOON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
      FORM: ["Base"],
    }
  },
{
    name: "Zoroark",
    img: "pokemon/ZOROARK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Zorua",
    img: "pokemon/ZORUA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark"],
      FORM: ["Base"],
    }
  },
{
    name: "Zubat",
    img: "pokemon/ZUBAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Flying"],
      FORM: ["Base"],
    }
  },
{
    name: "Zweilous",
    img: "pokemon/ZWEILOUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Zygarde",
    img: "pokemon/ZYGARDE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Dragon"],
      FORM: ["Base"],
    }
  },
{
    name: "Mega Venusaur",
    img: "pokemon/VENUSAUR_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Mega"],
    }
  },
{
    name: "Mega Charizard X",
    img: "pokemon/CHARIZARD_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire", "Dragon"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Charizard Y",
    img: "pokemon/CHARIZARD_2.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Blastoise",
    img: "pokemon/BLASTOISE_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Beedrill",
    img: "pokemon/BEEDRILL_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Pidgeot",
    img: "pokemon/PIDGEOT_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Raichu X",
    img: "pokemon/RAICHU_2.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Raichu Y",
    img: "pokemon/RAICHU_3.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Clefable",
    img: "pokemon/CLEFABLE_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fairy", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Alakazam",
    img: "pokemon/ALAKAZAM_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Victreebel",
    img: "pokemon/VICTREEBEL_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Slowbro",
    img: "pokemon/SLOWBRO_2.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Gengar",
    img: "pokemon/GENGAR_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Ghost"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Kangaskhan",
    img: "pokemon/KANGASKHAN_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Starmie",
    img: "pokemon/STARMIE_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Pinsir",
    img: "pokemon/PINSIR_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Gyarados",
    img: "pokemon/GYARADOS_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dark", "Water"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Aerodactyl",
    img: "pokemon/AERODACTYL_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Rock"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Dragonite",
    img: "pokemon/DRAGONITE_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dragon", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Mewtwo X",
    img: "pokemon/MEWTWO_1.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Mewtwo Y",
    img: "pokemon/MEWTWO_2.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Meganium",
    img: "pokemon/MEGANIUM_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Feraligatr",
    img: "pokemon/FERALIGATR_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dragon", "Water"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Ampharos",
    img: "pokemon/AMPHAROS_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric", "Dragon"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Steelix",
    img: "pokemon/STEELIX_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Steel", "Ground"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Scizor",
    img: "pokemon/SCIZOR_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Steel"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Heracross",
    img: "pokemon/HERACROSS_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fighting", "Bug"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Skarmory",
    img: "pokemon/SKARMORY_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Steel", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Houndoom",
    img: "pokemon/HOUNDOOM_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Fire"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Tyranitar",
    img: "pokemon/TYRANITAR_1.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Rock", "Dark"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Sceptile",
    img: "pokemon/SCETIPLE_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Dragon"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Blaziken",
    img: "pokemon/BLAZIKEN_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Swampert",
    img: "pokemon/SWAMPERT_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ground"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Gardevoir",
    img: "pokemon/GARDEVOIR_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Sableye",
    img: "pokemon/SABLEYE_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark", "Ghost"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Mawile",
    img: "pokemon/MAWILE_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Aggron",
    img: "pokemon/AGGRON_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Rock"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Medicham",
    img: "pokemon/MEDICHAM_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fighting", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Manectric",
    img: "pokemon/MANECTRIC_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Sharpedo",
    img: "pokemon/SHARPEDO_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Dark"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Camerupt",
    img: "pokemon/CAMERUPT_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Ground"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Altaria",
    img: "pokemon/ALTARIA_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Banette",
    img: "pokemon/BANETTE_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Chimecho",
    img: "pokemon/CHIMECHO_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Steel"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Absol",
    img: "pokemon/ABSOL_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Absol Z",
    img: "pokemon/ABSOL_2.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost", "Dark"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Glalie",
    img: "pokemon/GLALIE_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ice"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Salamence",
    img: "pokemon/SALAMENCE_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Metagross",
    img: "pokemon/METAGROSS_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Latias",
    img: "pokemon/LATIAS_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Latios",
    img: "pokemon/LATIOS_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Rayquaza",
    img: "pokemon/RAYQUAZA_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Staraptor",
    img: "pokemon/STARAPTOR_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Lopunny",
    img: "pokemon/LOPUNNY_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Garchomp",
    img: "pokemon/GARCHOMP_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Ground"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Garchomp Z",
    img: "pokemon/GARCHOMP_2.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Lucario",
    img: "pokemon/LUCARIO_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Steel", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Lucario Z",
    img: "pokemon/LUCARIO_2.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Steel", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Abomasnow",
    img: "pokemon/ABOMASNOW_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass", "Ice"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Gallade",
    img: "pokemon/GALLADE_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Froslass",
    img: "pokemon/FROSASS_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Ghost"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Heatran",
    img: "pokemon/HEATRAN_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire", "Steel"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Darkrai",
    img: "pokemon/DARKRAI_1.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dark"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Emboar",
    img: "pokemon/EMBOAR_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Excadrill",
    img: "pokemon/EXCADRILL_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Steel"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Audino",
    img: "pokemon/AUDINO_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal", "Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Scolipede",
    img: "pokemon/SCOLIPEDE_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Poison"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Scrafty",
    img: "pokemon/SCRAFTY_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting", "Dark"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Eelektross",
    img: "pokemon/EELEKTROSS_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Chandelure",
    img: "pokemon/CHANDELURE_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Ghost"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Golurk",
    img: "pokemon/GOLURK_1.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Ghost"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Chesnaught",
    img: "pokemon/CHESNAUGHT_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Delphox",
    img: "pokemon/DELPHOX_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Greninja",
    img: "pokemon/GRENINJA_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Dark"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Pyroar",
    img: "pokemon/PYROAR_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Normal"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Floette Eternal Flower",
    img: "pokemon/FLOETTE_6.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Meowstic",
    img: "pokemon/MEOWSTIC_2.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Malamar",
    img: "pokemon/MALAMAR_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dark", "Psychic"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Barbacle",
    img: "pokemon/BARBACLE_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fighting", "Rock"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Dragalge",
    img: "pokemon/DRAGALGE_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Poison", "Dragon"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Hawlucha",
    img: "pokemon/HAWLUCHA_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fighting", "Flying"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Zygarde",
    img: "pokemon/ZYGARDE_3.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dragon", "Ground"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Diancie",
    img: "pokemon/DIANCIE_1.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Crabominable",
    img: "pokemon/CRABOMINABLE_1.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ice", "Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Golisopod",
    img: "pokemon/GOLISOPOD_1.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel", "Bug"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Drampa",
    img: "pokemon/DRAMPA_1.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dragon", "Normal"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Magearna",
    img: "pokemon/MAGEARNA_1.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel", "Fairy"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Zeraora",
    img: "pokemon/ZERAORA_1.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Electric"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Falinks",
    img: "pokemon/FALINKS_1.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Scovillain",
    img: "pokemon/SCOVILLAIN_1.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass", "Fire"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Glimmora",
    img: "pokemon/GLIMMORA_1.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Rock", "Poison"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Tatsugiri",
    img: "pokemon/TATSUGIRI_3.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water", "Dragon"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Baxcalibur",
    img: "pokemon/BAXCALIBUR_1.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Ice"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Primal Kyogre ",
    img: "pokemon/KYOGRE_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
      FORM: ["Mega"],
    }
  },
  {
    name: "Mega Groudon",
    img: "pokemon/GROUDON_1.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Fire"],
      FORM: ["Mega"],
    }
  },
];