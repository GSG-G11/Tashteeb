import React from 'react';
import { Table, Space, Popconfirm } from 'antd';
import axios from 'axios';
import PropTypes from 'prop-types';

const { Column } = Table;

function HiringOrderTable({
  hiringOrders,
  setHiringOrders,
  total, pageSize,
  setPageSize,
  page,
  setPage,
}) {
  const handleChange = (newPage, newPageSize) => {
    setPageSize(newPageSize);
    setPage(newPage);
  };

  const deleteHO = (id) => {
    axios.delete(`/api/v1/hiringOrder/${id}`).then(() => {
      const newHO = hiringOrders.filter((ho) => ho.id !== id);
      setHiringOrders(newHO);
    });
  };

  return (
    <Table
      dataSource={hiringOrders}
      pagination={{
        pageSize,
        page,
        total,
        onChange: handleChange,
        pageSizeOptions: ['6', '9', '12', '21'],
        showSizeChanger: true,
      }}
    >
      <Column title="Service" dataIndex="description" key="description" />
      <Column title="Price" dataIndex="price" key="price" />
      <Column title="Engineer" dataIndex="engineer" key="engineer" />
      <Column title="Client" dataIndex="client" key="client" />
      <Column
        title="Status"
        key="status"
        render={(text, { status }) => {
          let bgColor = '#F29339';
          if (status === 'accepted') {
            bgColor = '#008000';
          } else if (status === 'rejected') {
            bgColor = '#FF0000';
          } else if (status === 'completed') {
            bgColor = '#125b50';
          }
          return (
            <div className="order__status" style={{ backgroundColor: bgColor, width: '100px' }}>
              {status}
            </div>
          );
        }}
      />
      <Column
        title="Reply"
        key="reply"
        render={(text, record) => (
          text ? <span>null</span> : <span>{record.reply}</span>
        )}
      />

      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Popconfirm
              title="Are you sure you want to delete?"
              onConfirm={() => {
                deleteHO(record.id);
              }}
            >
              <button
                type="button"
                className="dash-delete-icon"
                style={{ marginLeft: '10px' }}
              >
                <i className="ri-delete-bin-7-line" />
              </button>
            </Popconfirm>
          </Space>
        )}
      />
    </Table>
  );
}

HiringOrderTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  hiringOrders: PropTypes.array.isRequired,
  setHiringOrders: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  setPageSize: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default HiringOrderTable;
