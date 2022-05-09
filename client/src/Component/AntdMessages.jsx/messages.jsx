import { message } from 'antd';

const success = (msg) => {
  message.success(msg);
};

const error = (msg) => {
  message.error(msg);
};

export { success, error };
