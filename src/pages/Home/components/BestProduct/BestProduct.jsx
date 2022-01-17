import react from "react";
import BestProductItem from "./BestProductItem";
import Button from "../../../../components/Button"
import { BlackRight } from "../../../../components/Icons";
export default function BestProduct() {
    const listMenu = ["Kitchen", "Meat and fish", "Special nutrition", "Pharmacy  ", "Baby"]
    return (
        <div className="best__product">
            <BestProductItem title="Best selling products"  item={listMenu} />
            <div className="click">
            <Button border="none"type="icon-right" color="black" size="medium" background="bright" round="true"icon={<BlackRight/>}>More categories</Button>
            </div>
            </div>
    );
}