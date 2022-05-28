import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';

export const SocketContext = createContext();

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`https://${window.location.hostname}`, {

    });
    setSocket(newSocket);
    return () => socket.close();
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
}

SocketProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export const useSocket = () => useContext(SocketContext);
