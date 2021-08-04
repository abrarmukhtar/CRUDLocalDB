// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import NavBar from "./Component/Navigation";
import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUsers from "./Component/Users/AddUsers";
function App() {
  return (
    <div className="App">
      <>
     
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/aboutUs" component={AboutUs}></Route>
        <Route exact path="/ContactUs" component={ContactUs}></Route>
        <Route exact path="/users/add" component={AddUsers}></Route>
      </Switch>
     
  
      <Footer />
      </>
    </div>
  );
}

export default App;
