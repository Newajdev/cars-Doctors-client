import React from 'react';
import { FaPen } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardItem = ({ booking, hendleChancelBooking }) => {

    const { _id, title, price, name, phone, email, img, status } = booking;

    
    
    return (
        <>

            <div className="col-span-1">
                <label className='flex justify-evenly'>
                    <RxCross2 onClick={() => hendleChancelBooking(_id)} className='w-6 h-6 hover:bg-gray-300 duration-500' />
                    <Link to={`/carddetails/${_id}/update`}><FaPen  className='w-6 h-6 hover:bg-gray-300 duration-500 p-1' /></Link>
                </label>
            </div>
            <div className="col-span-5">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20">
                            <img
                                src={img}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </div>
            <div className="col-span-3 font-bold">
                {title}
            </div>
            <div className="col-span-2">$ {price}</div>
            <div className="col-span-1">
                <button className={`btn ${status ? (status === 'Approved') ? 'btn-success' : 'btn-error' : 'btn-warning'} btn-xs`}>{status ? status : 'Pending'}</button>
            </div>

        </>
    );
};

export default CardItem;