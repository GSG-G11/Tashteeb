import React from 'react';
import PropTypes from 'prop-types';
import {
  Navigate,
  Outlet,
} from 'react-router-dom';
import {
  useAuth,
  ENGINEER_ROLE,
  ADMIN_ROLE,
} from '../Context/AuthContext';

export function ProtectedAdmin({ children }) {
  const { user } = useAuth();
  if (user?.role !== ADMIN_ROLE) {
    return <Navigate to="/" replace />;
  }
  return children || <Outlet />;
}
export function ProtectedUser({ children }) {
  const { user } = useAuth();
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children || <Outlet />;
}
export function ProtectedEngineer({ children }) {
  const { user } = useAuth();
  if (user?.role !== ENGINEER_ROLE) {
    return <Navigate to="/" replace />;
  }
  return children || <Outlet />;
}
export function ProtectedRoute({ children, isAllowed, redirectedPath }) {
  if (!isAllowed) {
    return <Navigate to={redirectedPath} replace />;
  }
  return children || <Outlet />;
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
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isAllowed: PropTypes.bool.isRequired,
  redirectedPath: PropTypes.string.isRequired,
};
