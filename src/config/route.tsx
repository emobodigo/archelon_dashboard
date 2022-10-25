import { createBrowserRouter, Navigate } from "react-router-dom";
import Administrator from "../Pages/Admin/Administrator/Administrator";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Layout from "../Pages/Admin/Layout/Layout";
import Login from "../Pages/Admin/Login/Login";
import Settings from "../Pages/Admin/Settings/Settings";
import ErrorPage from "../Pages/ErrorPage";
import PublicHome from "../Pages/Public/PublicHome";

const currentUser = true;

const ProtectedRoute = ({ children }: any) => {
  if (!currentUser) {
    return <Navigate to="/admin" />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/app/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/app/settings",
        element: <Settings />,
      },
      {
        path: "/app/administrator",
        element: <Administrator />,
      },
    ],
  },
]);

export default router;
