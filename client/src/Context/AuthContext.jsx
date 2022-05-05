import React, {
  useState, useContext, createContext,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function useProvideAuth() {
  const [user, setUser] = useState({});

  const register = async (data) => {
    await axios.post('/signup', data)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => err.response.data);
  };

  const logout = async () => {
    await axios.post('logout')
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => err.response.data);
  };

  return {
    user,
    register,
    logout,
  };
}

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

ProvideAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProvideAuth;
