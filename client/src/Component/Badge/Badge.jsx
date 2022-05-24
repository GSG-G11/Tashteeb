import React, { useEffect, useState } from 'react';
import { Badge } from 'antd';

function ShowBadge() {
  const [productNumber, setProductNumber] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'));

    setProductNumber(items);
  }, []);
  return (
    <Badge
      count={productNumber?.length}
      showZero
      style={{
        display: 'flex',
        alignItems: 'center',

        justifyContent: 'center',
      }}
    >
      <i className="ri-shopping-cart-line cart-icon" />
      {' '}
    </Badge>
  );
}

export default ShowBadge;
