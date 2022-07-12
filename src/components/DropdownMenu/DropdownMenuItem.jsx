import React from "react";
import { Dropdown, Menu, Space } from "antd";
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
      },
    ]}
  />
);
export default function DropdownMenuItem({ item,itemshow }) {
  return (
     <div className="dropdown_items">
      <div className="item">
        {item}
        <div className="wrap-item">
        <div className="item-show">{itemshow}</div>
        {/* <div className="item-show">Item 2</div>
        <div className="item-show">Item 3</div>
        <div className="item-show">Item 1</div>
        <div className="item-show">Item 2</div>
        <div className="item-show">Item 3</div> */}
        </div>
      </div>
        <div className="i">
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.81348 1.53326L4.55348 4.27326C4.67838 4.39743 4.84735 4.46712 5.02348 4.46712C5.1996 4.46712 5.36857 4.39743 5.49348 4.27326L8.16014 1.6066"
              stroke="#6A983C"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
        </div>
    </div>
    // <Dropdown overlay={menu} className="dropdown_items">
    //   <a onClick={(e) => e.preventDefault()}>
    //     <Space className="item">
    //       {item}
    //       <div className="i">
    //         <svg
    //           width="10"
    //           height="6"
    //           viewBox="0 0 10 6"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M1.81348 1.53326L4.55348 4.27326C4.67838 4.39743 4.84735 4.46712 5.02348 4.46712C5.1996 4.46712 5.36857 4.39743 5.49348 4.27326L8.16014 1.6066"
    //             stroke="#6A983C"
    //             stroke-width="2.5"
    //             stroke-linecap="round"
    //             stroke-linejoin="bevel"
    //           />
    //         </svg>
    //       </div>
    //     </Space>
    //   </a>
    // </Dropdown>
  );
}
