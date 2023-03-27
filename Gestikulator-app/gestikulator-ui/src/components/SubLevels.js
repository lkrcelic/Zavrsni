import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

export default function SubLevels(props) {
  const [selected, setSelected] = React.useState();

  const listItems = props.subLevels.map((subLevel, index) => (
    <ListItem
      sx={{
        backgroundColor: "#FB8C00",
        borderRadius: "40px",
        height: "200px",
        width: "200px",
        margin: "30px 25px 30px 25px",
        border: `${selected === index ? "5px solid black" : ''} `
      }}
    >
      <ListItemButton
        className="buttonLevel"
        disabled={subLevel.predeno}
        onClick={() => {
          setSelected(index)
          props.setSubLevelIndexSelected(index)
        }}
      >
        <ListItemText
          sx={{textAlign: "center"}}
          primaryTypographyProps={{
            fontStyle: "normal",
            fontWeight: "Bold",
            fontSize: "25px",
            lineHeight: "29px",
            color: "#121212",
            fontFamily: "inherit",
            opacity: 1,
          }}
          primary={subLevel.podRazina}
        />
      </ListItemButton>
    </ListItem>
  ));
  return (
    <>
      <h1 style={{marginLeft: "30px"}}>Odaberi podrazinu</h1>

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
          <List component={Stack} direction="row">
            {listItems}
          </List>
        </nav>
      </Box>
    </>
  );
}
