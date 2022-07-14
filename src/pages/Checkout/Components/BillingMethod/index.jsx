import React, { useState } from "react";
import Button from "../../../../components/Button";
import { useForm } from "../../../../layout/useForm";
import { MethodOption } from "../MethodOption";
import "./style.scss"
export const BillingMethod = () => {
  const { state, setstate, err, methods, handleSubmit } = useForm({});
  return (
    <div className="billingmethod">
      <h1>Billing Method</h1>
      <p>Please enter your payment method</p>
      <form onSubmit={handleSubmit}>
      {methods &&
        methods.map(function (method) {
          const { name, price, type } = method;
          console.log(`method`, method)
          return (
            <div className="Billing__method-wrap">
              <MethodOption
                {...method}
                onChange={() => {
                  setstate(name);
                }}
                isChecked={name === state}
              />
            </div>
          );
        })}
        {/* <Button onClick={handleSubmit}>Submit</Button> */}
      </form>
    </div>
  );
};
export default BillingMethod;
// //<div className="Billing_method-wrap">
// <h1>Billing Method</h1>
// <p>Please enter your payment method</p>

// <Button onClick={handlesubmit}>Submit</Button>
// </div>
