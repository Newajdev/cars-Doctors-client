import { useLoaderData } from "react-router-dom";


const UpdateBookings = () => {
    const Bookings = useLoaderData()
    const { _id, title, price, name, phone, email, img, status } = Bookings;
    return (
        <div className="bg-base-200">
            <div className="p-24">
                <h3 className='text-center font-bold mb-4 text-3xl'>Update Your Booking</h3>
                <form className="fieldset">
                    <div className='grid grid-cols-2 gap-4'>
                        <input type="text" name='name' className="input w-full" placeholder="Name" defaultValue={name} />
                        <input type="text" name='name' className="input w-full" placeholder="Name" value={`$ ${price}`} />
                        <label className="select w-full">
                            <select>
                                <option>Personal</option>
                                <option>Business</option>
                            </select>
                        </label>
                        <input type="text" className="input inputg w-full" placeholder="Price" value={`$ `} />
                        <input type="email" name='email' className="input w-full" placeholder="Email" value={''} />
                        <input type="text" name='phone' className="input w-full" placeholder="Your Phone" />
                        <textarea name='details' className="textarea w-full col-span-2" placeholder="Your Message"></textarea>
                    </div>

                    <input type='submit' value="Order Confirm" className="btn btn-neutral mt-4" />
                </form>
            </div>

        </div>
        // <div className="bg-base-200">
        //         <div className="p-24">
        //             <h3 className='text-center font-bold mb-4 text-3xl'>Service Name: {title}</h3>
        //             <form onSubmit={hendleCheckOut} className="fieldset">
        //                 <div className='grid grid-cols-2 gap-4'>
        //                     <input type="text" name='name' className="input w-full" placeholder="Name" />
        //                     <input type="text" className="input inputg w-full" placeholder="Price" value={`$ ${price}`} />
        //                     <input type="email" name='email' className="input w-full" placeholder="Email" value={user?.email} />
        //                     <input type="text" name='phone' className="input w-full" placeholder="Your Phone" />
        //                     <textarea name='details' className="textarea w-full col-span-2" placeholder="Your Message"></textarea>
        //                 </div>

        //                 <input type='submit' value="Order Confirm" className="btn btn-neutral mt-4" />
        //             </form>
        //         </div>

        //     </div>
    );
};

export default UpdateBookings;