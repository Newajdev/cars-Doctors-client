import  { useContext } from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import Banner from '../home/banner/Banner';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const Navigate = useNavigate()
    const { title, price, img } = service;



    const hendleCheckOut = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const details = form.details.value;
        const email = form.email.value;

        const OrderDetails = { title, price, name, phone, details, email, img }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(OrderDetails)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your Booking Submited. We will Call you in Short",
                        icon: "success",
                        draggable: true
                    });
                    form.reset()
                    Navigate(`/carddetails/${email}`)
                } else {
                    Swal.fire({
                        title: "Something Wrong",
                        icon: "error",
                        draggable: true
                    });
                }


            })



    }
    return (
        <div>
            <Banner></Banner>
            <div className="bg-base-200">
                <div className="p-24">
                    <h3 className='text-center font-bold mb-4 text-3xl'>Service Name: {title}</h3>
                    <form onSubmit={hendleCheckOut} className="fieldset">
                        <div className='grid grid-cols-2 gap-4'>
                            <input type="text" name='name' className="input w-full" placeholder="Name" />
                            <input type="text" className="input inputg w-full" placeholder="Price" value={`$ ${price}`} />
                            <input type="email" name='email' className="input w-full" placeholder="Email" value={user?.email} />
                            <input type="text" name='phone' className="input w-full" placeholder="Your Phone" />
                            <textarea name='details' className="textarea w-full col-span-2" placeholder="Your Message"></textarea>
                        </div>

                        <input type='submit' value="Order Confirm" className="btn btn-neutral mt-4" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default CheckOut;