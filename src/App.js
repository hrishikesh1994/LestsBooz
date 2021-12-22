import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Link,
} from "react-router-dom";
import CartContext from "./context/CartContext";
import home from "./pages/home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  useEffect(async () => {
    let cart = await localStorage.getItem("document");
    cart = JSON.parse(cart);
    if (!cart || cart.length <= 0) {
      setCartCount(null);
      return;
    }
    let check = cart.reduce((a, b) => a + b.qty, 0);
    setCartCount(check);
  }, []);
  const [cartCount, setCartCount] = useState();

  return (
    <CartContext.Provider value={{ setCartCount }}>
      <Router>
        {/* <Navigation /> */}

        <div
          style={{
            display: "flex",
            width: "100%",
            backgroundColor: "#57595D",
            position: "fixed",
          }}
        >
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />

          <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/About"
            label="About"
          />

          <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/Products"
            label="Products"
          />

          <OldSchoolMenuLink
            activeOnlyWhenExact={true}
            to="/Cart"
            label="Cart"
            cartCount={cartCount}
          />
        </div>
        <Switch>
          <Route path="/" component={home} exact></Route>
          <Route path="/About" component={About} exact></Route>
          <Route path="/Products" component={Products} exact></Route>
          <Route path="/Cart" component={Cart} exact></Route>
        </Switch>
      </Router>
    </CartContext.Provider>
  );
}

function OldSchoolMenuLink(props) {
  let { label, to, activeOnlyWhenExact, cartCount } = props;
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <div
      style={{
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        display: "flex",
      }}
    >
      <Link style={{ color: `${match ? "white" : "grey"}` }} to={to}>
        {label}
      </Link>
      <div
        style={{
          display: "flex",
          backgroundColor: "red",
          marginLeft: 5,
          marginRight: 5,
          paddingLeft: 5,
          paddingRight: 5,
          // paddingTop: 5,
          // paddingBottom:5,
          borderRadius: 10,
          color: "white",
          fontSize: 10,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        {cartCount}
      </div>
    </div>
  );
}

export default App;
