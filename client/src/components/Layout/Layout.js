import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Navbar from "../Navbar/Navbar";
import Homepage from "../Homepage/Homepage";
import BackendExplanation from "../BackendExplanation/BackendExplanation";
import ReactBasics from "../ReactBasics/ReactBasics";
import ReduxBasics from "../ReduxBasics/ReduxBasics";
import NotFound from "../NotFound/NotFound";

const Layout = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/backend-routes" component={BackendExplanation} />
          <Route exact path="/react-basics" component={ReactBasics} />
          <Route exact path="/redux-basics" component={ReduxBasics} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default Layout;
