import react from "react";
import FooterBottomItem from "./FooterBottomItem";

export default function FooterBottom() {
    const nameTag = ["Beans", "Carrots", "Apples", "Garlic  ", "Mushrooms", "Tomatoes", "Chilli peppers", "Broccoli","Watermelons","Oranges","Bananas","Grapes","Cherries","Meat","Seo tag","Fish","Seo tag","Fresh food","Lemons"]
    return (
        <div className="footer__bottom">
            <FooterBottomItem title="Product tags" item={nameTag} />
            <div className="copyright" >
                Copyright © 2020 petrbilek.com</div>
        </div>
    );
}