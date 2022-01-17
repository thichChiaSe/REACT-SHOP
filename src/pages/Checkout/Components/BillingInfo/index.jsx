import React from "react";
import { useState } from "react/cjs/react.development";
import Button from "../../../../components/Button";
import { optionState } from "../../../../components/Icons";
import { useForm } from "../../../../layout/useForm";
import TextField from "../Textfield";
import "./style.scss";

export const BillingInfo = () => {
  const { form, error, _onChange, submit } = useForm({username: "",
  email: "",
  userlastname:"",
  address: "",
  phone: "",
  state: "",
  code: "",});
  return (
    <div className="Billing__info-wrap">
      <h1>Billing info</h1>
      <p>Please enter your billing info</p>
      <form className="form" onSubmit={submit}>
        <div className="Billing-left">
          <TextField
            label="Fist Name"
            value={form.username}
            onChange={_onChange("username")}
            placeholder="Fist Name"
            errorText={error ? error.username : ""}
          />
          <TextField
            label="Email address"
            value={form.email}
            onChange={_onChange("email")}
            placeholder="Email address"
            errorText={error ? error.email : ""}
          />
          <TextField
            label="Address"
            value={form.address}
            onChange={_onChange("address")}
            placeholder="Email address"
            errorText={error ? error.address : ""}
          />
          <TextField
            label="State/Country"
            value={form.state}
            onChange={_onChange("state")}
            placeholder="State/Country"
            errorText={error ? error.state : ""}
            type="icon-right"
            icon={<optionState />}
          />
        </div>
        <div className="Billing-right">
          <TextField
            label="Last Name"
            value={form.userlastname}
            onChange={_onChange("userlastname")}
            placeholder="Last Name"
            errorText={error ? error.userlastname : ""}
          />
          <TextField
            label="Phone number"
            value={form.phone}
            onChange={_onChange("phone")}
            placeholder="Phone number"
            errorText={error ? error.phone : ""}
          />
          <TextField
            label="Town / City"
            value={form.state}
            onChange={_onChange("state")}
            placeholder="Town / City"
            errorText={error ? error.state : ""}
          />
          <TextField
            label="ZIP/Postal code"
            value={form.code}
            onChange={_onChange("code")}
            placeholder="ZIP/Postal code"
            errorText={error ? error.code : ""}
          />
        </div>
        <div className="btn">
          <Button type="submit" onClick={submit}>Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default BillingInfo;
