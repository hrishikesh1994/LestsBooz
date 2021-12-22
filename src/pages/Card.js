import React from "react";
import Button from "./Button";
import CartContext from "../context/CartContext";

const Card = (props) => {
  let cartContext = React.useContext(CartContext);

  // let [imgHover, setImgHover] = useState()
  //  console.log({props})

  return (
    <>
      <div
        style={{
          marginRight: 100,
          display: "inline-grid",
          padding: 5,
          marginTop: 50,
          justifyItems: "center",
        }}
      >
        <div style={{ marginTop: 10, display: "flex" }}>
          <img src={props.src} alt="ima" />
        </div>

        <div>
          <h4>{props.title}</h4>
        </div>

        <div>
          <span>{`Rs. ${props.price}`}</span>
        </div>

        <div>
          <Button
            title={props.buttontitle}
            abc={() => props.buttonaction(props)}
          />
        </div>
        <div>{props.qty && <p>{props.qty}</p>}</div>
      </div>
    </>
  );
};

export default Card;
