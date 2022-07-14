import React from "react";
// import {  Header } from "../../components";
// import DropDownMenu from "../../components/DropdownMenu";
import BillingInfo from "./Components/BillingInfo";
import BillingMethod from "./Components/BillingMethod";
import PaymentMethod from "./Components/PaymenMethod";
import OrderSummary from "./Components/OrderSummary"
import "./style.scss";
export default function Checkout() {
  return(
  <>
   <div className="Checkout" >
          {/* <Header/>
          <DropDownMenu/> */}
      <div className="container-fluid">
          <BillingInfo/>
          <BillingMethod/>
          <PaymentMethod/>
          {/* <Additional/> */}
          {/* <Confirmation/> */}
      </div>
          <OrderSummary/>
  </div>;
  </>
  )}
