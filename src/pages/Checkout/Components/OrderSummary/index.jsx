import React from 'react';
import { Card } from 'antd';
import "./style.scss";
const OrderSummary = () => {
    return (
            <div className="site-card-border-less-wrapper">
            <Card title="Default size cardasdadadasdsddasdasdu" extra={<p style={{}}>Price can change depending on shipping method and taxes of your state.</p>} style={{ width: 300 }}>
      
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        )
        
        
};

export default OrderSummary;