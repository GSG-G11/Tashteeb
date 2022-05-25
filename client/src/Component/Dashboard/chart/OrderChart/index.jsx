import React, { useEffect } from 'react';
import axios from 'axios';
import { Column } from '@ant-design/plots';

function OrderChart() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchorder = async () => {
      const getData = await axios.get('/satistics', {
        cancelToken: source.token,
      });
      const { orderMonth } = getData.data.data;
      setData(orderMonth.map((item) => ({
        x: item.month,
        y: item.count,
      })));
    };
    fetchorder();
    return () => source.cancel();
  }, []);
  return (
    <Column
      data={data}
      xField="x"
      yField="y"
      color="#EDB820"
      width="20px"
    />
  );
}

export default OrderChart;
