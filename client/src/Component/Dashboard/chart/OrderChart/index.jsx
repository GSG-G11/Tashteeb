import React, { useEffect } from 'react';
import axios from 'axios';
import { Column } from '@ant-design/plots';
import './style.css';

function OrderChart() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchorder = async () => {
      const getData = await axios.get('/api/v1/satistics', {
        cancelToken: source.token,
      });
      const { orderMonth } = getData.data.data;
      setData(orderMonth.map((item) => ({
        x: item.month,
        y: +item.count,
      })));
    };
    fetchorder();
    return () => source.cancel();
  }, []);
  return (
    <div className="orderChart">
      <Column
        data={data}
        xField="x"
        yField="y"
        columnStyle={{ radius: [0], width: '5px' }}
        color="#EDB820"
        width="10px"
      />
    </div>
  );
}

export default OrderChart;
