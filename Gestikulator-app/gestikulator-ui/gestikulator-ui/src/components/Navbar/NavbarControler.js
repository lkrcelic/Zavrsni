import NavbarLevel from "./NavbarLevel";
import Navbar from "./Navbar";


const NavbarControler = (props) => {
  return (
        props.type === 1 ? <Navbar /> : <NavbarLevel />
  );
};

export default NavbarControler;
