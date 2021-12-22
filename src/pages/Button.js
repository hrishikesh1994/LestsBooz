import React, { useState } from "react";
import "./Button.css";
function Button(props) {
  let { title, abc, disabled } = props;
  const [showHover, setShowHover] = useState(false);

  return (
    <>
      <button
        style={{
          padding: 10,
          color: "black",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: `${
            disabled ? "grey" : `${showHover ? "green" : ""}`
          }`,
        }}
        type="button"
        onClick={abc}
        onMouseEnter={() => setShowHover(true)}
        onMouseLeave={() => setShowHover(false)}
      >
        {title ? title : "Submit"}
      </button>
    </>
  );
}

export default Button;
