import img01 from '../../../assets/images/homeCarousel/1.jpg'
import img02 from '../../../assets/images/homeCarousel/2.jpg'
import img03 from '../../../assets/images/homeCarousel/3.jpg'
import img04 from '../../../assets/images/homeCarousel/4.jpg'
const Banner = () => {

    
    return (
        <div className="carousel w-full my-10 rounded-2xl">
            <div id="slide1" className="carousel-item relative w-full h-[600px]">
                <img
                    src={img01}
                    className="w-full" />
                <div className="absolute h-full left-0 right-0 bottom-0 flex flex-col  justify-center gap-5 bg-linear-to-r from-[#151515] to-[#15151500] ">
                    <div className="w-2/5 space-y-7 pl-24 text-white">
                        <h3 className="text-6xl font-black">Affordable Price For Car Servicing</h3>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px]">
                <img
                    src={img02}
                    className="w-full" />
                <div className="absolute h-full left-0 right-0 bottom-0 flex flex-col  justify-center gap-5 bg-linear-to-r from-[#151515] to-[#15151500] ">
                    <div className="w-2/5 space-y-7 pl-24 text-white">
                        <h3 className="text-6xl font-black">Affordable Price For Car Servicing</h3>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px]">
                <img
                    src={img03}
                    className="w-full" />
                <div className="absolute h-full left-0 right-0 bottom-0 flex flex-col  justify-center gap-5 bg-linear-to-r from-[#151515] to-[#15151500] ">
                    <div className="w-2/5 space-y-7 pl-24 text-white">
                        <h3 className="text-6xl font-black">Affordable Price For Car Servicing</h3>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px]">
                <img
                    src={img04}
                    className="w-full" />
                <div className="absolute h-full left-0 right-0 bottom-0 flex flex-col  justify-center gap-5 bg-linear-to-r from-[#151515] to-[#15151500] ">
                    <div className="w-2/5 space-y-7 pl-24 text-white">
                        <h3 className="text-6xl font-black">Affordable Price For Car Servicing</h3>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                    </div>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;