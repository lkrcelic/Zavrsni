import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarController from "./components/Navbar/NavbarController";


import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import RangList from "./pages/rangList";
import Quiz from "./components/Quiz";

const App = () => {
  return (
    <Router>
      <NavbarController type={"MainScreen"} />
      <Routes>

        <Route path="/quizes" element={<Quiz></Quiz>} />
        <Route exact path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/profile" element={<Profile></Profile>} />
        <Route path="/rank" element={<RangList></RangList>} />

      </Routes>
    </Router>
  );
};

export default App;
