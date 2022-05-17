import React from 'react';
import { Input, Space } from 'antd';
import { PropTypes } from 'prop-types';

const { Search } = Input;

function SearchInput({ placeHolder, onSearch }) {
  return (
    <Space direction="vertical">
      <Search
        placeholder={placeHolder}
        onSearch={(value) => onSearch(value)}
        style={{ width: 400 }}
      />
    </Space>
  );
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default SearchInput;
