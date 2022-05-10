import React, {
  useState, useContext, createContext, useEffect,
} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const USER_ROLE = 0;
const ENGINEER_ROLE = 1;
const ADMIN_ROLE = 2;

function useProvideAuth() {
  const [user, setUser] = useState();

  const register = (data) => axios.post('/signup', data)
    .then((res) => {
      setUser(res.data.user);

      return res.data;
    });

  const login = (data) => axios.post('/login', data)
    .then((res) => {
      setUser(res.data.user);
      return res.data;
    });

  const logout = () => axios.post('/logout')
    .then((res) => {
      setUser(res.data.user);

      return res.data.user;
    });
  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    axios
      .get('/auth/user', {
        cancelToken: source.token,
      }).then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          // eslint-disable-next-line no-console
          console.log('successfully aborted');
        }
      });
    return () => {
      source.cancel();
    };
  }, []);

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

export {
  ProvideAuth, useAuth, USER_ROLE, ENGINEER_ROLE, ADMIN_ROLE,
};
