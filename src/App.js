import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddShop from "./components/shops/AddShop";
import EditShop from "./components/shops/EditShop";
import Shop from "./components/shops/Shop";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shops/addshop" component={AddShop} />
          <Route exact path="/shops/edit/:id" component={EditShop} />
          <Route exact path="/shops/:id" component={Shop} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
