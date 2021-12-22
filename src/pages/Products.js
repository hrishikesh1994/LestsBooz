import React, { useState } from "react";
import Cards from "./Card";
import CartContext from "../context/CartContext";
import { addtocart } from "./Cartutils";

function Products() {
  let cartContext = React.useContext(CartContext);
  fetch("https://raw.githubusercontent.com/jalispran/lets-booze/main/db.json")
    .then((response) => response.json())
    .then((data) => setcardlist(data));
  const [cardlist, setcardlist] = useState();
  const [isLoading, setloading] = useState(true);
  if (!cardlist) return <p>Loading</p>;
  else {
    return cardlist.map((a, index) => (
      <Cards
        key={index}
        src={a.url}
        title={a.title}
        price={a.price}
        buttontitle={"Add to Cart"}
        buttonaction={(item) =>
          addtocart(item, (count) => cartContext.setCartCount(count))
        }
        card_id={a.id}
      />
    ));
  }
}

export default Products;
