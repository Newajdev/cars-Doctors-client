
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";


const ProductsCard = ({ ProductImg }) => {
    
    return (
        
            <div className="card flex flex-col bg-base-100 w-96 shadow-sm relative group">
                
                <div className="w-10/12 h-10/12 mx-auto mt-7 rounded-2xl bg-gray-200">
                    <div className="p-10">
                        <img
                            src={ProductImg}
                            alt="Shoes"
                            className="rounded-xl  my-auto" />
                    </div>
                </div>
                <div className="card-body items-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                    <h2 className="card-title">Cools Led Light</h2>
                    <div className='flex justify-between items-center'>
                        <p>$20.00</p>
                    </div>
                </div>
                <div className="absolute top-14 right-3 -translate-2/4 invisible group-hover:visible duration-500">
                    <div className="btn bg-white text-2xl">
                        <MdOutlineShoppingBag />
                    </div>
                </div>
            </div>
        
    );
};

export default ProductsCard;