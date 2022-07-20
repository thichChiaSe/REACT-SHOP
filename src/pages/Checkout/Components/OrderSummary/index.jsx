import React from "react";
import { Card } from "antd";
import { Divider } from "antd";
import "./style.scss";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  HeartOutlined,
  UnorderedListOutlined,
  CloseOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
const OrderSummary = () => {
  return (
    <div className="site-card-border-less-wrapper">
      <div className="title">
        <Divider orientation="left" orientationMargin="0">
          Order Summary
        </Divider>
        <p className="des">
          Price can change depending on shipping method and taxes of your state.
        </p>
      </div>
      <div className="item-left">
        <img
          src="../../../../assets/img/product_item.png"
          // alt="error"
          style={{ width: 100, height: 100 }}
        />
        <ul className="list__item">
          <li className="item-1">
            <HeartOutlined /> Wishlist
          </li>
          <li className="item-2">
            <UnorderedListOutlined />
            Compare
          </li>
          <li className="item-3">
            <CloseOutlined /> Remove
          </li>
        </ul>
      </div>
      <div className="item-right"></div>
    </div>
  );
};

export default OrderSummary;
