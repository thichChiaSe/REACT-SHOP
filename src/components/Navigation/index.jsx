import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter,Link } from "react-router-dom";
import store from "../../store";
import "./style.scss"
export const Nav = () => {
   const {stateLogin} = useSelector(store=>store.auth)
  return (
<div className="nav__router">
      <div className="nav__router-list">
        <div className="nav__router-item">
          <Link to="/">Home</Link>
        </div>
        <div className="nav__router-item">
          <Link to="/checkout">Checkout</Link>
        </div>
        {stateLogin === false && <div className="nav__router-item">
          <Link to="/auth">Login</Link>
        </div>}
      </div>
    </div>
  );
};
export default Nav;
