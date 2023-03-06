import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import NavBar from "./pages/components/navBar/NavBar";
import RightBar from "./pages/components/rightBar/RightBar";
import LeftBar from "./pages/components/leftBar/LeftBar";
import "../src/style.scss";
import { AuthContext } from "./pages/context/auth";
import { useContext } from "react";

import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'


function App() {
  const {currentUser} = useContext(AuthContext)

  const queryClient = new QueryClient()


  const Layout = () => {
    return (
  <QueryClientProvider client={queryClient}>
      <div>
          <div className="theme-dark"></div>
        <NavBar />
        <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
      </div>
      </QueryClientProvider>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    { path: "/register", element: <Register /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
