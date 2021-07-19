import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TableComp from "./components/TableComp";
import Cart from "./components/Cart";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <TableComp cartCount={cartCount} setCartCount={setCartCount} />
          </Route>
          <Route exact path="/cart">
            <Cart cartCount={cartCount} setCartCount={setCartCount} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
