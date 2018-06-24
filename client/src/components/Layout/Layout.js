import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./Layout.css";

// components
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Register from "../auth/Register";
import Login from "../auth/Login";

const Layout = props => {
  return (
    <Router>
      <div className="layout">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
