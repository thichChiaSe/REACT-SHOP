import DropdownMenuItem from "./DropdownMenuItem";
import React from "react";
import { Dropdown, Menu, Space, Button } from "antd";
const menu = (
  <Menu
    items={[
      {
        key: "1",
        type: "group",
        label: "Group title",
        children: [
          {
            key: "1-1",
            label: "1st menu item",
          },
          {
            key: "1-2",
            label: "2nd menu item",
          },
        ],
        // },
        // {
        //   key: "2",
        //   label: "sub menu",
        //   children: [
        //     {
        //       key: "2-1",
        //       label: "3rd menu item",
        //     },
        //     {
        //       key: "2-2",
        //       label: "4th menu item",
        //     },
        //   ],
        // },
        // {
        //   key: "3",
        //   label: "disabled sub menu",
        //   disabled: true,
        //   children: [
        //     {
        //       key: "3-1",
        //       label: "5d menu item",
        //     },
        //     {
        //       key: "3-2",
        //       label: "6th menu item",
        //     },
        //   ],
      },
    ]}
  />
);
export const DropdownMenu = () => {
    const nameMenu = [
      "Bakery",
      "Fruit and vegetables",
      "Meat and fish",
      "Kitchen",
      "Special nutrition",
      "Baby",
      "Pharmacy",
    ];
  return (
    <div className="dropdown_items">
      {nameMenu.map((item, index) => {
        return <DropdownMenuItem item={item} key={index} itemshow="item 1"/>;
      })}
      {/* <Dropdown overlay={nameMenu.map((item,index)=> return )}></Dropdown> */}
    </div>
  );
};
///********** */
