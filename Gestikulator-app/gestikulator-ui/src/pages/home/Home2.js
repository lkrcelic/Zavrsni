import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Achievements from "../../components/Achievements";
import achievements from "../../components/achievemenetsConsts";
import activities from "../../components/activityConsts";

import Activities from "../../components/Activity.js";
import {useNavigate} from "react-router-dom";
import allLevels from "../../components/levelConsts";
import useModal from "../../useModal";
import {styled} from "@mui/system";
import {Avatar, CardHeader, Paper} from "@mui/material";
import Badge from "@mui/material/Badge";
import {AiFillFire} from "react-icons/ai";

// ... (other imports)
const CustomGrid = styled(Grid)(({theme}) => ({
  display: 'grid',
  height: '100vh',
  gridTemplateColumns: '1fr 3fr',
  gridTemplateRows: 'auto 1fr auto',
  gridTemplateAreas: `
    "avatar . . info"
    "sidebar content content content"
    "sidebar content content content"
    "settings . . start"
  `,
}));

const Home = () => {
  // ... (other code)
  const {
    isShowingFunFact,
    toggle1,
    toggleFunFact,
  } = useModal();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/quizes`;
    navigate(path);
  };


  const [currentLevel, setcurrentLevel] = useState(0);
  const [levels] = useState(allLevels);
  const [subLevelIndexSelected, setSubLevelIndexSelected] = useState();

  const handleLevelClick = (value) => {
    setcurrentLevel(value);
  };

  const handleOnStartClick = (value) => {
    //todo api call
    routeChange()
  };

  return (
    <CustomGrid container>
      <Box gridArea="header">
        <Paper elevation={1}>
          <h2>Header</h2>
        </Paper>
      </Box>
      <Box gridArea="sidebar">
        <div className="user">
          <CardHeader
            sx={{padding: "10px", paddingLeft: "20px"}}
            avatar={
              <Badge
                anchorOrigin={{horizontal: "right", vertical: "bottom"}}
                badgeContent={
                  <div style={{position: "relative"}}>
                    <AiFillFire color="red" fontSize="2em"/>
                    <span style={{position: "absolute", color: "red"}}>
                      2
                    </span>
                  </div>
                }
              >
                <Avatar
                  alt="Nikola Tomažin"
                  sx={{width: 90, height: 90}}
                  src="../assets/test.jpg"
                />
              </Badge>
            }
            titleTypographyProps={{
              fontFamily: "inherit",
              fontSize: "25px",
              fontWeight: 500,
            }}
            title="Bok, Nikola"
          />
        </div>
        <div className="izazovi">
          <Achievements achievements={achievements}/>
        </div>

        <div className="aktivnost">
          <Activities activities={activities}/>
        </div>
      </Box>
      <Box gridArea="content">
        <Paper elevation={1}>
          <h2>Main Content</h2>
        </Paper>
      </Box>
      <Box gridArea="footer">
        <Paper elevation={1}>
          <h2>Footer</h2>
        </Paper>
      </Box>
    </CustomGrid>
  );
};
export default Home;
