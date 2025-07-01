import phone from '../../../assets/images/Contact/phone.png'
import calander from '../../../assets/images/Contact/calander.png'
import Location from '../../../assets/images/Contact/location.png'

const ContactUS = () => {
    return (
        <div className='w-full bg-black my-32 px-16 py-24 rounded-2xl flex justify-between'>

            <div className='flex gap-5 justify-center items-center'>
                <img className='w-10 h-10' src={calander} alt="" />
                <div>
                    <p className="text-base text-white">We are open monday-friday</p>
                    <h2 className="text-3xl text-white font-bold">7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <img className='w-10 h-10' src={phone} alt="" />
                <div>
                    <p className="text-base text-white">Have a question?</p>
                    <h2 className="text-3xl text-white font-bold">+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex gap-5 justify-center items-center'>
                <img className='w-10 h-10' src={Location} alt="" />
                <div>
                    <p className="text-base text-white">Need a repair? our address</p>
                    <h2 className="text-3xl text-white font-bold">Liza Street, New York</h2>
                </div>
            </div>
            
        </div>
    );
};

export default ContactUS;