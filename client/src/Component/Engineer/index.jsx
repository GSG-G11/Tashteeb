import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from 'antd';
import SingleCard from '../EngineerCard/SingleCard';
import '../EngineerCard/style.css';
import './style.css';

function EngineerInfo() {
  const [info, setInfo] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    const fetchEng = async () => {
      const getData = await axios.get('/api/engPage', { cancelToken: source.token }, { params: pageSize, page });
      const data = getData.data.data.rows;
      setTotal(data.length);
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
    <div className="engController">
      <div className="cardDetailes engineerInfo">
        {info.map((item) => <SingleCard key={item.id} name={item.username} img={item.image} />)}
      </div>
      <div className="paginationEng">
        <Pagination defaultCurrent={1} total={total} onChange={handleChange} />
      </div>
    </div>
  );
}

export default EngineerInfo;
