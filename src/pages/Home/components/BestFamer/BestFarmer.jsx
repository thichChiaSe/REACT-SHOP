import react from "react";
import BestFarmerItem from "./BestFarmerItem";
import Button from "../../../../components/Button"
import { BlackRight } from "../../../../components/Icons";
export default function BestFarmer() {
    const listMenu = ["Carrots", "Tomatoes", "Potatoes", "Chicken", "Pork"]
    return (
        <div className="best__farmer">
            <BestFarmerItem title="Best from Farmers"  item={listMenu} />
            <div className="click">
            <Button border="none"type="icon-right" color="black" size="medium" background="bright" round="true"icon={<BlackRight/>}>More categories</Button>
            </div>
            </div>
    );
}