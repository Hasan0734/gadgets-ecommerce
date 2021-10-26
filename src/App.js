import React, { createContext } from "react";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NoMatch from "./components/NoMatch/NoMatch";

import { useState } from "react";
import CartProducts from "./components/CartProducts/CartProducts";


export const ProductContext = createContext()
function App() {
  const [products, setProducts] = useState([]);

  const [combination, setCombination] = useState([]);



  return (
    <ProductContext.Provider value={{ products, setProducts, combination, setCombination }}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/checkout">
            <CartProducts></CartProducts>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>

      </Router>
    </ProductContext.Provider>
  );
}

export default App;
