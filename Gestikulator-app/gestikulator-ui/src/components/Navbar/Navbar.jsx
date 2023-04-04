import {useEffect, useRef, useState} from "react";
import {Button, MenuItem, MenuList, Paper, Popover} from "@mui/material";
import {FaHamburger} from "react-icons/fa";
import ComboBox from "../ComboBox";

import "./_navbar.css";

const MOBILE_WIDTH_THRESHOLD = 800;

const Navbar = () => {
  const [mobileMode, setMobileMode] = useState(
    window.innerWidth < MOBILE_WIDTH_THRESHOLD
  );
  const [anchorEl, setAnchorEl] = useState(null);

  const menuButtonRef = useRef(null);

  function handleMenuClick() {
    setAnchorEl(menuButtonRef.current);
  }

  function handleMenuClose() {
    setAnchorEl(null);
  }

  function resizeHandler() {
    if (window.innerWidth < MOBILE_WIDTH_THRESHOLD) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__title">
        <img className="logo" src="logo.svg" alt="logo"></img>
        Gestikulator
      </div>
      {mobileMode ? (
        <div className="navbar__menu">
          <Button
            disableTouchRipple
            ref={menuButtonRef}
            onClick={handleMenuClick}
          >
            <FaHamburger className="navbar__menu__icon"/>
          </Button>
          <Popover
            open={!!anchorEl}
            anchorEl={anchorEl}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Paper>
              <MenuList className="navbar__menu__popover">
                <MenuItem>Rang lista</MenuItem>
                <MenuItem>Moj profil</MenuItem>
                <MenuItem>Odjava</MenuItem>
              </MenuList>
            </Paper>
          </Popover>
        </div>
      ) : (
        <div className="navbar__links">
          <Button
            disableTouchRipple
            class="navbar__links__button navbar__links"
          >
            Rang lista
          </Button>
          <Button
            disableTouchRipple
            class="navbar__links__button navbar__links"
          >
            Moj profil
          </Button>

          <ComboBox/>

          <Button
            disableTouchRipple
            class="navbar__links__logout navbar__links"
          >
            Odjava
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
