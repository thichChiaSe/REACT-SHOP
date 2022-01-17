import React from "react";

export default function HeaderContact() {
  return (
    <div className="header__contact">
      <div className="header__contact-list">
        <div className="header__contact-item mr active">Chat with us</div>
        <div className="header__contact-item mr ">+420 336 775 664</div>
        <div className="header__contact-item mr">info@freshnesecom.com</div>
      </div>
      <div className="header__contact-list">
        <a className="header__contact-item ml"  href="#">Blog</a>
        <a className="header__contact-item ml" href="#">About Us</a>
        <a className="header__contact-item ml" href="#">Careers</a>
      </div>
    </div>
  );
}
