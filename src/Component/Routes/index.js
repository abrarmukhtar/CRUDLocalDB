import React from "react";
import Portfolio from "../Portfolio";
import AboutUs from "../AboutUs";
import ContactUs from "../ContactUs";
import { Route, Switch } from "react-router-dom";
// import AddUsers from "../Users";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Portfolio}></Route>
      <Route  path="/portfolio" component={Portfolio}></Route>
      <Route  path="/aboutUs" component={AboutUs}></Route>
      <Route  path="/ContactUs" component={ContactUs}></Route>
      {/* <Route  path="/users/add" component={AddUsers}></Route> */}
    </Switch>
  );
}
