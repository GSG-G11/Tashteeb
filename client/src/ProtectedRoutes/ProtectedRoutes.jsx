import React from 'react';
import PropTypes from 'prop-types';
import {
  Navigate,
} from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export function ProtectedAdmin({ children }) {
  const { user } = useAuth();
  if (!user.user) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
export function ProtectedUser({ children }) {
  const { user } = useAuth();
  if (user.user.role === 0) {
    return <Navigate to="/" replace />;
  }
  return children;
}
export function ProtectedEngineer({ children }) {
  const { user } = useAuth();
  if (user.user.role === 2) {
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
