import NavbarLevel from "./NavbarLevel";
import Navbar from "./Navbar";

const NavbarController = ({type}) => {
  if (type === "MainScreen") {
    return <Navbar/>;
  }

  if (type === "Level") {
    return <NavbarLevel/>;
  }

  return null;
};

export default NavbarController;
