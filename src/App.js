// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./Component/Navigation";
// import Home from "./Component/Home";

import Footer from "./Component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <NavBar />
  );
}

export default App;
