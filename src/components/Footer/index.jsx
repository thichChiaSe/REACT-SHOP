import React from "react";
import "./style.scss";
import"./components/top.scss";
import"./components/bottom.scss";
import FooterTop from "./components/FooterTop";
import FooterBottom from "./components/FooterBottom";
export function Footer() {
  return (
    <div className="footer">
      <div className="container-fluid">
        <FooterTop/>
        <FooterBottom/>
      </div>
      {/* */}
    </div>
  );
}
