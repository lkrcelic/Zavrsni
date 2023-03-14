import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import { color } from "@mui/system";

export default function Achievements(props) {
  const listItems = props.achievements.map((achievement) => (
    <ListItem>
      <ListItemButton
        disableTouchRipple
        selectedItemStyle={{ backgroundColor: "white" }}
        sx={{
          backgroundColor: "white",
          borderRadius: "16px",
          paddingLeft: "25px",
        }}
      >
        <ListItemText
          primaryTypographyProps={{
            color: "#121212",
            fontWeight: 500,
            fontSize: "18px",
            fontFamily: "inherit",
          }}
          primary={achievement.name}
        />
        <ListItemIcon sx={{ color: "#121212" }}>
          {achievement.icon}
        </ListItemIcon>
      </ListItemButton>
    </ListItem>
  ));
  return (
    <>
      <Typography
        align="left"
        variant="h4"
        sx={{ fontFamily: "inherit", marginLeft: "20px", marginTop: "15px" }}
      >
        Izazovi
      </Typography>
      <Box
        sx={{
          position: "relative",
          margin: "auto",
          marginTop: "5px",
          height: "75%",
          width: "90%",
          bgcolor: "#FFDD71",
          overflow: "scroll",
          boxShadow: 1,
          borderRadius: "10px",
        }}
      >
        <nav
          style={{ position: "absolute", height: "90%", width: "100%" }}
          aria-label="solved"
        >
          <List>{listItems}</List>
        </nav>
      </Box>
    </>
  );
}
