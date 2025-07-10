import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Services from "../pages/services/services/Services";
import CheckOut from "../pages/checkout/CheckOut";
import CardDetails from "../pages/carddetails/CardDetails";
import UpdateBookings from "../pages/updatebookings/UpdateBookings";
import Service from "../pages/home/service/Service";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Service></Service>
            },
            {
                path: "/services/:id",
                element: <Services></Services>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/services/procees/:service_id",
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/process/${params.service_id}`)
            },
            {
                path: "/carddetails",
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>
            },
            {
                path: "/carddetails/:id/update",
                element: <CardDetails></CardDetails>,
            },
            
        ]
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    },
])

export default router