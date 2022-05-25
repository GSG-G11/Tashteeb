import React from 'react';
import { Badge } from 'antd';
import { useAuth } from '../../Context/AuthContext';

function ShowBadge() {
  const { productNumber } = useAuth();
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
