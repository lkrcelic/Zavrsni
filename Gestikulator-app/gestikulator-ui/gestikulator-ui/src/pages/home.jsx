import Levels from "../components/Levels";
import SubLevels from "../components/SubLevels";
import Dictionary from "../components/Dictionary";
import FunFact from "../components/FunFact";
import Prvi from "../components/Modals/Prvi.js";
import Drugi from "../components/Modals/Drugi.js";
import Treci from "../components/Modals/Treci.js";
import Cetvrti from "../components/Modals/Cetvrti.js";
import Peti from "../components/Modals/Peti.js";

import allLevels from "../components/levelConsts";
import achievements from "../components/achievemenetsConsts";
import activities from "../components/activityConsts";

import useModal from "../useModal";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import SettingsIcon from "@mui/icons-material/Settings";

import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import Achievements from "../components/Achievements.js";
import Activities from "../components/Activity.js";

import React, { useState } from "react";
import { AiFillFire } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    isShowing1,
    isShowing2,
    isShowing3,
    isShowing5,
    isShowingFunFact,
    toggle1,
    toggle2,
    toggle3,
    toggle5,
    toggleFunFact,
  } = useModal();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/quizes`;
    navigate(path);
  };


  const [currentLevel, setcurrentLevel] = useState(0);
  const [levels, setLevels] = useState(allLevels);
  const [subLevelIndexSelected, setSubLevelIndexSelected] = useState();

  const handleLevelClick = (value) => {
    setcurrentLevel(value);
  };

  const handleOnStartClick = (value) => {
    //todo api call
    routeChange()
  };

  return (
    <div class="container">
      <div class="info">
        <div class="user">
          <CardHeader
            sx={{ padding: "10px", paddingLeft: "20px" }}
            avatar={
              <Badge
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                badgeContent={
                  <div style={{ position: "relative" }}>
                    <AiFillFire color="red" fontSize="2em" />
                    <span style={{ position: "absolute", color: "red" }}>
                      2
                    </span>
                  </div>
                }
              >
                <Avatar
                  alt="Nikola Tomažin"
                  sx={{ width: 90, height: 90 }}
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
        <div class="izazovi">
          <Achievements achievements={achievements} />
        </div>

        <div class="aktivnost">
          <Activities activities={activities} />
        </div>

        <Button class="settings" disableTouchRipple>
          <SettingsIcon fontSize="large" sx={{ margin: "auto" }} />
          <span style={{ fontSize: "24px", margin: "5px" }}>Postavke</span>
        </Button>
      </div>

      <div class="razine">
        <Levels
          levels={levels}
          key={levels[currentLevel].id}
          onClick={(value) => handleLevelClick(value)}
          currentLevel={currentLevel}
        />
      </div>

      <div class="podrazine">
        <SubLevels
          className="subLevels-list"
          subLevels={levels[currentLevel].podrazine}
          key={levels[currentLevel].id}
          setSubLevelIndexSelected={setSubLevelIndexSelected}
        />
      </div>

      <div class="start-button">
        <Button disabled={!!!subLevelIndexSelected} onClick={handleOnStartClick}>
          Kreni
        </Button>
      </div>

      <div class="zanimljivost">
      <button 
      className="button-default" 
      onClick={toggleFunFact}
      style={{ position: "absolute", top: "35px", right: "150px" }}
      >Zanimljivost Dana <TipsAndUpdatesIcon />
      </button>
          <FunFact
            isShowing={isShowingFunFact}
            hide={toggleFunFact}
          />
        <button
          style={{ position: "absolute", top: "35px", right: "15px" }}
          className="button-default"
          onClick={toggle1}
        >
          Pomoć <TipsAndUpdatesIcon />
        </button>
        <Prvi
          state={isShowing1}
          openNext={() => (toggle2(), toggle1())}
          close={toggle1}
          num={1}
        />
        <Drugi
          state={isShowing2}
          openNext={() => (toggle3(), toggle2())}
          close={toggle2}
          num={2}
        />
        <Treci
          state={isShowing3}
          openNext={() => (toggle5(), toggle3())}
          close={toggle3}
          num={3}
        />
        <Peti state={isShowing5} close={toggle5} num={4} />

      </div>
    </div>
  );
};
export default Home;
