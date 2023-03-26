import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

//import React, { useRef, useState } from "react";

export default function Levels(props) {
  const [selected, setSelected] = React.useState();
  // const scrl = useRef(null);

  // const [scrollX, setscrollX] = useState(0);
  // const [scrolEnd, setscrolEnd] = useState(false);

  //https://www.sonahangrai.com/react/horizontal-scroll-with-button-in-react/
  // const scrollCheck = () => {
  //   setscrollX(scrl.current.scrollLeft);
  //   if (
  //     Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
  //     scrl.current.offsetWidth
  //   ) {
  //     setscrolEnd(true);
  //   } else {
  //     setscrolEnd(false);
  //   }
  // };

  // const slide = (shift) => {
  //   console.log(scrl.current.scrollLeft)

  //   scrl.current.scrollLeft += shift;
  //   console.log(scrl.current.scrollLeft)

  //   setscrollX(scrollX + shift);

  //   if (
  //     Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
  //     scrl.current.offsetWidth
  //   ) {
  //     setscrolEnd(true);
  //   } else {
  //     setscrolEnd(false);
  //   }
  // };

  const listItems = props.levels.map((level, index) => (
    <ListItem
      className="levels-list"
      sx={{
        backgroundColor: "#FB8C00",
        borderRadius: "40px",
        height: "200px",
        width: "200px",
        margin: "30px 25px 30px 25px",
        border: `${props.currentLevel === index ? "5px solid black" : ''} `
      }}
    >
      <ListItemButton
        className="buttonLevel"
        disabled={level.predeno === "100%"}
        onClick={() => {
          setSelected(index)
          props.onClick(level.id)
        }}
      >
        <ListItemText
          sx={{ textAlign: "center" }}
          primaryTypographyProps={{
            fontStyle: "normal",
            fontWeight: "Bold",
            fontSize: "25px",
            lineHeight: "29px",
            color: "#121212",
            fontFamily: "inherit",
            opacity: 1,
          }}
          primary={level.razina}
        />
      </ListItemButton>
    </ListItem>
  ));
  return (
    <>
      <h1 style={{ marginLeft: "30px" }}>Odaberi razinu</h1>
      <Box
        sx={{
          width: "100%",
          maxWidth: 1500,
          maxHeight: "350px",
          align: "center",
          bgcolor: "#FFEEB8",
          overflow: "auto",
          boxShadow: 1,
          paddingLeft: "30px",
          borderRadius: "42px",
        }}
      >
        <nav aria-label="solved">

          {/* <button className="prev" onClick={() => slide(-100)}>
            <i className="fa fa-angle-left"></i>
          </button>

          <button className="next" onClick={() => slide(100)}>
            <i className="fa fa-angle-right"></i>
          </button> */}

          {/* <List ref={scrl} onScroll={scrollCheck} component={Stack} direction="row"> */}
          <List component={Stack} direction="row">
            {listItems}
          </List>
        </nav>
      </Box>
    </>
  );
}
