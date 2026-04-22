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
        TYPE: ["Bird", "Normal"],
    }
  },
{
    name: "Abomasnow",
    img: "pokemon/ABOMASNOW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Grass"],
    }
  },
{
    name: "Abra",
    img: "pokemon/ABRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Absol",
    img: "pokemon/ABSOL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark"],
    }
  },
{
    name: "Accelgor",
    img: "pokemon/ACCELGOR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Aegislash",
    img: "pokemon/AEGISLASH.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Steel", "Ghost"],
    }
  },
{
    name: "Aerodactyl",
    img: "pokemon/AERODACTYL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Flying"],
    }
  },
{
    name: "Aggron",
    img: "pokemon/AGGRON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Rock"],
    }
  },
{
    name: "Aipom",
    img: "pokemon/AIPOM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Alakazam",
    img: "pokemon/ALAKAZAM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Alcremie",
    img: "pokemon/ALCREMIE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Alomomola",
    img: "pokemon/ALOMOMOLA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
    }
  },
{
    name: "Altaria",
    img: "pokemon/ALTARIA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon", "Flying"],
    }
  },
{
    name: "Amaura",
    img: "pokemon/AMAURA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ice", "Rock"],
    }
  },
{
    name: "Ambipom",
    img: "pokemon/AMBIPOM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Amoonguss",
    img: "pokemon/AMOONGUSS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Poison"],
    }
  },
{
    name: "Ampharos",
    img: "pokemon/AMPHAROS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Annihilape",
    img: "pokemon/ANNIHILAPE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fighting", "Ghost"],
    }
  },
{
    name: "Anorith",
    img: "pokemon/ANORITH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Bug"],
    }
  },
{
    name: "Appletun",
    img: "pokemon/APPLETUN.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass", "Dragon"],
    }
  },
{
    name: "Applin",
    img: "pokemon/APPLIN.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass", "Dragon"],
    }
  },
{
    name: "Araquanid",
    img: "pokemon/ARAQUANID.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Arbok",
    img: "pokemon/ARBOK.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Water"],
    }
  },
{
    name: "Arboliva",
    img: "pokemon/ARBOLIVA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Normal"],
    }
  },
{
    name: "Arcanine",
    img: "pokemon/ARCANINE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Arceus",
    img: "pokemon/ARCEUS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Archaludon",
    img: "pokemon/ARCHALUDON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Dragon"],
    }
  },
{
    name: "Archen",
    img: "pokemon/ARCHEN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Flying"],
    }
  },
{
    name: "Archeops",
    img: "pokemon/ARCHEOPS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Flying"],
    }
  },
{
    name: "Arctibax",
    img: "pokemon/ARCTIBAX.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Ice"],
    }
  },
{
    name: "Arctovish",
    img: "pokemon/ARCTOVISH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Arctozolt",
    img: "pokemon/ARCTOZOLT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Ice"],
    }
  },
{
    name: "Ariados",
    img: "pokemon/ARIADOS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Poison"],
    }
  },
{
    name: "Armaldo",
    img: "pokemon/ARMALDO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Bug"],
    }
  },
{
    name: "Armarouge",
    img: "pokemon/ARMAROUGE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Psychic"],
    }
  },
{
    name: "Aromatisse",
    img: "pokemon/AROMATISSE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Aron",
    img: "pokemon/ARON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Rock"],
    }
  },
{
    name: "Arrokuda",
    img: "pokemon/ARROKUDA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
    }
  },
{
    name: "Articuno",
    img: "pokemon/ARTICUNO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ice", "Flying"],
    }
  },
{
    name: "Audino",
    img: "pokemon/AUDINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Aurorus",
    img: "pokemon/AURORUS.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Ice"],
    }
  },
{
    name: "Avalugg",
    img: "pokemon/AVALUGG.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Axew",
    img: "pokemon/AXEW.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Azelf",
    img: "pokemon/AZELF.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Azumarill",
    img: "pokemon/AZUMARILL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Fairy"],
    }
  },
{
    name: "Azurill",
    img: "pokemon/AZURILL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal", "Fairy"],
    }
  },
{
    name: "Bagon",
    img: "pokemon/BAGON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Baltoy",
    img: "pokemon/BALTOY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Psychic"],
    }
  },
{
    name: "Banette",
    img: "pokemon/BANETTE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Barbaracle",
    img: "pokemon/BARBARACLE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Rock"],
    }
  },
{
    name: "Barboach",
    img: "pokemon/BARBOACH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ground"],
    }
  },
{
    name: "Barraskewda",
    img: "pokemon/BARRASKEWDA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
    }
  },
{
    name: "Basculin",
    img: "pokemon/BASCULIN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
    }
  },
{
    name: "Bastiodon",
    img: "pokemon/BASTIODON.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Steel"],
    }
  },
{
    name: "Baxcalibur",
    img: "pokemon/BAXCALIBUR.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Ice"],
    }
  },
{
    name: "Bayleef",
    img: "pokemon/BAYLEEF.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Beartic",
    img: "pokemon/BEARTIC.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Beautifly",
    img: "pokemon/BEAUTIFLY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Beedrill",
    img: "pokemon/BEEDRILL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug", "Poison"],
    }
  },
{
    name: "Beheeyem",
    img: "pokemon/BEHEEYEM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Beldum",
    img: "pokemon/BELDUM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Psychic"],
    }
  },
{
    name: "Bellibolt",
    img: "pokemon/BELLIBOLT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Bellossom",
    img: "pokemon/BELLOSSOM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Bellsprout",
    img: "pokemon/BELLSPROUT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
    }
  },
{
    name: "Bergmite",
    img: "pokemon/BERGMITE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Bewear",
    img: "pokemon/BEWEAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Bibarel",
    img: "pokemon/BIBAREL.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal", "Water"],
    }
  },
{
    name: "Bidoof",
    img: "pokemon/BIDOOF.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Binacle",
    img: "pokemon/BINACLE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Water"],
    }
  },
{
    name: "Bisharp",
    img: "pokemon/BISHARP.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel", "Dark"],
    }
  },
{
    name: "Blacephalon",
    img: "pokemon/BLACEPHALON.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire", "Ghost"],
    }
  },
{
    name: "Blastoise",
    img: "pokemon/BLASTOISE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
    }
  },
{
    name: "Blaziken",
    img: "pokemon/BLAZIKEN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Fighting"],
    }
  },
{
    name: "Blipbug",
    img: "pokemon/BLIPBUG.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Blissey",
    img: "pokemon/BLISSEY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Blitzle",
    img: "pokemon/BLITZLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Boldore",
    img: "pokemon/BOLDORE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock"],
    }
  },
{
    name: "Boltund",
    img: "pokemon/BOLTUND.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Bombirdier",
    img: "pokemon/BOMBIRDIER.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Flying", "Dark"],
    }
  },
{
    name: "Bonsly",
    img: "pokemon/BONSLY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Rock"],
    }
  },
{
    name: "Bouffalant",
    img: "pokemon/BOUFFALANT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Bounsweet",
    img: "pokemon/BOUNSWEET.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Braixen",
    img: "pokemon/BRAIXEN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Brambleghast",
    img: "pokemon/BRAMBLEGHAST.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Ghost"],
    }
  },
{
    name: "Bramblin",
    img: "pokemon/BRAMBLIN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Ghost"],
    }
  },
{
    name: "Braviary",
    img: "pokemon/BRAVIARY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal", "Flying"],
    }
  },
{
    name: "Breloom",
    img: "pokemon/BRELOOM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Fighting"],
    }
  },
{
    name: "Brionne",
    img: "pokemon/BRIONNE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water"],
    }
  },
{
    name: "Bronzong",
    img: "pokemon/BRONZONG.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Steel", "Psychic"],
    }
  },
{
    name: "Bronzor",
    img: "pokemon/BRONZOR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Steel", "Psychic"],
    }
  },
{
    name: "Brutebonnet",
    img: "pokemon/BRUTEBONNET.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dark"],
    }
  },
{
    name: "Bruxish",
    img: "pokemon/BRUXISH.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Psychic"],
    }
  },
{
    name: "Budew",
    img: "pokemon/BUDEW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass", "Poison"],
    }
  },
{
    name: "Buizel",
    img: "pokemon/BUIZEL.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
    }
  },
{
    name: "Bulbasaur",
    img: "pokemon/BULBASAUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
    }
  },
{
    name: "Buneary",
    img: "pokemon/BUNEARY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Bunnelby",
    img: "pokemon/BUNNELBY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Burmy",
    img: "pokemon/BURMY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Butterfree",
    img: "pokemon/BUTTERFREE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Buzzwole",
    img: "pokemon/BUZZWOLE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Fighting"],
    }
  },
{
    name: "Cacnea",
    img: "pokemon/CACNEA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Cacturne",
    img: "pokemon/CACTURNE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Dark"],
    }
  },
{
    name: "Calyrex",
    img: "pokemon/CALYREX.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic", "Grass"],
    }
  },
{
    name: "Camerupt",
    img: "pokemon/CAMERUPT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Ground"],
    }
  },
{
    name: "Capsakid",
    img: "pokemon/CAPSAKID.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Fire"],
    }
  },
{
    name: "Carbink",
    img: "pokemon/CARBINK.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Fairy"],
    }
  },
{
    name: "Carkol",
    img: "pokemon/CARKOL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Rock", "Fire"],
    }
  },
{
    name: "Carnivine",
    img: "pokemon/CARNIVINE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Carracosta",
    img: "pokemon/CARRACOSTA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Water"],
    }
  },
{
    name: "Carvanha",
    img: "pokemon/CARVANHA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Dark"],
    }
  },
{
    name: "Cascoon",
    img: "pokemon/CASCOON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Castform",
    img: "pokemon/CASTFORM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal", "Fire", "Water", "Ice"],
    }
  },
{
    name: "Caterpie",
    img: "pokemon/CATERPIE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Celebi",
    img: "pokemon/CELEBI.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Psychic"],
    }
  },
{
    name: "Celesteela",
    img: "pokemon/CELESTEELA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel", "Flying"],
    }
  },
{
    name: "Centiskorch",
    img: "pokemon/CENTISKORCH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fire", "Bug"],
    }
  },
{
    name: "Ceruledge",
    img: "pokemon/CERULEDGE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Ghost"],
    }
  },
{
    name: "Cetitan",
    img: "pokemon/CETITAN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Cetoddle",
    img: "pokemon/CETODDLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Chandelure",
    img: "pokemon/CHANDELURE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ghost", "Fire"],
    }
  },
{
    name: "Chansey",
    img: "pokemon/CHANSEY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Charcadet",
    img: "pokemon/CHARCADET.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Charizard",
    img: "pokemon/CHARIZARD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire", "Flying"],
    }
  },
{
    name: "Charjabug",
    img: "pokemon/CHARJABUG.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Electric"],
    }
  },
{
    name: "Charmander",
    img: "pokemon/CHARMANDER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Charmeleon",
    img: "pokemon/CHARMELEON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Chatot",
    img: "pokemon/CHATOT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Flying", "Normal"],
    }
  },
{
    name: "Cherrim",
    img: "pokemon/CHERRIM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Cherubi",
    img: "pokemon/CHERUBI.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Chesnaught",
    img: "pokemon/CHESNAUGHT.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass", "Fighting"],
    }
  },
{
    name: "Chespin",
    img: "pokemon/CHESPIN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Chewtle",
    img: "pokemon/CHEWTLE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
    }
  },
{
    name: "Chien-Pao",
    img: "pokemon/CHIENPAO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Ice"],
    }
  },
{
    name: "Chikorita",
    img: "pokemon/CHIKORITA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Chimchar",
    img: "pokemon/CHIMCHAR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Chimecho",
    img: "pokemon/CHIMECHO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Chinchou",
    img: "pokemon/CHINCHOU.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Electric"],
    }
  },
{
    name: "Chingling",
    img: "pokemon/CHINGLING.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Chi-Yu",
    img: "pokemon/CHIYU.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Fire"],
    }
  },
{
    name: "Cinccino",
    img: "pokemon/CINCCINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Cinderace",
    img: "pokemon/CINDERACE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Clamperl",
    img: "pokemon/CLAMPERL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Clauncher",
    img: "pokemon/CLAUNCHER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
    }
  },
{
    name: "Clawitzer",
    img: "pokemon/CLAWITZER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
    }
  },
{
    name: "Claydol",
    img: "pokemon/CLAYDOL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Ground"],
    }
  },
{
    name: "Clefable",
    img: "pokemon/CLEFABLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Clefairy",
    img: "pokemon/CLEFAIRY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Cleffa",
    img: "pokemon/CLEFFA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Clobbopus",
    img: "pokemon/CLOBBOPUS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Clodsire",
    img: "pokemon/CLODSIRE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Ground"],
    }
  },
{
    name: "Cloyster",
    img: "pokemon/CLOYSTER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Ice"],
    }
  },
{
    name: "Coalossal",
    img: "pokemon/COALOSSAL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Cobalion",
    img: "pokemon/COBALION.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel", "Fighting"],
    }
  },
{
    name: "Cofagrigus",
    img: "pokemon/COFAGRIGUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Combee",
    img: "pokemon/COMBEE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Combusken",
    img: "pokemon/COMBUSKEN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fire", "Fighting"],
    }
  },
{
    name: "Comfey",
    img: "pokemon/COMFEY.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Conkeldurr",
    img: "pokemon/CONKELDURR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Copperajah",
    img: "pokemon/COPPERAJAH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Steel"],
    }
  },
{
    name: "Corphish",
    img: "pokemon/CORPHISH.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Corsola",
    img: "pokemon/CORSOLA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Rock"],
    }
  },
{
    name: "Corviknight",
    img: "pokemon/CORVIKNIGHT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Flying", "Steel"],
    }
  },
{
    name: "Corvisquire",
    img: "pokemon/CORVISQUIRE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Flying"],
    }
  },
{
    name: "Cosmoem",
    img: "pokemon/COSMOEM.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Cosmog",
    img: "pokemon/COSMOG.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Cottonee",
    img: "pokemon/COTTONEE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Fairy"],
    }
  },
{
    name: "Crabominable",
    img: "pokemon/CRABOMINABLE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fighting", "Ice"],
    }
  },
{
    name: "Crabrawler",
    img: "pokemon/CRABRAWLER.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Cradily",
    img: "pokemon/CRADILY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Grass"],
    }
  },
{
    name: "Cramorant",
    img: "pokemon/CRAMORANT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Flying"],
    }
  },
{
    name: "Cranidos",
    img: "pokemon/CRANIDOS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Rock"],
    }
  },
{
    name: "Crawdaunt",
    img: "pokemon/CRAWDAUNT.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Dark"],
    }
  },
{
    name: "Cresselia",
    img: "pokemon/CRESSELIA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Croagunk",
    img: "pokemon/CROAGUNK.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Fighting"],
    }
  },
{
    name: "Crobat",
    img: "pokemon/CROBAT.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Poison", "Flying"],
    }
  },
{
    name: "Crocalor",
    img: "pokemon/CROCALOR.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Croconaw",
    img: "pokemon/CROCONAW.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
    }
  },
{
    name: "Crustle",
    img: "pokemon/CRUSTLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Rock"],
    }
  },
{
    name: "Cryogonal",
    img: "pokemon/CRYOGONAL.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Cubchoo",
    img: "pokemon/CUBCHOO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Cubone",
    img: "pokemon/CUBONE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Cufant",
    img: "pokemon/CUFANT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Steel"],
    }
  },
{
    name: "Cursola",
    img: "pokemon/CURSOLA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Cutiefly",
    img: "pokemon/CUTIEFLY.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Cyclizar",
    img: "pokemon/CYCLIZAR.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Normal"],
    }
  },
{
    name: "Cyndaquil",
    img: "pokemon/CYNDAQUIL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Dachsbun",
    img: "pokemon/DACHSBUN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Darkrai",
    img: "pokemon/DARKRAI.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dark"],
    }
  },
{
    name: "Darmanitan",
    img: "pokemon/DARMANITAN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Psychic"],
    }
  },
{
    name: "Dartrix",
    img: "pokemon/DARTRIX.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Flying"],
    }
  },
{
    name: "Darumaka",
    img: "pokemon/DARUMAKA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Decidueye",
    img: "pokemon/DECIDUEYE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Ghost"],
    }
  },
{
    name: "Dedenne",
    img: "pokemon/DEDENNE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Electric", "Fairy"],
    }
  },
{
    name: "Deerling",
    img: "pokemon/DEERLING.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Deino",
    img: "pokemon/DEINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Dragon"],
    }
  },
{
    name: "Delcatty",
    img: "pokemon/DELCATTY.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Delibird",
    img: "pokemon/DELIBIRD.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ice", "Flying"],
    }
  },
{
    name: "Delphox",
    img: "pokemon/DELPHOX.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Psychic"],
    }
  },
{
    name: "Deoxys",
    img: "pokemon/DEOXYS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Dewgong",
    img: "pokemon/DEWGONG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Ice"],
    }
  },
{
    name: "Dewott",
    img: "pokemon/DEWOTT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water"],
    }
  },
{
    name: "Dewpider",
    img: "pokemon/DEWPIDER.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Bug"],
    }
  },
{
    name: "Dhelmise",
    img: "pokemon/DHELMISE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Ghost"],
    }
  },
{
    name: "Dialga",
    img: "pokemon/DIALGA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Steel"],
    }
  },
{
    name: "Diancie",
    img: "pokemon/DIANCIE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Rock", "Fairy"],
    }
  },
{
    name: "Diggersby",
    img: "pokemon/DIGGERSBY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ground", "Normal"],
    }
  },
{
    name: "Diglett",
    img: "pokemon/DIGLETT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Dipplin",
    img: "pokemon/DIPPLIN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dragon"],
    }
  },
{
    name: "Ditto",
    img: "pokemon/DITTO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Dodrio",
    img: "pokemon/DODRIO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Normal"],
    }
  },
{
    name: "Doduo",
    img: "pokemon/DODUO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Normal"],
    }
  },
{
    name: "Dolliv",
    img: "pokemon/DOLLIV.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Normal"],
    }
  },
{
    name: "Dondozo",
    img: "pokemon/DONDOZO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
    }
  },
{
    name: "Donphan",
    img: "pokemon/DONPHAN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Dottler",
    img: "pokemon/DOTTLER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Bug", "Psychic"],
    }
  },
{
    name: "Doublade",
    img: "pokemon/DOUBLADE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ghost", "Steel"],
    }
  },
{
    name: "Dracovish",
    img: "pokemon/DRACOVISH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Dragon"],
    }
  },
{
    name: "Dracozolt",
    img: "pokemon/DRACOZOLT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Dragon"],
    }
  },
{
    name: "Dragalge",
    img: "pokemon/DRAGALGE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Poison"],
    }
  },
{
    name: "Dragapult",
    img: "pokemon/DRAGAPULT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dragon", "Ghost"],
    }
  },
{
    name: "Dragonair",
    img: "pokemon/DRAGONAIR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Dragonite",
    img: "pokemon/DRAGONITE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dragon", "Flying"],
    }
  },
{
    name: "Drakloak",
    img: "pokemon/DRAKLOAK.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dragon", "Ghost"],
    }
  },
{
    name: "Drampa",
    img: "pokemon/DRAMPA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal", "Dragon"],
    }
  },
{
    name: "Drapion",
    img: "pokemon/DRAPION.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Poison", "Dark"],
    }
  },
{
    name: "Dratini",
    img: "pokemon/DRATINI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Drednaw",
    img: "pokemon/DREDNAW.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water", "Rock"],
    }
  },
{
    name: "Dreepy",
    img: "pokemon/DREEPY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dragon", "Ghost"],
    }
  },
{
    name: "Drifblim",
    img: "pokemon/DRIFBLIM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost", "Flying"],
    }
  },
{
    name: "Drifloon",
    img: "pokemon/DRIFLOON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost", "Flying"],
    }
  },
{
    name: "Drilbur",
    img: "pokemon/DRILBUR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Drizzile",
    img: "pokemon/DRIZZILE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
    }
  },
{
    name: "Drowzee",
    img: "pokemon/DROWZEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Druddigon",
    img: "pokemon/DRUDDIGON.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Dubwool",
    img: "pokemon/DUBWOOL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Ducklett",
    img: "pokemon/DUCKLETT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Flying"],
    }
  },
{
    name: "Dudunsparce",
    img: "pokemon/DUDUNSPARCE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Dugtrio",
    img: "pokemon/DUGTRIO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Dunsparce",
    img: "pokemon/DUNSPARCE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Duosion",
    img: "pokemon/DUOSION.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Duraludon",
    img: "pokemon/DURALUDON.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Steel", "Dragon"],
    }
  },
{
    name: "Durant",
    img: "pokemon/DURANT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Steel"],
    }
  },
{
    name: "Dusclops",
    img: "pokemon/DUSCLOPS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Dusknoir",
    img: "pokemon/DUSKNOIR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Duskull",
    img: "pokemon/DUSKULL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Dustox",
    img: "pokemon/DUSTOX.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Poison"],
    }
  },
{
    name: "Dwebble",
    img: "pokemon/DWEBBLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock", "Bug"],
    }
  },
{
    name: "Eelektrik",
    img: "pokemon/EELEKTRIK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Eelektross",
    img: "pokemon/EELEKTROSS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Eevee",
    img: "pokemon/EEVEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Eiscue",
    img: "pokemon/EISCUE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Ekans",
    img: "pokemon/EKANS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
    }
  },
{
    name: "Eldegoss",
    img: "pokemon/ELDEGOSS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Electabuzz",
    img: "pokemon/ELECTABUZZ.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Electivire",
    img: "pokemon/ELECTIVIRE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Electrike",
    img: "pokemon/ELECTRIKE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Electrode",
    img: "pokemon/ELECTRODE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Elekid",
    img: "pokemon/ELEKID.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Elgyem",
    img: "pokemon/ELGYEM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Emboar",
    img: "pokemon/EMBOAR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Fighting"],
    }
  },
{
    name: "Emolga",
    img: "pokemon/EMOLGA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Electric", "Flying"],
    }
  },
{
    name: "Empoleon",
    img: "pokemon/EMPOLEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Steel"],
    }
  },
{
    name: "Entei",
    img: "pokemon/ENTEI.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Escavalier",
    img: "pokemon/ESCAVALIER.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Steel"],
    }
  },
{
    name: "Espathra",
    img: "pokemon/ESPATHRA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Espeon",
    img: "pokemon/ESPEON.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Espurr",
    img: "pokemon/ESPURR.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Eternatus",
    img: "pokemon/ETERNATUS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Poison", "Dragon"],
    }
  },
{
    name: "Excadrill",
    img: "pokemon/EXCADRILL.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Steel"],
    }
  },
{
    name: "Exeggcute",
    img: "pokemon/EXEGGCUTE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Psychic"],
    }
  },
{
    name: "Exeggutor",
    img: "pokemon/EXEGGUTOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Psychic"],
    }
  },
{
    name: "Exploud",
    img: "pokemon/EXPLOUD.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Falinks",
    img: "pokemon/FALINKS.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Farfetchd",
    img: "pokemon/FARFETCHD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Flying"],
    }
  },
{
    name: "Farigiraf",
    img: "pokemon/FARIGIRAF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal", "Psychic"],
    }
  },
{
    name: "Fearow",
    img: "pokemon/FEAROW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Normal"],
    }
  },
{
    name: "Feebas",
    img: "pokemon/FEEBAS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Fennekin",
    img: "pokemon/FENNEKIN.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Feraligatr",
    img: "pokemon/FERALIGATR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water"],
    }
  },
{
    name: "Ferroseed",
    img: "pokemon/FERROSEED.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Steel"],
    }
  },
{
    name: "Ferrothorn",
    img: "pokemon/FERROTHORN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Steel"],
    }
  },
{
    name: "Fezandipiti",
    img: "pokemon/FEZANDIPITI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Fairy"],
    }
  },
{
    name: "Fidough",
    img: "pokemon/FIDOUGH.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Finizen",
    img: "pokemon/FINIZEN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Water"],
    }
  },
{
    name: "Finneon",
    img: "pokemon/FINNEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
    }
  },
{
    name: "Flaaffy",
    img: "pokemon/FLAAFFY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Flabebe",
    img: "pokemon/FLABEBE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Flamigo",
    img: "pokemon/FLAMIGO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Flying", "Fighting"],
    }
  },
{
    name: "Flapple",
    img: "pokemon/FLAPPLE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass", "Dragon"],
    }
  },
{
    name: "Flareon",
    img: "pokemon/FLAREON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Fletchinder",
    img: "pokemon/FLETCHINDER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Flying"],
    }
  },
{
    name: "Fletchling",
    img: "pokemon/FLETCHLING.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal", "Flying"],
    }
  },
{
    name: "Flittle",
    img: "pokemon/FLITTLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Floatzel",
    img: "pokemon/FLOATZEL.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
    }
  },
{
    name: "Floette",
    img: "pokemon/FLOETTE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Floragato",
    img: "pokemon/FLORAGATO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Florges",
    img: "pokemon/FLORGES.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Flutter Mane",
    img: "pokemon/FLUTTERMANE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost", "Fairy"],
    }
  },
{
    name: "Flygon",
    img: "pokemon/FLYGON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground", "Dragon"],
    }
  },
{
    name: "Fomantis",
    img: "pokemon/FOMANTIS.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Foongus",
    img: "pokemon/FOONGUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass", "Poison"],
    }
  },
{
    name: "Forretress",
    img: "pokemon/FORRETRESS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Steel"],
    }
  },
{
    name: "Fraxure",
    img: "pokemon/FRAXURE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Frigibax",
    img: "pokemon/FRIGIBAX.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dragon", "Ice"],
    }
  },
{
    name: "Frillish",
    img: "pokemon/FRILLISH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Ghost"],
    }
  },
{
    name: "Froakie",
    img: "pokemon/FROAKIE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
    }
  },
{
    name: "Frogadier",
    img: "pokemon/FROGADIER.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water"],
    }
  },
{
    name: "Froslass",
    img: "pokemon/FROSLASS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Ghost"],
    }
  },
{
    name: "Frosmoth",
    img: "pokemon/FROSMOTH.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice", "Bug"],
    }
  },
{
    name: "Fuecoco",
    img: "pokemon/FUECOCO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Furfrou",
    img: "pokemon/FURFROU.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Furret",
    img: "pokemon/FURRET.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Gabite",
    img: "pokemon/GABITE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Ground"],
    }
  },
{
    name: "Gallade",
    img: "pokemon/GALLADE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic", "Fighting"],
    }
  },
{
    name: "Galvantula",
    img: "pokemon/GALVANTULA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Electric"],
    }
  },
{
    name: "Garbodor",
    img: "pokemon/GARBODOR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Poison"],
    }
  },
{
    name: "Garchomp",
    img: "pokemon/GARCHOMP.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Ground"],
    }
  },
{
    name: "Gardevoir",
    img: "pokemon/GARDEVOIR.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fairy"],
    }
  },
{
    name: "Garganacl",
    img: "pokemon/GARGANACL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock"],
    }
  },
{
    name: "Gastly",
    img: "pokemon/GASTLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ghost", "Poison"],
    }
  },
{
    name: "Gastrodon",
    img: "pokemon/GASTRODON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Ground"],
    }
  },
{
    name: "Genesect",
    img: "pokemon/GENESECT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug", "Steel"],
    }
  },
{
    name: "Gengar",
    img: "pokemon/GENGAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ghost", "Poison"],
    }
  },
{
    name: "Geodude",
    img: "pokemon/GEODUDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
    }
  },
{
    name: "Gholdengo",
    img: "pokemon/GHOLDENGO.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Ghost"],
    }
  },
{
    name: "Gible",
    img: "pokemon/GIBLE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dragon", "Ground"],
    }
  },
{
    name: "Gigalith",
    img: "pokemon/GIGALITH.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Rock"],
    }
  },
{
    name: "Gimmighoul",
    img: "pokemon/GIMMIGHOUL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Girafarig",
    img: "pokemon/GIRAFARIG.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Psychic", "Normal"],
    }
  },
{
    name: "Giratina",
    img: "pokemon/GIRATINA.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost", "Dragon"],
    }
  },
{
    name: "Glaceon",
    img: "pokemon/GLACEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Glalie",
    img: "pokemon/GLALIE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Glameow",
    img: "pokemon/GLAMEOW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Glastrier",
    img: "pokemon/GLASTRIER.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice"],
    }
  },
{
    name: "Gligar",
    img: "pokemon/GLIGAR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground", "Flying"],
    }
  },
{
    name: "Glimmet",
    img: "pokemon/GLIMMET.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Poison"],
    }
  },
{
    name: "Glimmora",
    img: "pokemon/GLIMMORA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Poison"],
    }
  },
{
    name: "Gliscor",
    img: "pokemon/GLISCOR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground", "Flying"],
    }
  },
{
    name: "Gloom",
    img: "pokemon/GLOOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
    }
  },
{
    name: "Gogoat",
    img: "pokemon/GOGOAT.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Golbat",
    img: "pokemon/GOLBAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Flying", "Poison"],
    }
  },
{
    name: "Goldeen",
    img: "pokemon/GOLDEEN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
    }
  },
{
    name: "Golduck",
    img: "pokemon/GOLDUCK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
    }
  },
{
    name: "Golem",
    img: "pokemon/GOLEM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
    }
  },
{
    name: "Golett",
    img: "pokemon/GOLETT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Ghost"],
    }
  },
{
    name: "Golisopod",
    img: "pokemon/GOLISOPOD.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug", "Water"],
    }
  },
{
    name: "Golurk",
    img: "pokemon/GOLURK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ghost", "Ground"],
    }
  },
{
    name: "Goodra",
    img: "pokemon/GOODRA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Goomy",
    img: "pokemon/GOOMY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Gorebyss",
    img: "pokemon/GOREBYSS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Gossifleur",
    img: "pokemon/GOSSIFLEUR.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Gothita",
    img: "pokemon/GOTHITA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Gothitelle",
    img: "pokemon/GOTHITELLE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Gothorita",
    img: "pokemon/GOTHORITA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Gouging Fire",
    img: "pokemon/GOUGINGFIRE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Dragon"],
    }
  },
{
    name: "Gourgeist",
    img: "pokemon/GOURGEIST.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Ghost", "Grass"],
    }
  },
{
    name: "Grafaiai",
    img: "pokemon/GRAFAIAI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Normal"],
    }
  },
{
    name: "Granbull",
    img: "pokemon/GRANBULL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Grapploct",
    img: "pokemon/GRAPPLOCT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Graveler",
    img: "pokemon/GRAVELER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Ground"],
    }
  },
{
    name: "Great Tusk",
    img: "pokemon/GREATTUSK.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ground", "Fighting"],
    }
  },
{
    name: "Greavard",
    img: "pokemon/GREAVARD.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Greedent",
    img: "pokemon/GREEDENT.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Greninja",
    img: "pokemon/GRENINJA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Water", "Dark"],
    }
  },
{
    name: "Grimer",
    img: "pokemon/GRIMER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
    }
  },
{
    name: "Grimmsnarl",
    img: "pokemon/GRIMMSNARL.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Fairy"],
    }
  },
{
    name: "Grookey",
    img: "pokemon/GROOKEY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Grotle",
    img: "pokemon/GROTLE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Groudon",
    img: "pokemon/GROUDON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Grovyle",
    img: "pokemon/GROVYLE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Growlithe",
    img: "pokemon/GROWLITHE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Grubbin",
    img: "pokemon/GRUBBIN.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Grumpig",
    img: "pokemon/GRUMPIG.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Gulpin",
    img: "pokemon/GULPIN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Poison"],
    }
  },
{
    name: "Gumshoos",
    img: "pokemon/GUMSHOOS.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Gurdurr",
    img: "pokemon/GURDURR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Guzzlord",
    img: "pokemon/GUZZLORD.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dark", "Dragon"],
    }
  },
{
    name: "Gyarados",
    img: "pokemon/GYARADOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Flying"],
    }
  },
{
    name: "Hakamo-o",
    img: "pokemon/HAKAMOO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dragon", "Fighting"],
    }
  },
{
    name: "Happiny",
    img: "pokemon/HAPPINY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Hariyama",
    img: "pokemon/HARIYAMA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Hatenna",
    img: "pokemon/HATENNA.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Hatterene",
    img: "pokemon/HATTERENE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic", "Fairy"],
    }
  },
{
    name: "Hattrem",
    img: "pokemon/HATTREM.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Haunter",
    img: "pokemon/HAUNTER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ghost", "Poison"],
    }
  },
{
    name: "Hawlucha",
    img: "pokemon/HAWLUCHA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fighting", "Flying"],
    }
  },
{
    name: "Haxorus",
    img: "pokemon/HAXORUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Heatmor",
    img: "pokemon/HEATMOR.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Heatran",
    img: "pokemon/HEATRAN.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Steel"],
    }
  },
{
    name: "Heliolisk",
    img: "pokemon/HELIOLISK.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Electric", "Normal"],
    }
  },
{
    name: "Helioptile",
    img: "pokemon/HELIOPTILE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Electric", "Normal"],
    }
  },
{
    name: "Heracross",
    img: "pokemon/HERACROSS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Fighting"],
    }
  },
{
    name: "Herdier",
    img: "pokemon/HERDIER.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Hippopotas",
    img: "pokemon/HIPPOPOTAS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Hippowdon",
    img: "pokemon/HIPPOWDON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Hitmonchan",
    img: "pokemon/HITMONCHAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Hitmonlee",
    img: "pokemon/HITMONLEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Hitmontop",
    img: "pokemon/HITMONTOP.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Honchkrow",
    img: "pokemon/HONCHKROW.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Dark", "Flying"],
    }
  },
{
    name: "Honedge",
    img: "pokemon/HONEDGE.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Steel", "Ghost"],
    }
  },
{
    name: "Ho-oh",
    img: "pokemon/HOOH.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire", "Flying"],
    }
  },
{
    name: "Hoopa",
    img: "pokemon/HOOPA.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic", "Ghost"],
    }
  },
{
    name: "Hoothoot",
    img: "pokemon/HOOTHOOT.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Flying", "Normal"],
    }
  },
{
    name: "Hoppip",
    img: "pokemon/HOPPIP.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Flying"],
    }
  },
{
    name: "Horsea",
    img: "pokemon/HORSEA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
    }
  },
{
    name: "Houndoom",
    img: "pokemon/HOUNDOOM.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Fire"],
    }
  },
{
    name: "Houndour",
    img: "pokemon/HOUNDOUR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Fire"],
    }
  },
{
    name: "Houndstone",
    img: "pokemon/HOUNDSTONE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Huntail",
    img: "pokemon/HUNTAIL.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Hydrapple",
    img: "pokemon/HYDRAPPLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dragon"],
    }
  },
{
    name: "Hydreigon",
    img: "pokemon/HYDREIGON.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Dragon"],
    }
  },
{
    name: "Hypno",
    img: "pokemon/HYPNO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Igglybuff",
    img: "pokemon/IGGLYBUFF.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Illumise",
    img: "pokemon/ILLUMISE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Impidimp",
    img: "pokemon/IMPIDIMP.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Fairy"],
    }
  },
{
    name: "Incineroar",
    img: "pokemon/INCINEROAR.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire", "Dark"],
    }
  },
{
    name: "Indeedee",
    img: "pokemon/INDEEDEE.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Psychic", "Normal"],
    }
  },
{
    name: "Infernape",
    img: "pokemon/INFERNAPE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire", "Fighting"],
    }
  },
{
    name: "Inkay",
    img: "pokemon/INKAY.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Dark", "Psychic"],
    }
  },
{
    name: "Inteleon",
    img: "pokemon/INTELEON.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Water"],
    }
  },
{
    name: "Iron Boulder",
    img: "pokemon/IRONBOULDER.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Psychic"],
    }
  },
{
    name: "Iron Bundle",
    img: "pokemon/IRONBUNDLE.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ice", "Water"],
    }
  },
{
    name: "Iron Crown",
    img: "pokemon/IRONCROWN.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Steel", "Psychic"],
    }
  },
{
    name: "Iron Hands",
    img: "pokemon/IRONHANDS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fighting", "Electric"],
    }
  },
{
    name: "Iron Jugulis",
    img: "pokemon/IRONJUGULIS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Flying"],
    }
  },
{
    name: "Iron Leaves",
    img: "pokemon/IRONLEAVES.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Psychic"],
    }
  },
{
    name: "Iron Moth",
    img: "pokemon/IRONMOTH.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fire", "Poison"],
    }
  },
{
    name: "Iron Thorns",
    img: "pokemon/IRONTHORNS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock", "Electric"],
    }
  },
{
    name: "Iron Treads",
    img: "pokemon/IRONTREADS.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Ground", "Steel"],
    }
  },
{
    name: "Iron Valiant",
    img: "pokemon/IRONVALIANT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fairy", "Fighting"],
    }
  },
{
    name: "Ivysaur",
    img: "pokemon/IVYSAUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Grass", "Poison"],
    }
  },
{
    name: "Jangmo-o",
    img: "pokemon/JANGMOO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dragon"],
    }
  },
{
    name: "Jellicent",
    img: "pokemon/JELLICENT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Ghost"],
    }
  },
{
    name: "Jigglypuff",
    img: "pokemon/JIGGLYPUFF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Jirachi",
    img: "pokemon/JIRACHI.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Steel"],
    }
  },
{
    name: "Jolteon",
    img: "pokemon/JOLTEON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Joltik",
    img: "pokemon/JOLTIK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Electric"],
    }
  },
{
    name: "Jumpluff",
    img: "pokemon/JUMPLUFF.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Grass", "Flying"],
    }
  },
{
    name: "Jynx",
    img: "pokemon/JYNX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ice", "Psychic"],
    }
  },
{
    name: "Kabuto",
    img: "pokemon/KABUTO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Water"],
    }
  },
{
    name: "Kabutops",
    img: "pokemon/KABUTOPS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Rock", "Water"],
    }
  },
{
    name: "Kadabra",
    img: "pokemon/KADABRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Kakuna",
    img: "pokemon/KAKUNA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison", "Bug"],
    }
  },
{
    name: "Kangaskhan",
    img: "pokemon/KANGASKHAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Karrablast",
    img: "pokemon/KARRABLAST.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Kartana",
    img: "pokemon/KARTANA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Steel"],
    }
  },
{
    name: "Kecleon",
    img: "pokemon/KECLEON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Keldeo",
    img: "pokemon/KELDEO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Water", "Fighting"],
    }
  },
{
    name: "Kilowattrel",
    img: "pokemon/KILOWATTREL.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Fighting"],
    }
  },
{
    name: "Kingambit",
    img: "pokemon/KINGAMBIT.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark", "Steel"],
    }
  },
{
    name: "Kingdra",
    img: "pokemon/KINGDRA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Dragon"],
    }
  },
{
    name: "Kingler",
    img: "pokemon/KINGLER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
    }
  },
{
    name: "Kirlia",
    img: "pokemon/KIRLIA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Klang",
    img: "pokemon/KLANG.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel"],
    }
  },
{
    name: "Klawf",
    img: "pokemon/KLAWF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Rock"],
    }
  },
{
    name: "Klefki",
    img: "pokemon/KLEFKI.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Steel", "Fairy"],
    }
  },
{
    name: "Klink",
    img: "pokemon/KLINK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel"],
    }
  },
{
    name: "Klinklang",
    img: "pokemon/KLINKLANG.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Steel"],
    }
  },
{
    name: "Koffing",
    img: "pokemon/KOFFING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
    }
  },
{
    name: "Komala",
    img: "pokemon/KOMALA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Kommoo",
    img: "pokemon/KOMMOO.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Dragon", "Fighting"],
    }
  },
{
    name: "Koraidon",
    img: "pokemon/KORAIDON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Fighting", "Dragon"],
    }
  },
{
    name: "Krabby",
    img: "pokemon/KRABBY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
    }
  },
{
    name: "Kricketot",
    img: "pokemon/KRICKETOT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Kricketune",
    img: "pokemon/KRICKETUNE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Krokorok",
    img: "pokemon/KROKOROK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Ground"],
    }
  },
{
    name: "Krookodile",
    img: "pokemon/KROOKODILE.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Ground"],
    }
  },
{
    name: "Kubfu",
    img: "pokemon/KUBFU.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Kyogre",
    img: "pokemon/KYOGRE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Kyurem",
    img: "pokemon/KYUREM.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ice", "Dragon"],
    }
  },
{
    name: "Lairon",
    img: "pokemon/LAIRON.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Steel"],
    }
  },
{
    name: "Lampent",
    img: "pokemon/LAMPENT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Ghost"],
    }
  },
{
    name: "Landorus",
    img: "pokemon/LANDORUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Ground", "Flying"],
    }
  },
{
    name: "Lanturn",
    img: "pokemon/LANTURN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric", "Water"],
    }
  },
{
    name: "Lapras",
    img: "pokemon/LAPRAS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water", "Ice"],
    }
  },
{
    name: "Larvesta",
    img: "pokemon/LARVESTA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Fire"],
    }
  },
{
    name: "Larvitar",
    img: "pokemon/LARVITAR.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ground", "Rock"],
    }
  },
{
    name: "Latias",
    img: "pokemon/LATIAS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Dragon"],
    }
  },
{
    name: "Latios",
    img: "pokemon/LATIOS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Dragon"],
    }
  },
{
    name: "Leafeon",
    img: "pokemon/LEAFEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Leavanny",
    img: "pokemon/LEAVANNY.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Bug", "Grass"],
    }
  },
{
    name: "Lechonk",
    img: "pokemon/LECHONK.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Ledian",
    img: "pokemon/LEDIAN.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Ledyba",
    img: "pokemon/LEDYBA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Lickilicky",
    img: "pokemon/LICKILICKY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Lickitung",
    img: "pokemon/LICKITUNG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Liepard",
    img: "pokemon/LIEPARD.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark"],
    }
  },
{
    name: "Lileep",
    img: "pokemon/LILEEP.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Rock"],
    }
  },
{
    name: "Lilligant",
    img: "pokemon/LILLIGANT.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Lillipup",
    img: "pokemon/LILLIPUP.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Linoone",
    img: "pokemon/LINOONE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Litleo",
    img: "pokemon/LITLEO.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Fire", "Normal"],
    }
  },
{
    name: "Litten",
    img: "pokemon/LITTEN.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Litwick",
    img: "pokemon/LITWICK.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fire", "Ghost"],
    }
  },
{
    name: "Lokix",
    img: "pokemon/LOKIX.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Bug", "Dark"],
    }
  },
{
    name: "Lombre",
    img: "pokemon/LOMBRE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Grass"],
    }
  },
{
    name: "Lopunny",
    img: "pokemon/LOPUNNY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Lotad",
    img: "pokemon/LOTAD.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass", "Water"],
    }
  },
{
    name: "Loudred",
    img: "pokemon/LOUDRED.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Lucario",
    img: "pokemon/LUCARIO.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fighting", "Steel"],
    }
  },
{
    name: "Ludicolo",
    img: "pokemon/LUDICOLO.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Grass"],
    }
  },
{
    name: "Lugia",
    img: "pokemon/LUGIA.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Flying", "Psychic"],
    }
  },
{
    name: "Lumineon",
    img: "pokemon/LUMINEON.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
    }
  },
{
    name: "Lunala",
    img: "pokemon/LUNALA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Psychic", "Ghost"],
    }
  },
{
    name: "Lunatone",
    img: "pokemon/LUNATONE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Rock", "Psychic"],
    }
  },
{
    name: "Lurantis",
    img: "pokemon/LURANTIS.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Luvdisc",
    img: "pokemon/LUVDISC.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Luxio",
    img: "pokemon/LUXIO.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Luxray",
    img: "pokemon/LUXRAY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Lycanroc",
    img: "pokemon/LYCANROC.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Rock"],
    }
  },
{
    name: "Mabosstiff",
    img: "pokemon/MABOSSTIFF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark"],
    }
  },
{
    name: "Machamp",
    img: "pokemon/MACHAMP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Machoke",
    img: "pokemon/MACHOKE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Machop",
    img: "pokemon/MACHOP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Magby",
    img: "pokemon/MAGBY.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Magcargo",
    img: "pokemon/MAGCARGO.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Rock", "Fire"],
    }
  },
{
    name: "Magearna",
    img: "pokemon/MAGEARNA.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel", "Fairy"],
    }
  },
{
    name: "Magikarp",
    img: "pokemon/MAGIKARP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Water"],
    }
  },
{
    name: "Magmar",
    img: "pokemon/MAGMAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Magmortar",
    img: "pokemon/MAGMORTAR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire"],
    }
  },
{
    name: "Magnemite",
    img: "pokemon/MAGNEMITE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric", "Steel"],
    }
  },
{
    name: "Magneton",
    img: "pokemon/MAGNETON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Electric", "Steel"],
    }
  },
{
    name: "Magnezone",
    img: "pokemon/MAGNEZONE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Electric", "Steel"],
    }
  },
{
    name: "Makuhita",
    img: "pokemon/MAKUHITA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Malamar",
    img: "pokemon/MALAMAR.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic", "Dark"],
    }
  },
{
    name: "Mamoswine",
    img: "pokemon/MAMOSWINE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ice", "Ground"],
    }
  },
{
    name: "Manaphy",
    img: "pokemon/MANAPHY.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water"],
    }
  },
{
    name: "Mandibuzz",
    img: "pokemon/MANDIBUZZ.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Dark", "Flying"],
    }
  },
{
    name: "Manectric",
    img: "pokemon/MANECTRIC.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Mankey",
    img: "pokemon/MANKEY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Mantine",
    img: "pokemon/MANTINE.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Flying"],
    }
  },
{
    name: "Mantyke",
    img: "pokemon/MANTYKE.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Water", "Flying"],
    }
  },
{
    name: "Maractus",
    img: "pokemon/MARACTUS.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Mareanie",
    img: "pokemon/MAREANIE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Water", "Poison"],
    }
  },
{
    name: "Mareep",
    img: "pokemon/MAREEP.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Marill",
    img: "pokemon/MARILL.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Water", "Fairy"],
    }
  },
{
    name: "Marowak",
    img: "pokemon/MAROWAK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Marshadow",
    img: "pokemon/MARSHADOW.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Fighting", "Ghost"],
    }
  },
{
    name: "Marshtomp",
    img: "pokemon/MARSHTOMP.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water", "Ground"],
    }
  },
{
    name: "Maschiff",
    img: "pokemon/MASCHIFF.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Dark"],
    }
  },
{
    name: "Masquerain",
    img: "pokemon/MASQUERAIN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Maushold",
    img: "pokemon/MAUSHOLD.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Mawile",
    img: "pokemon/MAWILE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Steel", "Fairy"],
    }
  },
{
    name: "Medicham",
    img: "pokemon/MEDICHAM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fighting"],
    }
  },
{
    name: "Meditite",
    img: "pokemon/MEDITITE.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Fighting"],
    }
  },
{
    name: "Meganium",
    img: "pokemon/MEGANIUM.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Grass"],
    }
  },
{
    name: "Melmetal",
    img: "pokemon/MELMETAL.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel"],
    }
  },
{
    name: "Meloetta",
    img: "pokemon/MELOETTA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic", "Normal", "Fighting"],
    }
  },
{
    name: "Meltan",
    img: "pokemon/MELTAN.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Steel"],
    }
  },
{
    name: "Meowscarada",
    img: "pokemon/MEOWSCARADA.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Grass", "Dark"],
    }
  },
{
    name: "Meowstic",
    img: "pokemon/MEOWSTIC.png",
    opts: {
      GENERATION: ["gen6"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Meowth",
    img: "pokemon/MEOWTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Mesprit",
    img: "pokemon/MESPRIT.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Metagross",
    img: "pokemon/METAGROSS.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Steel"],
    }
  },
{
    name: "Metang",
    img: "pokemon/METANG.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Psychic", "Steel"],
    }
  },
{
    name: "Metapod",
    img: "pokemon/METAPOD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Bug"],
    }
  },
{
    name: "Mew",
    img: "pokemon/MEW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Mewtwo",
    img: "pokemon/MEWTWO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Mienfoo",
    img: "pokemon/MIENFOO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Mienshao",
    img: "pokemon/MIENSHAO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Fighting"],
    }
  },
{
    name: "Mightyena",
    img: "pokemon/MIGHTYENA.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Dark"],
    }
  },
{
    name: "Milcery",
    img: "pokemon/MILCERY.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Fairy"],
    }
  },
{
    name: "Milotic",
    img: "pokemon/MILOTIC.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Miltank",
    img: "pokemon/MILTANK.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Mime Jr.",
    img: "pokemon/MIMEJR.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Psychic", "Fairy"],
    }
  },
{
    name: "Mimikyu",
    img: "pokemon/MIMIKYU.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ghost", "Fairy"],
    }
  },
{
    name: "Minccino",
    img: "pokemon/MINCCINO.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Minior",
    img: "pokemon/MINIOR.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Rock", "Flying"],
    }
  },
{
    name: "Minun",
    img: "pokemon/MINUN.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Electric"],
    }
  },
{
    name: "Miraidon",
    img: "pokemon/MIRAIDON.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Electric", "Dragon"],
    }
  },
{
    name: "Misdreavus",
    img: "pokemon/MISDREAVUS.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Mismagius",
    img: "pokemon/MISMAGIUS.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Ghost"],
    }
  },
{
    name: "Moltres",
    img: "pokemon/MOLTRES.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Fire", "Flying"],
    }
  },
{
    name: "Monferno",
    img: "pokemon/MONFERNO.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Fire", "Fighting"],
    }
  },
{
    name: "Morelull",
    img: "pokemon/MORELULL.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Grass", "Fairy"],
    }
  },
{
    name: "Morgrem",
    img: "pokemon/MORGREM.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Dark", "Fairy"],
    }
  },
{
    name: "Morpeko",
    img: "pokemon/MORPEKO.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Electric", "Dark"],
    }
  },
{
    name: "Mothim",
    img: "pokemon/MOTHIM.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Bug", "Flying"],
    }
  },
{
    name: "Mr. Mime",
    img: "pokemon/MRMIME.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Psychic", "Fairy"],
    }
  },
{
    name: "Mr. Rime",
    img: "pokemon/MRRIME.png",
    opts: {
      GENERATION: ["gen8"],
        TYPE: ["Ice", "Psychic"],
    }
  },
{
    name: "Mudbray",
    img: "pokemon/MUDBRAY.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Mudkip",
    img: "pokemon/MUDKIP.png",
    opts: {
      GENERATION: ["gen3"],
        TYPE: ["Water"],
    }
  },
{
    name: "Mudsdale",
    img: "pokemon/MUDSDALE.png",
    opts: {
      GENERATION: ["gen7"],
        TYPE: ["Ground"],
    }
  },
{
    name: "Muk",
    img: "pokemon/MUK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Poison"],
    }
  },
{
    name: "Munchlax",
    img: "pokemon/MUNCHLAX.png",
    opts: {
      GENERATION: ["gen4"],
        TYPE: ["Normal"],
    }
  },
{
    name: "Munkidori",
    img: "pokemon/MUNKIDORI.png",
    opts: {
      GENERATION: ["gen9"],
        TYPE: ["Poison", "Psychic"],
    }
  },
{
    name: "Munna",
    img: "pokemon/MUNNA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Murkrow",
    img: "pokemon/MURKROW.png",
    opts: {
      GENERATION: ["gen2"],
        TYPE: ["Dark", "Flying"],
    }
  },
{
    name: "Musharna",
    img: "pokemon/MUSHARNA.png",
    opts: {
      GENERATION: ["gen5"],
        TYPE: ["Psychic"],
    }
  },
{
    name: "Nacli",
    img: "pokemon/NACLI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Naclstack",
    img: "pokemon/NACLSTACK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Naganadel",
    img: "pokemon/NAGANADEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Natu",
    img: "pokemon/NATU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Necrozma",
    img: "pokemon/NECROZMA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nickit",
    img: "pokemon/NICKIT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nidoking",
    img: "pokemon/NIDOKING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nidoqueen",
    img: "pokemon/NIDOQUEEN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nidoranfe",
    img: "pokemon/NIDORANFE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nidoranma",
    img: "pokemon/NIDORANMA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nidorina",
    img: "pokemon/NIDORINA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nidorino",
    img: "pokemon/NIDORINO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nihilego",
    img: "pokemon/NIHILEGO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nincada",
    img: "pokemon/NINCADA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ninetales",
    img: "pokemon/NINETALES.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ninjask",
    img: "pokemon/NINJASK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Noctowl",
    img: "pokemon/NOCTOWL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Noibat",
    img: "pokemon/NOIBAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Noivern",
    img: "pokemon/NOIVERN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nosepass",
    img: "pokemon/NOSEPASS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Numel",
    img: "pokemon/NUMEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nuzleaf",
    img: "pokemon/NUZLEAF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Nymble",
    img: "pokemon/NYMBLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Obstagoon",
    img: "pokemon/OBSTAGOON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Octillery",
    img: "pokemon/OCTILLERY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Oddish",
    img: "pokemon/ODDISH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ogerpon",
    img: "pokemon/OGERPON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Oinkologne",
    img: "pokemon/OINKOLOGNE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Okidogi",
    img: "pokemon/OKIDOGI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Omanyte",
    img: "pokemon/OMANYTE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Omastar",
    img: "pokemon/OMASTAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Onix",
    img: "pokemon/ONIX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Oranguru",
    img: "pokemon/ORANGURU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Orbeetle",
    img: "pokemon/ORBEETLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Oricorio",
    img: "pokemon/ORICORIO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Orthworm",
    img: "pokemon/ORTHWORM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Oshawott",
    img: "pokemon/OSHAWOTT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pachirisu",
    img: "pokemon/PACHIRISU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Palafin",
    img: "pokemon/PALAFIN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Palkia",
    img: "pokemon/PALKIA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Palossand",
    img: "pokemon/PALOSSAND.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Palpitoad",
    img: "pokemon/PALPITOAD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pancham",
    img: "pokemon/PANCHAM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pangoro",
    img: "pokemon/PANGORO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Panpour",
    img: "pokemon/PANPOUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pansage",
    img: "pokemon/PANSAGE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pansear",
    img: "pokemon/PANSEAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Paras",
    img: "pokemon/PARAS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Parasect",
    img: "pokemon/PARASECT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Passimian",
    img: "pokemon/PASSIMIAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Patrat",
    img: "pokemon/PATRAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pawmi",
    img: "pokemon/PAWMI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pawmo",
    img: "pokemon/PAWMO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pawniard",
    img: "pokemon/PAWNIARD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pecharunt",
    img: "pokemon/PECHARUNT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pelipper",
    img: "pokemon/PELIPPER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Perrserker",
    img: "pokemon/PERRSERKER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Persian",
    img: "pokemon/PERSIAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Petilil",
    img: "pokemon/PETILIL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Phanpy",
    img: "pokemon/PHANPY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Phantump",
    img: "pokemon/PHANTUMP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pheromosa",
    img: "pokemon/PHEROMOSA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Phione",
    img: "pokemon/PHIONE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pichu",
    img: "pokemon/PICHU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pidgeot",
    img: "pokemon/PIDGEOT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pidgeotto",
    img: "pokemon/PIDGEOTTO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pidgey",
    img: "pokemon/PIDGEY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pidove",
    img: "pokemon/PIDOVE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pignite",
    img: "pokemon/PIGNITE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pikachu",
    img: "pokemon/PIKACHU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pikipek",
    img: "pokemon/PIKIPEK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Piloswine",
    img: "pokemon/PILOSWINE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pincurchin",
    img: "pokemon/PINCURCHIN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pineco",
    img: "pokemon/PINECO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pinsir",
    img: "pokemon/PINSIR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Piplup",
    img: "pokemon/PIPLUP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Plusle",
    img: "pokemon/PLUSLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Poipole",
    img: "pokemon/POIPOLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Politoed",
    img: "pokemon/POLITOED.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Poliwag",
    img: "pokemon/POLIWAG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Poliwhirl",
    img: "pokemon/POLIWHIRL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Poliwrath",
    img: "pokemon/POLIWRATH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Poltchageist",
    img: "pokemon/POLTCHAGEIST.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Polteageist",
    img: "pokemon/POLTEAGEIST.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ponyta",
    img: "pokemon/PONYTA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Poochyena",
    img: "pokemon/POOCHYENA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Popplio",
    img: "pokemon/POPPLIO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Porygon",
    img: "pokemon/PORYGON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Porygon2",
    img: "pokemon/PORYGON2.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Porygonz",
    img: "pokemon/PORYGONZ.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Primarina",
    img: "pokemon/PRIMARINA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Primeape",
    img: "pokemon/PRIMEAPE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Prinplup",
    img: "pokemon/PRINPLUP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Probopass",
    img: "pokemon/PROBOPASS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Psyduck",
    img: "pokemon/PSYDUCK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pumpkaboo",
    img: "pokemon/PUMPKABOO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pupitar",
    img: "pokemon/PUPITAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Purrloin",
    img: "pokemon/PURRLOIN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Purugly",
    img: "pokemon/PURUGLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pyroar",
    img: "pokemon/PYROAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Pyukumuku",
    img: "pokemon/PYUKUMUKU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Quagsire",
    img: "pokemon/QUAGSIRE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Quaquaval",
    img: "pokemon/QUAQUAVAL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Quaxly",
    img: "pokemon/QUAXLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Quaxwell",
    img: "pokemon/QUAXWELL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Quilava",
    img: "pokemon/QUILAVA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Quilladin",
    img: "pokemon/QUILLADIN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Qwilfish",
    img: "pokemon/QWILFISH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Raboot",
    img: "pokemon/RABOOT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rabsca",
    img: "pokemon/RABSCA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ragingbolt",
    img: "pokemon/RAGINGBOLT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Raichu",
    img: "pokemon/RAICHU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Raikou",
    img: "pokemon/RAIKOU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ralts",
    img: "pokemon/RALTS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rampardos",
    img: "pokemon/RAMPARDOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rapidash",
    img: "pokemon/RAPIDASH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Raticate",
    img: "pokemon/RATICATE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rattata",
    img: "pokemon/RATTATA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rayquaza",
    img: "pokemon/RAYQUAZA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Regice",
    img: "pokemon/REGICE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Regidrago",
    img: "pokemon/REGIDRAGO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Regieleki",
    img: "pokemon/REGIELEKI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Regigigas",
    img: "pokemon/REGIGIGAS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Regirock",
    img: "pokemon/REGIROCK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Registeel",
    img: "pokemon/REGISTEEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Relicanth",
    img: "pokemon/RELICANTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rellor",
    img: "pokemon/RELLOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Remoraid",
    img: "pokemon/REMORAID.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Reshiram",
    img: "pokemon/RESHIRAM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Reuniclus",
    img: "pokemon/REUNICLUS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Revavroom",
    img: "pokemon/REVAVROOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rhydon",
    img: "pokemon/RHYDON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rhyhorn",
    img: "pokemon/RHYHORN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rhyperior",
    img: "pokemon/RHYPERIOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ribombee",
    img: "pokemon/RIBOMBEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rillaboom",
    img: "pokemon/RILLABOOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Riolu",
    img: "pokemon/RIOLU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Roaringmoon",
    img: "pokemon/ROARINGMOON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rockruff",
    img: "pokemon/ROCKRUFF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Roggenrola",
    img: "pokemon/ROGGENROLA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rolycoly",
    img: "pokemon/ROLYCOLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rookidee",
    img: "pokemon/ROOKIDEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Roselia",
    img: "pokemon/ROSELIA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Roserade",
    img: "pokemon/ROSERADE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rotom",
    img: "pokemon/ROTOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rowlet",
    img: "pokemon/ROWLET.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Rufflet",
    img: "pokemon/RUFFLET.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Runerigus",
    img: "pokemon/RUNERIGUS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sableye",
    img: "pokemon/SABLEYE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Salamence",
    img: "pokemon/SALAMENCE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Salandit",
    img: "pokemon/SALANDIT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Salazzle",
    img: "pokemon/SALAZZLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Samurott",
    img: "pokemon/SAMUROTT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sandaconda",
    img: "pokemon/SANDACONDA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sandile",
    img: "pokemon/SANDILE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sandshrew",
    img: "pokemon/SANDSHREW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sandslash",
    img: "pokemon/SANDSLASH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sandygast",
    img: "pokemon/SANDYGAST.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sandyshocks",
    img: "pokemon/SANDYSHOCKS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sawk",
    img: "pokemon/SAWK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sawsbuck",
    img: "pokemon/SAWSBUCK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scatterbug",
    img: "pokemon/SCATTERBUG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sceptile",
    img: "pokemon/SCEPTILE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scizor",
    img: "pokemon/SCIZOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scolipede",
    img: "pokemon/SCOLIPEDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scorbunny",
    img: "pokemon/SCORBUNNY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scovillain",
    img: "pokemon/SCOVILLAIN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scrafty",
    img: "pokemon/SCRAFTY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scraggy",
    img: "pokemon/SCRAGGY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Screamtail",
    img: "pokemon/SCREAMTAIL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Scyther",
    img: "pokemon/SCYTHER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Seadra",
    img: "pokemon/SEADRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Seaking",
    img: "pokemon/SEAKING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sealeo",
    img: "pokemon/SEALEO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Seedot",
    img: "pokemon/SEEDOT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Seel",
    img: "pokemon/SEEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Seismitoad",
    img: "pokemon/SEISMITOAD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sentret",
    img: "pokemon/SENTRET.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Serperior",
    img: "pokemon/SERPERIOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Servine",
    img: "pokemon/SERVINE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Seviper",
    img: "pokemon/SEVIPER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sewaddle",
    img: "pokemon/SEWADDLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sharpedo",
    img: "pokemon/SHARPEDO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shaymin",
    img: "pokemon/SHAYMIN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shedinja",
    img: "pokemon/SHEDINJA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shelgon",
    img: "pokemon/SHELGON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shellder",
    img: "pokemon/SHELLDER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shellos",
    img: "pokemon/SHELLOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shelmet",
    img: "pokemon/SHELMET.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shieldon",
    img: "pokemon/SHIELDON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shiftry",
    img: "pokemon/SHIFTRY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shiinotic",
    img: "pokemon/SHIINOTIC.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shinx",
    img: "pokemon/SHINX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shroodle",
    img: "pokemon/SHROODLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shroomish",
    img: "pokemon/SHROOMISH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shuckle",
    img: "pokemon/SHUCKLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Shuppet",
    img: "pokemon/SHUPPET.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sigilyph",
    img: "pokemon/SIGILYPH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Silcoon",
    img: "pokemon/SILCOON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Silicobra",
    img: "pokemon/SILICOBRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Silvally",
    img: "pokemon/SILVALLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Simipour",
    img: "pokemon/SIMIPOUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Simisage",
    img: "pokemon/SIMISAGE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Simisear",
    img: "pokemon/SIMISEAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sinistcha",
    img: "pokemon/SINISTCHA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sinistea",
    img: "pokemon/SINISTEA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sirfetchd",
    img: "pokemon/SIRFETCHD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sizzlipede",
    img: "pokemon/SIZZLIPEDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skarmory",
    img: "pokemon/SKARMORY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skeledirge",
    img: "pokemon/SKELEDIRGE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skiddo",
    img: "pokemon/SKIDDO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skiploom",
    img: "pokemon/SKIPLOOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skitty",
    img: "pokemon/SKITTY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skorupi",
    img: "pokemon/SKORUPI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skrelp",
    img: "pokemon/SKRELP.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skuntank",
    img: "pokemon/SKUNTANK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Skwovet",
    img: "pokemon/SKWOVET.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slaking",
    img: "pokemon/SLAKING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slakoth",
    img: "pokemon/SLAKOTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sliggoo",
    img: "pokemon/SLIGGOO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slitherwing",
    img: "pokemon/SLITHERWING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slowbro",
    img: "pokemon/SLOWBRO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slowking",
    img: "pokemon/SLOWKING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slowpoke",
    img: "pokemon/SLOWPOKE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slugma",
    img: "pokemon/SLUGMA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Slurpuff",
    img: "pokemon/SLURPUFF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Smeargle",
    img: "pokemon/SMEARGLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Smoliv",
    img: "pokemon/SMOLIV.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Smoochum",
    img: "pokemon/SMOOCHUM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sneasel",
    img: "pokemon/SNEASEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Snivy",
    img: "pokemon/SNIVY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Snom",
    img: "pokemon/SNOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Snorlax",
    img: "pokemon/SNORLAX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Snorunt",
    img: "pokemon/SNORUNT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Snover",
    img: "pokemon/SNOVER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Snubbull",
    img: "pokemon/SNUBBULL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sobble",
    img: "pokemon/SOBBLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Solgaleo",
    img: "pokemon/SOLGALEO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Solosis",
    img: "pokemon/SOLOSIS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Solrock",
    img: "pokemon/SOLROCK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spearow",
    img: "pokemon/SPEAROW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spectrier",
    img: "pokemon/SPECTRIER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spewpa",
    img: "pokemon/SPEWPA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spheal",
    img: "pokemon/SPHEAL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spidops",
    img: "pokemon/SPIDOPS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spinarak",
    img: "pokemon/SPINARAK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spinda",
    img: "pokemon/SPINDA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spiritomb",
    img: "pokemon/SPIRITOMB.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spoink",
    img: "pokemon/SPOINK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sprigatito",
    img: "pokemon/SPRIGATITO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Spritzee",
    img: "pokemon/SPRITZEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Squawkabilly",
    img: "pokemon/SQUAWKABILLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Squirtle",
    img: "pokemon/SQUIRTLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Stakataka",
    img: "pokemon/STAKATAKA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Stantler",
    img: "pokemon/STANTLER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Staraptor",
    img: "pokemon/STARAPTOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Staravia",
    img: "pokemon/STARAVIA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Starly",
    img: "pokemon/STARLY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Starmie",
    img: "pokemon/STARMIE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Staryu",
    img: "pokemon/STARYU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Steelix",
    img: "pokemon/STEELIX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Steenee",
    img: "pokemon/STEENEE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Stonjourner",
    img: "pokemon/STONJOURNER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Stoutland",
    img: "pokemon/STOUTLAND.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Stufful",
    img: "pokemon/STUFFUL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Stunfisk",
    img: "pokemon/STUNFISK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Stunky",
    img: "pokemon/STUNKY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sudowoodo",
    img: "pokemon/SUDOWOODO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Suicune",
    img: "pokemon/SUICUNE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sunflora",
    img: "pokemon/SUNFLORA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sunkern",
    img: "pokemon/SUNKERN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Surskit",
    img: "pokemon/SURSKIT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swablu",
    img: "pokemon/SWABLU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swadloon",
    img: "pokemon/SWADLOON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swalot",
    img: "pokemon/SWALOT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swampert",
    img: "pokemon/SWAMPERT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swanna",
    img: "pokemon/SWANNA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swellow",
    img: "pokemon/SWELLOW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swinub",
    img: "pokemon/SWINUB.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swirlix",
    img: "pokemon/SWIRLIX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Swoobat",
    img: "pokemon/SWOOBAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Sylveon",
    img: "pokemon/SYLVEON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tadbulb",
    img: "pokemon/TADBULB.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Taillow",
    img: "pokemon/TAILLOW.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Talonflame",
    img: "pokemon/TALONFLAME.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tandemaus",
    img: "pokemon/TANDEMAUS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tangela",
    img: "pokemon/TANGELA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tangrowth",
    img: "pokemon/TANGROWTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tapubulu",
    img: "pokemon/TAPUBULU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tapufini",
    img: "pokemon/TAPUFINI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tapukoko",
    img: "pokemon/TAPUKOKO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tapulele",
    img: "pokemon/TAPULELE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tarountula",
    img: "pokemon/TAROUNTULA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tatsugiri",
    img: "pokemon/TATSUGIRI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tauros",
    img: "pokemon/TAUROS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Teddiursa",
    img: "pokemon/TEDDIURSA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tentacool",
    img: "pokemon/TENTACOOL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tentacruel",
    img: "pokemon/TENTACRUEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tepig",
    img: "pokemon/TEPIG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Terapagos",
    img: "pokemon/TERAPAGOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Terrakion",
    img: "pokemon/TERRAKION.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Thievul",
    img: "pokemon/THIEVUL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Throh",
    img: "pokemon/THROH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Thundurus",
    img: "pokemon/THUNDURUS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Thwackey",
    img: "pokemon/THWACKEY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Timburr",
    img: "pokemon/TIMBURR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tinglu",
    img: "pokemon/TINGLU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tinkatink",
    img: "pokemon/TINKATINK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tinkaton",
    img: "pokemon/TINKATON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tinkatuff",
    img: "pokemon/TINKATUFF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tirtouga",
    img: "pokemon/TIRTOUGA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Toedscool",
    img: "pokemon/TOEDSCOOL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Toedscruel",
    img: "pokemon/TOEDSCRUEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Togedemaru",
    img: "pokemon/TOGEDEMARU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Togekiss",
    img: "pokemon/TOGEKISS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Togepi",
    img: "pokemon/TOGEPI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Togetic",
    img: "pokemon/TOGETIC.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Torchic",
    img: "pokemon/TORCHIC.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Torkoal",
    img: "pokemon/TORKOAL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tornadus",
    img: "pokemon/TORNADUS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Torracat",
    img: "pokemon/TORRACAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Torterra",
    img: "pokemon/TORTERRA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Totodile",
    img: "pokemon/TOTODILE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Toucannon",
    img: "pokemon/TOUCANNON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Toxapex",
    img: "pokemon/TOXAPEX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Toxel",
    img: "pokemon/TOXEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Toxicroak",
    img: "pokemon/TOXICROAK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Toxtricity",
    img: "pokemon/TOXTRICITY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tranquill",
    img: "pokemon/TRANQUILL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Trapinch",
    img: "pokemon/TRAPINCH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Treecko",
    img: "pokemon/TREECKO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Trevenant",
    img: "pokemon/TREVENANT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tropius",
    img: "pokemon/TROPIUS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Trubbish",
    img: "pokemon/TRUBBISH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Trumbeak",
    img: "pokemon/TRUMBEAK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tsareena",
    img: "pokemon/TSAREENA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Turtonator",
    img: "pokemon/TURTONATOR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Turtwig",
    img: "pokemon/TURTWIG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tympole",
    img: "pokemon/TYMPOLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tynamo",
    img: "pokemon/TYNAMO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Typenull",
    img: "pokemon/TYPENULL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Typhlosion",
    img: "pokemon/TYPHLOSION.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tyranitar",
    img: "pokemon/TYRANITAR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tyrantrum",
    img: "pokemon/TYRANTRUM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tyrogue",
    img: "pokemon/TYROGUE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Tyrunt",
    img: "pokemon/TYRUNT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Umbreon",
    img: "pokemon/UMBREON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Unfezant",
    img: "pokemon/UNFEZANT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Unown",
    img: "pokemon/UNOWN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ursaluna",
    img: "pokemon/URSALUNA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Ursaring",
    img: "pokemon/URSARING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Urshifu",
    img: "pokemon/URSHIFU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Uxie",
    img: "pokemon/UXIE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vanillish",
    img: "pokemon/VANILLISH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vanillite",
    img: "pokemon/VANILLITE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vanilluxe",
    img: "pokemon/VANILLUXE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vaporeon",
    img: "pokemon/VAPOREON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Varoom",
    img: "pokemon/VAROOM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Veluza",
    img: "pokemon/VELUZA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Venipede",
    img: "pokemon/VENIPEDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Venomoth",
    img: "pokemon/VENOMOTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Venonat",
    img: "pokemon/VENONAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Venusaur",
    img: "pokemon/VENUSAUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vespiquen",
    img: "pokemon/VESPIQUEN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vibrava",
    img: "pokemon/VIBRAVA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Victini",
    img: "pokemon/VICTINI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Victreebel",
    img: "pokemon/VICTREEBEL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vigoroth",
    img: "pokemon/VIGOROTH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vikavolt",
    img: "pokemon/VIKAVOLT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vileplume",
    img: "pokemon/VILEPLUME.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Virizion",
    img: "pokemon/VIRIZION.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vivillon",
    img: "pokemon/VIVILLON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Volbeat",
    img: "pokemon/VOLBEAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Volcanion",
    img: "pokemon/VOLCANION.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Volcarona",
    img: "pokemon/VOLCARONA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Voltorb",
    img: "pokemon/VOLTORB.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vullaby",
    img: "pokemon/VULLABY.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Vulpix",
    img: "pokemon/VULPIX.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wailmer",
    img: "pokemon/WAILMER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wailord",
    img: "pokemon/WAILORD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Walkingwake",
    img: "pokemon/WALKINGWAKE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Walrein",
    img: "pokemon/WALREIN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wartortle",
    img: "pokemon/WARTORTLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Watchog",
    img: "pokemon/WATCHOG.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wattrel",
    img: "pokemon/WATTREL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Weavile",
    img: "pokemon/WEAVILE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Weedle",
    img: "pokemon/WEEDLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Weepinbell",
    img: "pokemon/WEEPINBELL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Weezing",
    img: "pokemon/WEEZING.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Whimsicott",
    img: "pokemon/WHIMSICOTT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Whirlipede",
    img: "pokemon/WHIRLIPEDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Whiscash",
    img: "pokemon/WHISCASH.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Whismur",
    img: "pokemon/WHISMUR.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wigglytuff",
    img: "pokemon/WIGGLYTUFF.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wiglett",
    img: "pokemon/WIGLETT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wimpod",
    img: "pokemon/WIMPOD.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wingull",
    img: "pokemon/WINGULL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wishiwashi",
    img: "pokemon/WISHIWASHI.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wobbuffet",
    img: "pokemon/WOBBUFFET.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wochien",
    img: "pokemon/WOCHIEN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Woobat",
    img: "pokemon/WOOBAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wooloo",
    img: "pokemon/WOOLOO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wooper",
    img: "pokemon/WOOPER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wormadam",
    img: "pokemon/WORMADAM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wugtrio",
    img: "pokemon/WUGTRIO.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wurmple",
    img: "pokemon/WURMPLE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wynaut",
    img: "pokemon/WYNAUT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Wyrdeer",
    img: "pokemon/WYRDEER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Xatu",
    img: "pokemon/XATU.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Xerneas",
    img: "pokemon/XERNEAS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Xurkitree",
    img: "pokemon/XURKITREE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Yamask",
    img: "pokemon/YAMASK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Yamper",
    img: "pokemon/YAMPER.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Yanma",
    img: "pokemon/YANMA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Yanmega",
    img: "pokemon/YANMEGA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Yungoos",
    img: "pokemon/YUNGOOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Yveltal",
    img: "pokemon/YVELTAL.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zacian",
    img: "pokemon/ZACIAN.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zamazenta",
    img: "pokemon/ZAMAZENTA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zangoose",
    img: "pokemon/ZANGOOSE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zapdos",
    img: "pokemon/ZAPDOS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zarude",
    img: "pokemon/ZARUDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zebstrika",
    img: "pokemon/ZEBSTRIKA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zekrom",
    img: "pokemon/ZEKROM.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zeraora",
    img: "pokemon/ZERAORA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zigzagoon",
    img: "pokemon/ZIGZAGOON.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zoroark",
    img: "pokemon/ZOROARK.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zorua",
    img: "pokemon/ZORUA.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zubat",
    img: "pokemon/ZUBAT.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zweilous",
    img: "pokemon/ZWEILOUS.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },
{
    name: "Zygarde",
    img: "pokemon/ZYGARDE.png",
    opts: {
      GENERATION: ["gen1"],
        TYPE: ["Normal", "Normal"],
    }
  },



];