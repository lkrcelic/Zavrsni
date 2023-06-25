import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {Typography} from "@mui/material";

export default function Activity(props) {
  const listItems = props.activities.map((activity) => (
    <ListItem>
      <ListItemButton
        disableTouchRipple
        sx={{
          display:"flex",
          backgroundColor: "white",
          borderRadius: "16px",
          paddingLeft: "25px",
        }}
      >
        <ListItemText
          primaryTypographyProps={{
            color: "#121212",
            fontWeight: 500,
            fontSize: "16px",
            fontFamily: "inherit",
          }}
          primary={activity.name}
        />
        <ListItemIcon sx={{justifyContent: "flex-end", color: "#121212"}}>{activity.icon}</ListItemIcon>
      </ListItemButton>
    </ListItem>
  ));
  return (
    <>
      <Typography
        align="left"
        variant="h4"
        sx={{fontFamily: "inherit", marginLeft: "20px", marginTop: "10px"}}
      >
        Aktivnost
      </Typography>
      <Box
        sx={{
          position: "relative",
          margin: "auto",
          marginTop: "5px",
          height: "75%",
          width: "90%",
          bgcolor: "#4CAF50",
          overflowY: 'scroll',
          boxShadow: 1,
          borderRadius: "10px",
          '&::-webkit-scrollbar': {
            width: '8px',
            borderRadius: '4px',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '4px',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
          },
        }}
      >
        <nav
          style={{position: "absolute", height: "90%", width: "100%"}}
          aria-label="solved"
        >
          <List>{listItems}</List>
        </nav>
      </Box>
    </>
  );
}
