/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from 'antd';
import HiringOrdersTable from './HiringOrdersTable';

function HiringOrdersList() {
  const [hiringOrders, setHiringOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get('/hiringOrder', {
        params: {
          page,
          limit: pageSize,
        },
      })
      .then((res) => {
        const result = res.data.hiringOrders.rows.map((item) => {
          const {
            id, status, description, price, reply, engHiringOrder: { username: engineer }, userHiringOrder: { username: client },
          } = item;
          return {
            key: id,
            id,
            status,
            price,
            description,
            engineer,
            client,
            reply,
          };
        });
        setHiringOrders(result);
        setTotal(res.data.hiringOrders.count);
      });
  }, [page, pageSize]);
  return (
    <section className="dashboard-product-list">
      <Typography.Title level={3}>Hiring Orders</Typography.Title>
      <HiringOrdersTable
        hiringOrders={hiringOrders}
        setHiringOrders={setHiringOrders}
        total={total}
        pageSize={pageSize}
        page={page}
        setPageSize={setPageSize}
        setPage={setPage}
      />
    </section>
  );
}

export default HiringOrdersList;
