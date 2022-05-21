import React, { useEffect, useState } from 'react';
import { Card, Button } from 'antd';
import { Image } from 'cloudinary-react';
import { ShoppingCartOutlined, CheckOutlined } from '@ant-design/icons';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const { Meta } = Card;

function ProductCard({
  id,
  name,
  image,
  price,
}) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const addFunc = () => {
    if (!isAddedToCart) {
      const products = JSON.parse(localStorage.getItem('products'));
      products.push({
        id, name, price, image, quantity: 1,
      });
      localStorage.setItem('products', JSON.stringify(products));
      setIsAddedToCart(true);
    } else {
      const products = JSON.parse(localStorage.getItem('products'));
      const newProducts = products.filter((item) => item.id !== id);
      localStorage.setItem('products', JSON.stringify(newProducts));
      setIsAddedToCart(false);
    }
  };

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem('products'));
    const addedToCart = products.some((item) => item.id === id);
    setIsAddedToCart(addedToCart);
  }, []);

  return (
    <Card
      className="product-card"
      hoverable
      style={{ width: 240 }}
      cover={(
        <Image
          cloudName="images"
          publicId={image}
          crop="scale"
        />
      )}
    >
      <Button type="primary" onClick={addFunc} shape="circle" icon={isAddedToCart ? <CheckOutlined /> : <ShoppingCartOutlined />} />
      <Link to={`/product/${id}`}>
        <Meta
          title={`$${price.toFixed(2)}`}
          description={name}
        />
      </Link>
    </Card>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
