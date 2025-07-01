import image01 from '../../../assets/images/about_us/person.jpg'
import image02 from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col items-center lg:flex-row gap-16 h-[552px]">
                <div className='w-2/4 h-full relative '>
                    <img src={image01} className="w-4/5 rounded-lg shadow-2xl" />
                    <img src={image02} className="w-2/4 rounded-lg shadow-2xl absolute right-0 border-8 -translate-y-2/4  border-white" />
                </div>
                <div className='w-2/4 h-full space-y-5 pr-10'>
                    <h3>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <p className="">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;