import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./src/App";
import Dashboard from "./src/pages/Dashboard";
import Sites from "./src/pages/Sites";
import ErrorPage from "./src/pages/ErrorPage";
import Login from "./src/pages/LoginPage";
import Register from "./src/pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="/sites" replace />
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/sites",
                element: <Sites />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
])