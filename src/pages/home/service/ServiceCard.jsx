import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { price, img, title } = service;
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
                    <FaArrowRight />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;