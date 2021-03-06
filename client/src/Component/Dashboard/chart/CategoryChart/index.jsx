/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import axios from 'axios';
import { Pie } from '@ant-design/plots';

function CategoryChart() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchcategory = async () => {
      const getData = await axios.get('/api/v1/satistics', {
        cancelToken: source.token,
      });
      const { productCountByCategory } = getData.data.data;
      setData(productCountByCategory.map((item) => ({
        type: item.name,
        value: +item.number,
      })));
    };
    fetchcategory();
    return () => source.cancel();
  }, []);
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          fontSize: '14px',
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: `total ${data.length}`,
      },
    },
  };
  return (
    <div>
      {data.length > 0 && <Pie {...config} /> }
    </div>

  );
}

export default CategoryChart;
