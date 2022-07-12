import React from "react";
import CategoryMenuItem from "./CategoryMenuItem";
import Button from "../../../../components/Button";
import { BlackRight } from "../../../../components/Icons";
export default function CategoryMenu() {
  const listMenu = [
    "Bakery",
    "Fruit and vegetables",
    "Meat and fish",
    "Drinks  ",
    "Kitchen",
  ];
  return (
    <div className="cate__menu">
      <CategoryMenuItem title="Category menu" item={listMenu} />
      <div className="click">
        <Button
          border="none"
          type="icon-right"
          color="black"
          size="medium"
          background="bright"
          round="true"
          icon={<BlackRight />}
        >
          More categories
        </Button>
      </div>
    </div>
  );
}
