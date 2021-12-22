import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "../pages/Button";
import CartContext from "../context/CartContext";
import ReactPlayer from "react-player";

function Cart() {
  const buttonaction = (item) => {
    let button = localStorage.getItem("document");
    button = JSON.parse(button);
    let cartbutton = button.filter((a) => a.card_id != item.card_id);

    console.log(cartbutton);
    localStorage.setItem("document", JSON.stringify(cartbutton));
    cartContext.setCartCount(cartbutton.length > 0 ? cartbutton.length : null);
    setcart(cartbutton);
  };

  let cartContext = React.useContext(CartContext);
  const [cart, setcart] = useState();
  const [grandTotal, setgrandTotal] = useState();
  useEffect(function () {
    let cart = localStorage.getItem("document");
    if (!cart) {
      return;
    }
    cart = JSON.parse(cart);
    setcart(cart);

    let result = 0;
    cart.forEach((c) => {
      result = result + c.qty * c.price;
    });
    setgrandTotal(result);
  }, []);

  if (!cart || cart.length <= 0) {
    return (
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100vw",
          paddingTop: 40,
        }}
      >
        <ReactPlayer
          muted={true}
          controls={false}
          playing={true}
          width="100%"
          height="100%"
          url="https://ak.picdn.net/shutterstock/videos/1018450003/preview/stock-footage-shopping-cart-icon-video-animation-general-lightweight-animation-with-black-background-included.webm"
        />
      </div>
    );
  }

  return (
    <>
      <div style={{ height: "100%" }}>
        <div style={{ display: "flex", display: "list-item" }}>
          {cart.map((e, index) => (
            <Card
              key={index}
              buttonaction={buttonaction}
              buttontitle={"Delete Item"}
              title={e.title}
              price={e.price}
              src={e.src}
              card_id={e.card_id}
              qty={e.qty}
            />
          ))}
        </div>
        <div
          style={{
            margin: 10,
            padding: 10,
            fontWeight: "bold",
            border: "2px solid",
          }}
        >
          <div style={{ marginTop: "10" }}>
            <p>Grand Total ={grandTotal}</p>
          </div>
        </div>
        <div style={{ marginTop: "20vh" }}>
          {cart.length > 0 ? (
            <Button
              title="Clear Cart"
              abc={() => {
                localStorage.setItem("document", JSON.stringify([]));
                cartContext.setCartCount(null);
                setcart([]);
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Cart;
