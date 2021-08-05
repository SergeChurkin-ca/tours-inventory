import React from "react";
import "./App.css";

import Error from "./pages/Error";
import Home from "./pages/Home";
import TourMenu from "./pages/TourMenu";
import ManageInventory from "./pages/ManageInventory";

import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exat path="/tourmenu" component={TourMenu} />
        <Route exact path="/manageinventory" component={ManageInventory} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
