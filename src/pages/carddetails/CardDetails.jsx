import Banner from "../home/banner/Banner";
import CardItem from "./CardItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";


const CardDetails = () => {
    const [Bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [user?.email])


    const hendleChancelBooking = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete your bookings",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = Bookings.filter(Bookings => Bookings._id !== _id)
                            setBookings(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                        }
                    });
            }
        });
    }

    return (
        <div>
            <Banner></Banner>


            <div className="py-10">

                <div className="grid grid-cols-12 items-center gap-y-6">
                    {
                        Bookings.map(booking => <CardItem key={booking._id} booking={booking} hendleChancelBooking={hendleChancelBooking}></CardItem>)
                    }
                </div >

            </div>
        </div>
    );
};

export default CardDetails;