import React from "react";
import FooterTopItem from "./FooterTopItem";
export default function FooterTop() {
    const getInTouch = ["About Us", "Careers", "Press Releases", "Blog"];
    const connect = ["Facebook", "Twitter", "Instagram", "Youtube", "LinkedIn"];
    const ear = ["Become an Affiliate", "Advertise your product", "Sell on Market"];
    const acc = ["Your account", "Returns Centre", "100 % purchase protection", "Chat with us", "Help"];
    return (
        <div className="footer__top">
            <FooterTopItem title="Get In Touch" item={getInTouch} />
            <FooterTopItem title="Connections" item={connect} />
            <FooterTopItem title="Earnings" item={ear} />
            <FooterTopItem title="Account" item={acc} />
        </div>
    );
}