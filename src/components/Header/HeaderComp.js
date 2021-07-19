import React, { useState } from "react";
import styles from "./styles.module.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const HeaderComp = (props) => {
  
  let rndInt = Math.floor(Math.random() * 31) + 30;
  const [count, setCount] = useState(rndInt);
  
  setTimeout(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      return;
    }
  }, 1000);
  


  return (
    <div className={styles.header}>
      <div className={styles.headerCol}>
        <p className={styles.headingSec}>Time Left: {count} seconds</p>
        <p className={styles.headingPrim}>Claim your free trial class</p>
      </div>
      <Link style={{ color: "black" }} to="/cart">
        <Badge badgeContent={props.cartCount > 0 && props.cartCount}>
          <AddShoppingCartIcon />
        </Badge>
      </Link>
    </div>
  );
};

export default HeaderComp;
