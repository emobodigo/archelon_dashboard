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

const App = () => {
  const currentUser = false;

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
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
