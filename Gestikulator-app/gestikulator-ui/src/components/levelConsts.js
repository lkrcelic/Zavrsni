import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Battery3Bar from "@mui/icons-material/Battery3Bar";

const levels = [
  {
    id: 0, // id levela
    razina: "Osnove",
    predeno: "100%",
    ikona: <CheckBoxIcon/>,
    podrazine: [
      {id: 0, podRazina: "Abeceda", predeno: true},
      {id: 1, podRazina: "Pozdravi", predeno: true},
      {id: 2, podRazina: "Dani u tjednu", predeno: true},
      {id: 3, podRazina: "Obitelj", predeno: true},
    ],
  },
  {
    id: 1,
    razina: "Lumen demo",
    predeno: "0%",
    ikona: <Battery3Bar/>,
    podrazine: [
      {podRazina: "Godina", predeno: false},
      {podRazina: "Gluh", predeno: false},
      {podRazina: "Ime", predeno: false},
    ],
  },
  {
    id: 2,
    razina: "Hrana i piće",
    predeno: "0%",
    ikona: <CheckBoxOutlineBlankIcon/>,
    podrazine: [
      {podRazina: "Voće", predeno: false},
      {podRazina: "Povrće", predeno: false},
      {podRazina: "Slatkiši", predeno: false},
      {podRazina: "Meso", predeno: false},
      {podRazina: "Piće", predeno: false},
    ],
  },

];

export default levels;
