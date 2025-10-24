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
    img: "xtpTVNW.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Kunishige Rokuhira",
    img: "qO5mmAz.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Togo Shiba",
    img: "7viWiad.png",
    opts: {
      arc: ["vssojo", "rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Hinao",
    img: "2GNsmbS.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Hatshaku",
    img: "f2WkobE.png",
    opts: {
      arc: ["vssojo", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Uran",
    img: "ucXJg6N.png",
    opts: {
      arc: ["vssojo", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Hokuto",
    img: "8YRkm9f.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Char Kyonagi",
    img: "IppOO8J.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Char's Mother",
    img: "zuhdntJ.png",
    opts: {
      arc: ["vssojo"],
      importance: ["minor"]
    }
  },
  {
    name: "Soshiro Azami",
    img: "KOQNpB4.png",
    opts: {
      arc: ["vssojo", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Arm Sorcerer",
    img: "NxPFnEw.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Chanting Sorcerer",
    img: "3KmOhk2.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Ikuto Hagiwara",
    img: "hzcfiVh.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Kazane Machi",
    img: "5JhTG5P.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Shiyumi Harima",
    img: "fIggIe2.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Hajime Kugara",
    img: "ZK76ypg.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Kiyohiko Uzuki",
    img: "vGEjMvo.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Makoto Kasahara",
    img: "VB9LGvS.png",
    opts: {
      arc: ["vssojo"],
      importance: ["support"]
    }
  },
  {
    name: "Genichi Sojo",
    img: "GVExryI.png",
    opts: {
      arc: ["vssojo"],
      importance: ["antag"]
    }
  },
  {
    name: "Norisaku Madoka",
    img: "V2ISpIY.png",
    opts: {
      arc: ["vssojo"],
      importance: ["antag"]
    }
  },
  {
    name: "Norisaku's Sister",
    img: "xhUPpvD.png",
    opts: {
      arc: ["vssojo"],
      importance: ["minor"]
    }
  },
  {
    name: "Clone Sorcerer",
    img: "RnQQGl8.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Trauma Sorcerer",
    img: "H64uslN.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Trauma Sorcerer's Brother",
    img: "aNsiAHk.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Oni Mask Sorcerer",
    img: "MA6Vo2c.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Mohawk Sorcerer 1",
    img: "hT8xNB5.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Mohawk Sorcerer 2",
    img: "hiHEICg.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Visor Sorcerer",
    img: "1h7DH9p.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Samurai Helmet Sorcerer",
    img: "5iT9NsR.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Shack-Guarding Sorcerers",
    img: "qTdKq7G.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Plant Sorcerer",
    img: "8X8m4Wc.png",
    opts: {
      arc: ["vssojo"],
      importance: ["fodder"]
    }
  },
  {
    name: "Hakuri Sazanami",
    img: "NUKljRR.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Hiyuki Kagari",
    img: "iMryRnm.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Tafuku Mihara",
    img: "YEFMarq.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["support"]
    }
  },
  {
    name: "Soya Sazanami",
    img: "deFwapC.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Tenri Sazanami",
    img: "muN2eQa.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Tamaki Sazanami",
    img: "ZCo5Jbf.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Enji Sazanami",
    img: "ZSRvjpW.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kyora Sazanami",
    img: "5AEUxy1.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["antag"]
    }
  },
  {
    name: "Mr. Inazuma",
    img: "CrfwZr4.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["support"]
    }
  },
  {
    name: "Mr. Inazuma's Sister",
    img: "JI9vKPf.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Bidding Guy",
    img: "ZohXa72.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Bidding Girl",
    img: "AicKz4f.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Rakuzaichi Bald Guy",
    img: "FvdxgHv.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Sunglasses Guard",
    img: "IOBYPeU.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Chandelier Sorcerers",
    img: "dn4XtkX.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["fodder"]
    }
  },
  {
    name: "Yura",
    img: "VdgjXQ6.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Ice Lady",
    img: "5bqE1dT.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Sora Sazanami",
    img: "EWei7uJ.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "First Sazanami Patriarch",
    img: "SAtv0Rk.png",
    opts: {
      arc: ["rakuzaichi"],
      importance: ["minor"]
    }
  },
  {
    name: "Kasen",
    img: "6vlWpBX.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor", "antag"]
    }
  },
  {
    name: "Ichiki",
    img: "dX8AT8n.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Yatsuru",
    img: "a0gGyip.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Izaru",
    img: "OF93GDz.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Giraffe Kamunabi Leader",
    img: "ME4mYHu.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Earlobes Kamunabi Leader",
    img: "2fpdHSl.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Eyepatch Kamunabi Leader",
    img: "gUG28Js.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kudo",
    img: "LGNhiIF.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Kyora's Wife",
    img: "8DIiMR2.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Yoji Uruha",
    img: "iqL7JOg.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Ibuki Misaka",
    img: "uektkHV.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Fushimi",
    img: "nZQurY3.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Pinkie",
    img: "U1s33u9.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Subaru",
    img: "YxMVVfi.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sword Saint",
    img: "OICofdV.png",
    opts: {
      arc: ["rakuzaichi", "SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Hiruhiko",
    img: "IpLlHau.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Derek Hishaku",
    img: "D9PTz6W.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Seiichi Samura",
    img: "lnsMxMQ.png",
    opts: {
      arc: ["SBA"],
      importance: ["support", "antag"]
    }
  },
  {
    name: "Ryo Fuura",
    img: "ep2GVyd.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Sumi",
    img: "VdrS9mH.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Moku",
    img: "pcWW1yi.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Ro",
    img: "gbxGn0X.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Tae",
    img: "HP4E4uQ.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Michiko",
    img: "Rlutz9S.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kuguri",
    img: "IxGK7Xq.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Toto",
    img: "0AGHIHR.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
  {
    name: "Iori Samura",
    img: "jB1oSWa.png",
    opts: {
      arc: ["SBA"],
      importance: ["protag"]
    }
  },
  {
    name: "Ikura",
    img: "dPXhqKv.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
  {
    name: "Yojiro Sengoku",
    img: "FstUW7C.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Itsuo Shirakai",
    img: "dWx0tcQ.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Inori",
    img: "Q612wwO.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kanryu Yoshida",
    img: "TLhar39.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Core Station Vessel",
    img: "oOJiUn5.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
  {
    name: "Kamunabi Commander",
    img: "jJFQddC.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Older Shigyu Brother",
    img: "Lb6vqWM.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Younger Shigyu Brother",
    img: "YHi3raK.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Ishihara",
    img: "lWbv0og.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Kashima",
    img: "XwxIgVM.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Knives Sorcerer",
    img: "CjsqwiQ.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
  {
    name: "Transformation Sorcerer",
    img: "P9DXaye.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
{
    name: "Bingo",
    img: "CX7iWGG.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
{
    name: "Lucas Hishaku",
    img: "MQLGLNP.png",
    opts: {
      arc: ["SBA"],
      importance: ["antag"]
    }
  },
{
    name: "Kiri Shirakai",
    img: "Fi8ugRt.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  },
{
    name: "Goggles Kamunabi",
    img: "qLob9rh.png",
    opts: {
      arc: ["SBA"],
      importance: ["minor"]
    }
  },
{
    name: "Comb Kamunabi",
    img: "ZnnDZFT.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
{
    name: "Chonmage Kamunagi",
    img: "aOG3NkY.png",
    opts: {
      arc: ["SBA"],
      importance: ["fodder"]
    }
  },
{
    name: "Natsuki Misaka",
    img: "IX1p6e9.png",
    opts: {
      arc: ["SBA"],
      importance: ["support"]
    }
  }
];
