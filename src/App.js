import React from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";
import CartProduct from "./components/CartProduct/CartProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/checkout">
        <CartProduct></CartProduct>
        </Route>
        <Route path="*">
        <NoMatch></NoMatch>
        </Route>
      </Switch>
     
    </Router>
  );
}

export default App;
