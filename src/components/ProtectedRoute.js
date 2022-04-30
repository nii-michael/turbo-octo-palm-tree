const ProtectedRoute = ({ token, children }) => {
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};
