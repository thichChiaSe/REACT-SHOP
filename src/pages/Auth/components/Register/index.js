import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useForm } from "../../../../layout/useForm";
import authService from "../../../../services/authService";
import TextField from "../../../Checkout/Components/Textfield";
import Login from "../Login";
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default function Register() {
  const { form, error, _onChange, submit, setError } = useForm({
    username: "",
    email: "",
    name: "",
    userlastname: "",
    address: "",
    phone: "",
    state: "",
    password: "",
    emailregister: "",
    code: "",
  });
  const dispatch = useDispatch();
  const { login, stateLogin } = useSelector((store) => store.auth);
  const handleRegister = async (e) => {
    e.preventDefault();
    let errObj = {};
    if (!form.username.trim()) {
      errObj.username = "Email khong được để trống";
    } else if (!emailRegexp.test(form.username)) {
      errObj.email = "Không phải là email";
    }
    if (!form.password) {
      errObj.password = "password không được để trống";
    }
    if (!form.name) {
      errObj.name = "name không được để trống";
    }
    setError(errObj);
    if (Object.keys(errObj).length === 0) {
      alert("thanh cong");
      try {
        const api = await authService.register(form);
        if (api?.error) {
          throw api?.error;
        } else {
          dispatch({
            type: "LOGIN",
            payload: api.data
          });
        }
      } catch (err) {
        alert(err);
      }
    }
  };
  if(stateLogin) return <Navigate to="/" />
  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">New Customer</h6>
          {/* Form */}
          <form onSubmit={submit}>
            <div className="row">
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerFirstName">
                    First Name *
                  </label>
                  <TextField
                    label="username"
                    value={form.username}
                    onChange={_onChange("username")}
                    placeholder="xxx@gmail.com"
                    errorText={error ? error.username : ""}
                  />
                </div>
              </div>
              {/* <div className="col-12">
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerLastName">
                    Last Name *
                  </label>
                  <TextField
                    label="Last Name"
                    value={form.userlastname}
                    onChange={_onChange("userlastname")}
                    placeholder="Last Name *"
                    errorText={error ? error.userlastname : ""}
                  />
                </div>
              </div>  */}
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerEmail">
                    Name *
                  </label>
                  <TextField
                    label="Name"
                    value={form.name}
                    onChange={_onChange("name")}
                    placeholder="Name *"
                    errorText={error ? error.name : ""}
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPassword">
                    Password *
                  </label>
                  <TextField
                    label="Pass"
                    value={form.password}
                    onChange={_onChange("password")}
                    placeholder="Password *"
                    errorText={error ? error.password : ""}
                  />
                </div>
              </div>
              <br />
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPasswordConfirm">
                    Confirm Password *
                  </label>
                  <TextField
                    label="Confirm Pass"
                    value={form.password}
                    onChange={_onChange("password")}
                    placeholder="Confirm Password *"
                    errorText={error ? error.password : ""}
                  />
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  onClick={handleRegister}
                  className="btn btn-sm btn-dark"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
