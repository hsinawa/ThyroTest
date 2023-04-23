import React from "react";
import { useDispatch, useSelector, useState } from "react-redux";
import { CartReducer } from "../reducers/CartReducer";
import CartContainer from "./CartContainer";
import "./contact.css";
import Button from "@mui/material/Button";

export const CartScreen = () => {
  const cartselectorstate = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  const { CartItem } = cartselectorstate;

  let countotal = CartItem.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      {CartItem.map((i) => {
        return (
          <div className="Cart-Box">
            <CartContainer i={i} />
            <br />{" "}
          </div>
        );
      })}

      <div className="grid-1">
        <h2 style={{ color: "#0a2351", paddingTop: "15px" }}>
          Subtotal: ₹{countotal}{" "}
        </h2>
        <p>
          <a href="/address" style={{textDecoration:'none'}} >
            <Button variant="contained" style={{ width: "50%", margin: "2%" }}>
              Book Now
            </Button>
          </a>
        </p>
      </div>
    </div>
  );
};

export default CartScreen;
