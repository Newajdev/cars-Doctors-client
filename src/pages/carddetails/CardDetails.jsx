import Banner from "../home/banner/Banner";
import CardItem from "./CardItem";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const CardDetails = () => {
    const [Bookings, setBookings] = useState([])
    const {user} = useContext(AuthContext);

    useEffect(()=>{
        fetch (`http://localhost:5000/bookings/${user?.email}`)
        .then (res => res.json())
        .then (data => setBookings(data))
    },[user?.email])

    return (
        <div>
            <Banner></Banner>


            <div className="py-10">
                
                    <div className="grid grid-cols-12 items-center gap-y-6">
                        {
                            Bookings.map(booking => <CardItem key={booking._id} booking={booking}></CardItem>)
                        }
                    </div >
                
            </div>
        </div>
    );
};

export default CardDetails;