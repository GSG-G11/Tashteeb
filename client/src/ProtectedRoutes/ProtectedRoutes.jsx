import React from 'react';
import PropTypes from 'prop-types';
import {
  Navigate,
} from 'react-router-dom';
import {
  useAuth,
  ENGINEER_ROLE,
  ADMIN_ROLE,
} from '../Context/AuthContext';

export function ProtectedAdmin({ children }) {
  const { user } = useAuth();
  if (user.role === ADMIN_ROLE) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
export function ProtectedUser({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export function ProtectedEngineer({ children }) {
  const { user } = useAuth();
  if (user.role === ENGINEER_ROLE) {
    return <Navigate to="/engineer" replace />;
  }
  return children;
}
ProtectedUser.propTypes = {
  children: PropTypes.node.isRequired,
};
ProtectedEngineer.propTypes = {
  children: PropTypes.node.isRequired,
};
ProtectedAdmin.propTypes = {
  children: PropTypes.node.isRequired,
};
