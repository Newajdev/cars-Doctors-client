import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <div className='text-center mb-12 space-y-5'>
                <h3>Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="w-2/3 mx-auto">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                {
                    Services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center items-center w-full my-10 '>
                <button className="btn btn-outline btn-error ">More Services</button>
            </div>
        </>
    );
};

export default Service;