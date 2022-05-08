import React, {
  useState, useContext, createContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [user, setUser] = useState({});

  const register = (data) => axios.post('/signup', data)
    .then((res) => {
      setUser(res.data);
      return res.data;
    });
    // .catch((err) => err.response.data);

  const login = (data) => axios.post('/login', data)
    .then((res) => {
      setUser(res.data);
      return res.data;
    });

  const logout = () => axios.post('logout')
    .then((res) => {
      setUser(res.data);
      return res.data;
    });
    // .catch((err) => err.response.data);

  return {
    user,
    register,
    logout,
    login,
  };
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProvideAuth, useAuth };
