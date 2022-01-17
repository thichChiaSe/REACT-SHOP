import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";

export default function AuthPage() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <Login />
          <Register />
        </div>
      </div>
    </section>
  );
}
