dataSetVersion = "2025-06-02"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Story Arc",
    key: "arc",
    tooltip: "Check this to restrict to the characters that are relevant in certain arcs.",
    checked: true,
    sub: [
      { name: "Vs. Sojo", key: "vssojo", tooltip: "Relevant characters from chapters 1-18"},
      { name: "Rakuzaichi", key: "rakuzaichi", tooltip: "Relevant characters from chapters 19-44"},
      { name: "Sword Bearer Assassination", key: "SBA", tooltip: "Relevant characters from chapters 45 and onwards"}
        ]
  },
  {
    name: "Filter by Character Importance",
    key: "importance",
    tooltip: "Check this to restrict to characters based on their importance to the story.",
    checked: true,
    sub: [
	{ name: "Main Characters", key: "protag"}, 
	{ name: "Antagonists", key: "antag"},
	{ name: "Supporting Characters", key: "support" },
	{ name: "Minor Characters", key: "minor"},
	{ name: "Fodder", key: "fodder", checked: false},
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Chihiro Rokuhira",
    img: "8/84/Chihiro_Rokuhira_Portrait.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Kunishige Rokuhira",
    img: "d/d0/Kunishige_Rokuhira_Portrait.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Togo Shiba",
    img: "6/6c/Togo_Shiba_Portrait.png",
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
    img: "3/3d/Char_Kyonagi_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Char's Mother",
    img: "2/23/Char%27s_Mother_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["minor"]
    }
  },
  {
    name: "Soshiro Azami",
    img: "1/18/Soshiro_Azami_Portrait.png",
    opts: {
      arc: ["vssojo", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Arm Sorcerer",
    img: "9/90/Engorged_Arms_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Chanting Sorcerer",
    img: "d/d1/Chanting_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Ikuto Hagiwara",
    img: "f/f7/Ikuto_Hagiwara_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Kazane Machi",
    img: "d/dc/Kazane_Machi_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Shiyumi Harima",
    img: "4/4e/Shiyumi_Harima_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Hajime Kugara",
    img: "1/18/Hajime_Kugara_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Kiyohiko Uzuki",
    img: "2/2b/Kiyohiko_Uzuki_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Makoto Kasahara",
    img: "7/7d/Makoto_Kasahara_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Genichi Sojo",
    img: "9/94/Genichi_Sojo_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["antag"]
    }
  },
  {
    name: "Norisaku Madoka",
    img: "8/8b/Norisaku_Madoka_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["antag"]
    }
  },
  {
    name: "Norisaku's Sister",
    img: "3/38/Norisaku%27s_Sister_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["minor"]
    }
  },
  {
    name: "Clone Sorcerer",
    img: "a/a2/Clone_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Trauma Sorcerer",
    img: "0/08/Trauma_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Trauma Sorcerer's Brother",
    img: "5/5f/Trauma_Sorcerer%27s_Brother_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Oni Mask Sorcerer",
    img: "3/33/Oni_Mask_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Mohawk Sorcerer 1",
    img: "c/ce/Tweedledee.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Mohawk Sorcerer 2",
    img: "8/8f/Tweedledum.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Visor Sorcerer",
    img: "b/b6/Visor_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Samurai Helmet Sorcerer",
    img: "f/fd/Samurai_Helmet_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Shack-Guarding Sorcerers",
    img: "5/5e/Shack_Sorcerers_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Plant Sorcerer",
    img: "9/9d/Plant_Sorcerer_Portrait.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Hakuri Sazanami",
    img: "8/84/Hakuri_Sazanami_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Hiyuki Kagari",
    img: "f/f6/Hiyuki_Kagari_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Tafuku Mihara",
    img: "8/81/Tafuku_Mihara_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["support"]
    }
  },
  {
    name: "Soya Sazanami",
    img: "a/a4/Soya_Sazanami_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Tenri Sazanami",
    img: "c/c1/Tenri_Sazanami_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Tamaki Sazanami",
    img: "e/e2/Tamaki_Sazanami_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Enji Sazanami",
    img: "a/a4/Enji_Sazanami_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kyora Sazanami",
    img: "0/03/Kyora_Sazanami_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Mr. Inazuma",
    img: "8/82/Yuu_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["support"]
    }
  },
  {
    name: "Mr. Inazuma's Sister",
    img: "c/c6/Yuu%27s_Sister_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Bidding Guy",
    img: "8/82/Kamunabi_Bidding_Team_Member_1_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Bidding Girl",
    img: "9/98/Kamunabi_Bidding_Team_Member_2_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Rakuzaichi Bald Guy",
    img: "7/7e/Bald_Tattooed_Man_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Sunglasses Guard",
    img: "6/60/Sunglasses_Guard_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Chandelier Sorcerers",
    img: "5/56/Chandelier_Sorcerers_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Yura",
    img: "2/2c/Yura_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Ice Lady",
    img: "9/94/Girl_With_Icy_Skin_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Sora Sazanami",
    img: "f/f7/Sora_Sazanami_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "First Sazanami Patriarch",
    img: "6/60/First_Sazanami_Clan_Head_Portrait.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Beard Kamunabi Leader",
    img: "e/e2/Kamunabi_Leader_1_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Ichiki",
    img: "8/82/Ichiki_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Woman Kamunabi Leader",
    img: "f/ff/Kamunabi_Leader_2_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Izaru",
    img: "6/68/Izaru_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Giraffe Kamunabi Leader",
    img: "8/8d/Kamunabi_Leader_3_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sideburns Kamunabi Leader",
    img: "3/32/Kamunabi_Leader_4_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Eyepatch Kamunabi Leader",
    img: "f/f5/Kamunabi_Leader_5_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kudo",
    img: "2/2d/Kudo_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Kyora's Wife",
    img: "d/d3/Kyora%27s_Wife_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Yoji Uruha",
    img: "8/83/Yoji_Uruha_Portrait.png",
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
    img: "3/32/Fushimi_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Pinkie",
    img: "c/c9/Enchanted_Blade_Wielder_1_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Subaru",
    img: "2/20/Subaru_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sword Saint",
    img: "5/5f/%22Master_Swordsman%22_Portrait.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Hiruhiko",
    img: "a/a2/Hiruhiko_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Derek Hishaku",
    img: "d/d1/Hishaku_Sorcerer_4_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Seiichi Samura",
    img: "4/41/Seiichi_Samura_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Ryo Fuura",
    img: "9/9c/Ryo_Fuura_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sumi",
    img: "f/f8/Sumi_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Moku",
    img: "e/e3/Moku_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Ro",
    img: "8/82/Ro_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Tae",
    img: "9/96/Tae_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kuguri",
    img: "4/4a/Kuguri_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Toto",
    img: "e/e5/Toto_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Iori Samura",
    img: "6/69/Iori_Samura_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Ikura",
    img: "1/1c/Ikura_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Yojiro Sengoku",
    img: "d/d9/Yojiro_Sengoku_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Itsuo Shirakai",
    img: "a/a1/Itsuo_Shirakai_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Inori",
    img: "8/8b/Inori_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kanryu Yoshida",
    img: "2/2a/Kanryu_Yoshida_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Surveillance Sorcerer",
    img: "5/53/Surveillance_Sorcerer_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Commander",
    img: "a/a2/Kamunabi_West_Entrance_Commander_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Older Shigyu Brother",
    img: "f/f9/Older_Shigyu_Brother_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Younger Shigyu Brother",
    img: "5/52/Younger_Shigyu_Brother_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Ishihara",
    img: "3/31/Ishihira_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Kashima",
    img: "7/7c/Kashima_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Knives Sorcerer",
    img: "f/f1/Knives_Sorcerer_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Transformation Sorcerer",
    img: "d/de/Transformation_Sorcerer_Portrait.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  }
];
