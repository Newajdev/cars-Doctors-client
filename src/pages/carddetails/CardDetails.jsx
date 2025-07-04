import { useLoaderData } from "react-router-dom";
import Banner from "../home/banner/Banner";
import CardItem from "./CardItem";


const CardDetails = () => {
    const Bookings = useLoaderData()
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