import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavbarController from "./components/Navbar/NavbarController";


import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import RangList from "./pages/rangList";
import Quiz from "./components/Quiz";
import {ReactNode} from "react";

const routes = [
  {path: '/quizes', element: <Quiz/>},
  {path: '/', element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '/profile', element: <Profile/>},
  {path: '/rank', element: <RangList/>},
];

const App = () => {
  return (
    <Router>
      <NavbarController type="MainScreen"/>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}/>
        ))}
      </Routes>
    </Router>
  );
};

export default App;
