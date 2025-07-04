import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, price, img, title } = service;
    
    return (
        <div className="card flex flex-col bg-base-100 w-96 shadow-sm ">
            <div className="px-5 pt-5">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </div>
            <div className="card-body justify-end">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between items-center'>
                    <p>Price: ${price}</p>
                    <Link to={`/services/${_id}`}><FaArrowRight className='hover:text-yellow-500' /></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;