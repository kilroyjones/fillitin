import { writable } from "svelte/store";

export const updateFlag = writable(false);
export const percentageClozed = writable(0);
export const includePunctuation = writable(false);
export const selectSimilar = writable(false);
export const regex = writable(/(\s+)|([\.\;\!\?\,\:\"])/);
export const step = writable(0);

export const groupSameWords = writable(false);
export const addHeader = writable(true);
export const finalizeFontFamily = writable({ font: "Anonymous Pro", type: "monospace" });
export const finalizeFontSize = writable(20);

export const fontList = writable([
  "Arial",
  "Arial Black",
  "Bahnschrift",
  "Calibri",
  "Cambria",
  "Cambria Math",
  "Candara",
  "Comic Sans MS",
  "Consolas",
  "Constantia",
  "Corbel",
  "Courier New",
  "Ebrima",
  "Franklin Gothic Medium",
  "Gabriola",
  "Gadugi",
  "Georgia",
  "HoloLens MDL2 Assets",
  "Impact",
  "Ink Free",
  "Javanese Text",
  "Leelawadee UI",
  "Lucida Console",
  "Lucida Sans Unicode",
  "Malgun Gothic",
  "Marlett",
  "Microsoft Himalaya",
  "Microsoft JhengHei",
  "Microsoft New Tai Lue",
  "Microsoft PhagsPa",
  "Microsoft Sans Serif",
  "Microsoft Tai Le",
  "Microsoft YaHei",
  "Microsoft Yi Baiti",
  "MingLiU-ExtB",
  "Mongolian Baiti",
  "MS Gothic",
  "MV Boli",
  "Myanmar Text",
  "Nirmala UI",
  "Palatino Linotype",
  "Segoe MDL2 Assets",
  "Segoe Print",
  "Segoe Script",
  "Segoe UI",
  "Segoe UI Historic",
  "Segoe UI Emoji",
  "Segoe UI Symbol",
  "SimSun",
  "Sitka",
  "Sylfaen",
  "Symbol",
  "Tahoma",
  "Times New Roman",
  "Trebuchet MS",
  "Verdana",
  "Webdings",
  "Wingdings",
  "Yu Gothic",
]);
export const parsedText = writable([
  {
    word: "Lorem",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "Ipsum",
    selected: false,
  },
  {
    word: "is",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "simply",
    selected: false,
  },
  {
    word: "dummy",
    selected: false,
  },
  {
    word: "of",
    selected: false,
  },
  {
    word: "the",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "printing",
    selected: false,
  },
  {
    word: "and",
    selected: false,
  },
  {
    word: "typesetting",
    selected: false,
  },
  {
    word: "industry.",
    selected: false,
  },
  {
    word: "Lorem",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "Ipsum",
    selected: false,
  },
  {
    word: "has",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "been",
    selected: false,
  },
  {
    word: "the",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "industry's",
    selected: false,
  },
  {
    word: "standard",
    selected: false,
  },
  {
    word: "dummy",
    selected: false,
  },
  {
    word: "text",
    selected: false,
  },
  {
    word: "ever",
    selected: false,
  },
  {
    word: "since",
    selected: false,
  },
  {
    word: "the",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "1500s,",
    selected: false,
  },
  {
    word: "when",
    selected: false,
  },
  {
    word: "an",
    selected: false,
  },
  {
    word: "unknown",
    selected: false,
  },
  {
    word: "printer",
    selected: false,
  },
  {
    word: "took",
    selected: false,
  },
  {
    word: "a",
    selected: false,
  },
  {
    word: "galley",
    selected: false,
  },
  {
    word: "of",
    selected: false,
  },
  {
    word: "type",
    selected: false,
  },
  {
    word: "and",
    selected: false,
  },
  {
    word: "scrambled",
    selected: false,
  },
  {
    word: "it",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "to",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "make",
    selected: false,
  },
  {
    word: "a",
    selected: false,
  },
  {
    word: "type",
    selected: false,
  },
  {
    word: "specimen",
    selected: false,
  },
  {
    word: "book.",
    selected: false,
  },
  {
    word: "It",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "has",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "survived",
    selected: false,
  },
  {
    word: "not",
    selected: false,
  },
  {
    word: "only",
    selected: false,
  },
  {
    word: "five",
    selected: false,
  },
  {
    word: "centuries,",
    selected: false,
  },
  {
    word: "but",
    selected: false,
  },
  {
    word: "also",
    selected: false,
  },
  {
    word: "the",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "leap",
    selected: false,
  },
  {
    word: "into",
    selected: false,
  },
  {
    word: "electronic",
    selected: false,
  },
  {
    word: "typesetting,",
    selected: false,
  },
  {
    word: "remaining",
    selected: false,
  },
  {
    word: "essentially",
    selected: false,
  },
  {
    word: "unchanged.",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "It",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "was",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "popularised",
    selected: false,
  },
  {
    word: "in",
    selected: false,
  },
  {
    word: "the",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "1960s",
    selected: false,
  },
  {
    word: "with",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "the",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "release",
    selected: false,
  },
  {
    word: "of",
    selected: false,
  },
  {
    word: "Letraset",
    selected: false,
  },
  {
    word: "sheets",
    selected: false,
  },
  {
    word: "containing",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "Lorem",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "Ipsum",
    selected: false,
  },
  {
    word: "passages,",
    selected: false,
  },
  {
    word: "and",
    selected: false,
  },
  {
    word: "more",
    selected: false,
  },
  {
    word: "recently",
    selected: false,
  },
  {
    word: "with",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "desktop",
    selected: false,
  },
  {
    word: "publishing",
    selected: false,
  },
  {
    word: "software",
    selected: false,
  },
  {
    word: "like",
    selected: false,
  },
  {
    word: "Aldus",
    selected: false,
  },
  {
    word: "PageMaker",
    selected: false,
  },
  {
    word: "including",
    selected: false,
  },
  {
    word: "versions",
    selected: false,
  },
  {
    word: "of",
    selected: false,
  },
  {
    word: "Lorem",
    selected: true,
    color: "#ff5d73",
  },
  {
    word: "Ipsum.",
    selected: false,
  },
]);
