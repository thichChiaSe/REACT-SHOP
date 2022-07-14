import { Card } from 'antd';
import React from 'react';
import "./style.scss";
const Card = () => (
    <div className="site-card-border-less-wrapper">
    <Card
      title="Order Summary"
      bordered={false}
      style={{
        width: 300,
      }}
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  </div>
)


export default Card;