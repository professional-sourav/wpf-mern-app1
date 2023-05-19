import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./src/App";
import Dashboard from "./src/components/pages/Dashboard";
import Sites from "./src/components/pages/Sites";
import ErrorPage from "./src/components/pages/ErrorPage";

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
])