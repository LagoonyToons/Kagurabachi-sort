dataSetVersion = "2025-06-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Story Arc",
    key: "arc",
    tooltip: "Check this to restrict to the characters that are relevant in certain arcs.",
    checked: true,
    sub: [
      { name: "Vs. Sojo", key: "vssojo" },
      { name: "Rakuzaichi", key: "rakuzaichi" },
      { name: "Sword Bearer Assassination", key: "SBA" }
        ]
  },
  {
    name: "Filter by Character Importance",
    key: "importance",
    tooltip: "Check this to restrict to characters based on their importance to the story.",
    checked: true,
    sub: [
	{ name: "Main Characters", key: "protag" }, 
	{ name: "Antagonists", key: "antag" },
	{ name: "Supporting Characters", key: "support" },
	{ name: "Minor Characters", key: "minor"},
	{ name: "Fodder", key: "fodder", checked: false },
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Chihiro Rokuhira",
    img: "5/5f/Chihiro_Rokuhira_Colored_Portrait.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Kunishige Rokuhira",
    img: "4/45/Kunishige_Rokuhira_Colored_Portrait.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Togo Shiba",
    img: "8/8d/Togo_Shiba_Colored_Portrait.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Hinao",
    img: "e/ed/Hinao_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Hatshaku",
    img: "2/27/Hishaku_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Jane Hishaku",
    img: "9/94/Hishaku_Sorcerer_2_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["minor"]
    }
  },
  {
    name: "Samurai Hishaku",
    img: "c/ce/Hishaku_Sorcerer_3_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Char Kyonagi",
    img: "1/14/Char_states_that_she's_happy_today.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Char's Mother",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["minor"]
    }
  },
  {
    name: "Soshiro Azami",
    img: "ptGp0x4.png",
    opts: {
      arc: ["vssojo", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Arm Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Chanting Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Ikuto Hagiwara",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Kazane Machi",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Shiyumi Harima",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Hajime Kugara",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Kiyohiko Uzuki",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Makoto Kasahara",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Genichi Sojo",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["antag"]
    }
  },
  {
    name: "Norisaku Madoka",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["antag"]
    }
  },
  {
    name: "Norisaku's Sister",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["minor"]
    }
  },
  {
    name: "Clone Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Trauma Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Trauma Sorcerer's Brother",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Oni Mask Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Mohawk Sorcerers",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Visor Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Samurai Helmet Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Shack-Guarding Sorcerers",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Plant Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Hakuri Sazanami",
    img: "vBKdDm4.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Hiyuki Kagari",
    img: "A7ZnuHo.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Tafuku Mihara",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["support"]
    }
  },
  {
    name: "Soya Sazanami",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Tenri Sazanami",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Tamaki Sazanami",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Enji Sazanami",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kyora Sazanami",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Mr. Inazuma",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["support"]
    }
  },
  {
    name: "Mr. Inazuma's Sister",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Bidding Guy",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Bidding Girl",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Bald Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Sunglasses Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Chandelier Sorcerers",
    img: "P4JZ2it.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Yura",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Ice Lady",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Sora Sazanami",
    img: "P4JZ2it.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "First Sazanami Patriarch",
    img: "P4JZ2it.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Beard Kamunabi",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Ichiki",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Woman Kamunabi Leader",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Izaru",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Giraffe Kamunabi Leader",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sideburns Kamunabi Leader",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Eyepatch Kamunabi Leader",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kudo",
    img: "sgZPf11.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Kyora's Wife",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Yoji Uruha",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Misaka",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Fushimi",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Pinkie",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Subaru",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sword Saint",
    img: "P4JZ2it.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Hiruhiko",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Derek Hishaku",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Seiichi Samura",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Ryo Fuura",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sumi",
    img: "8UX7hKE.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Moku",
    img: "OhaDcnc.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Ro",
    img: "MgzqjFK.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Tae",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kuguri",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Toto",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Iori Samura",
    img: "ohmetZh.png",
    opts: {
      arc: ["SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Ikura",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Yojiro Sengoku",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Itsuo Shirakai",
    img: "sgZPf11.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Inori",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kanryu Yoshida",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Surveillance Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Commander",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Older Shigyu Brother",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Younger Shigyu Brother",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Ishihara",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Kashima",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Knives Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Transformation Sorcerer",
    img: "P4JZ2it.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  }
];
