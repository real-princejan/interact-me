import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);

  // If user data is available and the user is authenticated, render the child routes.
  if (auth) {
    return <Outlet />;
  }

  // If the user is not authenticated, redirect to the login page.
  return <Navigate to="/login" />;
};

export default PrivateRoute;
