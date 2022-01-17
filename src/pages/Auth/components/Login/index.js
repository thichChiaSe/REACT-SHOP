import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useForm } from "../../../../layout/useForm";
import TextField from "../../../Checkout/Components/Textfield";
import authService from "../../../../services/authService";
import { Navigate } from "react-router-dom";
export default function Login() {
  const { form, setError, error, submit, _onChange } = useForm({
    username: "",
    password: "",
  });

  const dispatch = useDispatch(); //b1 gọi useDispath
  const { login,stateLogin } = useSelector((store) => store.auth);//useSelctor lấy props trong auth
  const handleLogin = async (e) => {
    e.preventDefault();
    let errObj = {};
    if (!form.username) {
      errObj.username = "khong duoc de trong ";
    }
    if (!form.password) {
      errObj.password = "khong duoc de trong ";
    }
    setError(errObj);

    if (Object.keys(errObj).length === 0) {
      alert("thanh cong");
      try {
        const backend = await authService.login(form); /// lấy thông tin backend
        if (backend?.message) {
          throw backend?.message;
        } else {
          dispatch({
            type: "LOGIN",
            payload: backend.data,
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
      <div className="card card-lg mb-10 mb-md-0">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">Returning Customer</h6>
          {/* Form */}
          <form>
            <div className="row">
              <div className="col-12">
                {/* username */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginEmail">
                    username *
                  </label>
                  <TextField
                    label="Email"
                    value={form.username}
                    onChange={_onChange("username")}
                    placeholder="username *"
                    errorText={error ? error.username : ""}
                  />
                </div>
              </div>
              <div className="col-12">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginPassword">
                    Password *
                  </label>
                  <TextField
                    label="Password"
                    // type="password"
                    value={form.password}
                    onChange={_onChange("password")}
                    placeholder="Password *"
                    errorText={error ? error.password : ""}
                  />
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  onClick={handleLogin}
                  className="btn btn-sm btn-dark"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
