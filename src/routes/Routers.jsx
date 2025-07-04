import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Services from "../pages/services/services/Services";
import CheckOut from "../pages/checkout/CheckOut";
import CardDetails from "../pages/carddetails/CardDetails";
import UpdateBookings from "../pages/updatebookings/UpdateBookings";

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
                path: "/services/:id",
                element: <Services></Services>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/services/procees/:service_id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/process/${params.service_id}`)
            },
            {
                path: "/carddetails/:email",
                element: <CardDetails></CardDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/?${params.email}`)
            },
            {
                path: "/carddetails/:id/update",
                element: <UpdateBookings></UpdateBookings>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/?${params.id}`)
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