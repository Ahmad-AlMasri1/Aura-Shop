import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "product/:id",
                element: <ProductDetails />
            },
            {
                path:'cart',
                element: <Cart />
            }
        ]

    },

    {
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register /> 
            }
        ]
    }



]);
export default router;