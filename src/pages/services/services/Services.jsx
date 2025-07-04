import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from '../../home/banner/Banner';
import FacilityCard from '../FacilityCard';

const Services = () => {
    const service = useLoaderData()
    const {service_id, title, img, price, description, facility: Facilitys} = service;

    return (
        <div>
            <Banner></Banner>

            <div className='grid grid-cols-3 gap-8'>
                <div className="col-span-2">
                    <img className='w-full rounded-2xl mb-12' src={img} alt="" />
                    <h3 className='text-4xl font-bold mb-8'>{title}</h3>
                    <p className="text-gray-600 text-justify">{description}</p>
                    <div className='py-8 grid grid-cols-2 gap-8'>
                        {
                            Facilitys.map(facility => <FacilityCard facility={facility}></FacilityCard>)
                        }

                    </div>
                    <p className='text-center text-4xl font-bold'>Prcie ${price}</p>
                    <div className='flex justify-center p-12'>
                        <Link to={`/services/procees/${service_id}/my`} className="btn bg-red-700 p-8 text-white">Proceed Checkout</Link>
                    </div>

                </div>
                <div className='bg-green-600 '>

                </div>

            </div>
            
        </div>
    );
};

export default Services;