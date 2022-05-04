import './style.css'
import { Card, Button } from 'antd';
import { ShoppingCartOutlined, CheckOutlined  } from '@ant-design/icons';
const { Meta } = Card;


export const ProductCard = ({isAddedToCart = false, description, title, img, price}) => (
    
    <Card
    className='product-card'
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" height={240} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  > {isAddedToCart ? <Button type="primary" shape="circle" icon={<CheckOutlined />} /> : <Button type="primary" shape="circle" icon={<ShoppingCartOutlined />} />}
     
    <Meta title="$199.99" description="i want to buy this item here in this place because thars too long" />
  </Card>
);
