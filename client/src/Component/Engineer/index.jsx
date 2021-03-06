import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import SingleCard from '../EngineerCard/SingleCard';
import '../EngineerCard/style.css';
import './style.css';
import Navbar from '../Navbar';
import EngineerBanner from '../EngineerBanner';

function EngineerInfo() {
  const [info, setInfo] = useState([]);
  const [total, setTotal] = useState();
  const [pageSize, setPageSize] = useState(8);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchEng = async () => {
      const getData = await axios.get('/api/v1/engineers', {
        cancelToken: source.token,
        params: { pageSize, page },
      });
      const data = getData.data.data.rows;
      setTotal(getData.data.data.count);
      setInfo(data);
    };
    fetchEng();
    return () => source.cancel();
  }, [page, pageSize]);

  const handleChange = (newPage, newPageSize) => {
    setPageSize(newPageSize);
    setPage(newPage);
  };

  return (
    <div>
      <Navbar />
      <EngineerBanner
        title="Engineers Info"
        desc="Browse Through Our List Of Amazing Engineers "
      />
      <div className="engController">
        <div className="cardDetailes engineerInfo">
          {info.map((item) => (
            <SingleCard
              key={item.id}
              id={item.id}
              name={item.username}
              img={item.image}
            />
          ))}
        </div>
        <div className="paginationEng">
          <Pagination
            className="pagGng"
            defaultCurrent={1}
            defaultPageSize={pageSize}
            showSizeChanger
            total={total}
            onChange={handleChange}
            pageSizeOptions={[8, 12, 16, 20]}
          />
        </div>
      </div>
    </div>
  );
}

export default EngineerInfo;
