import React from "react";
import "./App.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/shop" exat component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
