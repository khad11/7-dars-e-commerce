// rrd import
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";

//pages
import {
  About,
  Contact,
  Cart,
  SingleProduct,
  Login,
  Home,
  Register,
} from "./pages";

// loaders
import { loader as HomeLoader } from "./pages/Home";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

// GLOBAL CONTEXT
import { useGlobalContext } from "./hooks/useGlobalContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  const { user, authReady } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),

      children: [
        {
          index: true,
          element: <Home />,
          loader: HomeLoader,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
          loader: SingleProductLoader,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <>{authReady && <RouterProvider router={routes} />}</>;
}

export default App;
