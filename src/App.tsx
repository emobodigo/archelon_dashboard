import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Pages/Admin/Layout/Layout";
import Login from "./Pages/Admin/Login/Login";
import ErrorPage from "./Pages/ErrorPage";
import PublicHome from "./Pages/Public/PublicHome";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import Settings from "./Pages/Admin/Settings/Settings";
import Administrator from "./Pages/Admin/Administrator/Administrator";

const App = () => {
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

  return <RouterProvider router={router} />;
};

export default App;
