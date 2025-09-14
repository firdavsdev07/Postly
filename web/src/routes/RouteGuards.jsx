import { Navigate } from "react-router";

export function PrivateRoute({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem("_id"));
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export function PublicRoute({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem("_id"));
  return isLoggedIn ? <Navigate to="/profile" /> : children;
}
