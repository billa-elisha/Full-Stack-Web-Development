import React, { useContext } from "react";
import { myContext } from "../app";
const Button = () => {
  const data = useContext(myContext);
  return <div style={{ backgroundColor: data.color }}>Button</div>;
};

export default Button;
