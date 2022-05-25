import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, Form, Input, Rate,
} from 'antd';
import axios from 'axios';
import './orderCard.css';
import { success, error } from '../AntdMessages.jsx/messages';

function OrderCard({
  time,
  name,
  details,
  price,
  status,
  isEngineer,
  reply,
  feedback,
  id,
  setRerender,
  rerender,
}) {
  let bgColor = '#F29339';
  if (status === 'accepted') {
    bgColor = '#008000';
  } else if (status === 'rejected') {
    bgColor = '#FF0000';
  } else if (status === 'completed') {
    bgColor = '#125b50';
  }

  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const [replyMessege, setReply] = useState({});
  const [reviewMessege, setReviewMessege] = useState({ rate: 3 });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    if (replyMessege.reply) {
      axios
        .patch(`/api/v1/hiringOrder/${id}`, replyMessege)
        .then((res) => {
          success(res.message);
          setReply({});
          setRerender(!rerender);
        })
        .catch((err) => {
          error(
            err.response.data.error
              ? err.response.data.error.message
              : err.response.data.message,
          );
        });
    } else {
      error('Please fill all the fields');
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showReviewModal = () => {
    setIsReviewModalVisible(true);
  };
  const handleReviewOk = () => {
    setIsReviewModalVisible(false);
    if (reviewMessege.review && reviewMessege.rate) {
      axios
        .post(`/api/v1/review/${id}`, reviewMessege)
        .then((res) => {
          success(res.data.message);
          setReviewMessege({});
          setRerender(!rerender);
        })
        .catch((err) => {
          error(
            err.response.data.error
              ? err.response.data.error.message
              : err.response.data.message,
          );
        });
    } else {
      error('Please fill all the fields');
    }
  };
  const handleReviewCancel = () => {
    setIsReviewModalVisible(false);
  };

  const completeOrder = async () => {
    try {
      await axios(`/api/v1/hiringOrder/${id}/complete`);
      success('Order completed');
      setRerender(!rerender);
    } catch (err) {
      error(
        err.response.data.error
          ? err.response.data.error.message
          : err.response.data.message,
      );
    }
  };

  return (
    <div className="order__card">
      <ul>
        <li>
          <p>ORDER TIME</p>
          <div className="order__info">
            {' '}
            {time}
            {' '}
          </div>
        </li>
        <li>
          {isEngineer ? <p>CLIENT NAME</p> : <p>ENGINEER NAME</p>}
          <div className="order__info">{name}</div>
        </li>
        <li>
          <p>DETAILS</p>
          <div className="order__info">{details}</div>
        </li>
        <li>
          <p>TOTAL</p>
          <div className="order__info">
            $
            {price}
          </div>
        </li>
        <li>
          <p>STATUS</p>
          <div className="order__status" style={{ backgroundColor: bgColor }}>
            {status}
          </div>
        </li>
        {isEngineer ? (
          (status === 'pending' && (
            <li>
              <p>ACTION</p>
              <div className="order__info">
                <Form>
                  <Button
                    type="primary"
                    style={{
                      marginTop: '25px',
                      backgroundColor: '#008000',
                      borderRadius: ' 5px',
                      border: ' 1px solid #008000',
                      color: '#fff',
                      fontWeight: ' 500',
                      transition: 'all 1s ease-in-out',
                      width: '90px',
                    }}
                    onClick={() => {
                      setReply({ acceptance: true });
                      showModal();
                    }}
                  >
                    ACCEPT
                  </Button>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: '#FF0000',
                      borderRadius: ' 5px',
                      border: ' 1px solid #FF0000',
                      color: '#fff',
                      fontWeight: ' 500',
                      transition: 'all 1s ease-in-out',
                      width: '90px',
                    }}
                    onClick={() => {
                      setReply({ acceptance: false });
                      showModal();
                    }}
                  >
                    REJECT
                  </Button>
                  <Modal
                    title={`Reply to ${name}`}
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <Form.Item label="reply" name={`${'reply'}`}>
                      <Input
                        placeholder="Add your reply"
                        onChange={(e) => setReply({ ...replyMessege, reply: e.target.value })}
                      />
                    </Form.Item>
                  </Modal>
                </Form>
              </div>
            </li>
          ))
          || (status === 'accepted' && (
            <li>
              <Form>
                <Button type="primary" size="large" onClick={completeOrder}>
                  Mark as Done
                </Button>
              </Form>
              {' '}
            </li>
          ))
        ) : (
          <>
            {status !== 'pending' && (
              <li>
                <p>ENGINEER REPLY</p>
                <div className="order__info">{reply}</div>
              </li>
            )}

            {status === 'completed' && !feedback && (
              <li>
                <Form>
                  <Button type="primary" size="large" onClick={showReviewModal}>
                    Make Review
                  </Button>
                  <Modal
                    title={`Review ${name}`}
                    visible={isReviewModalVisible}
                    onOk={handleReviewOk}
                    onCancel={handleReviewCancel}
                  >
                    <Form.Item label="review" name={`${'review'}`}>
                      <Input
                        placeholder="Add your review"
                        onChange={(e) => setReviewMessege({
                          ...reviewMessege,
                          review: e.target.value,
                        })}
                      />
                    </Form.Item>
                    <Form.Item label="rating" name={`${'rating'}`}>
                      <Rate
                        tooltips={desc}
                        onChange={(e) => setReviewMessege({ ...reviewMessege, rate: e })}
                        value={reviewMessege.rate}
                      />
                      {reviewMessege.rate ? (
                        <span className="ant-rate-text">
                          {desc[reviewMessege.rate - 1]}
                        </span>
                      ) : (
                        ''
                      )}
                    </Form.Item>
                  </Modal>
                </Form>
                {' '}
              </li>
            )}

            {feedback && (
              <li>
                <p>MY FEEDBACK</p>
                <div className="order__info">{feedback}</div>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
}
OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  isEngineer: PropTypes.bool,
  reply: PropTypes.string,
  feedback: PropTypes.string,
  setRerender: PropTypes.func.isRequired,
  rerender: PropTypes.bool.isRequired,
};

OrderCard.defaultProps = {
  isEngineer: false,
  reply: null,
  feedback: null,
};

export default OrderCard;
