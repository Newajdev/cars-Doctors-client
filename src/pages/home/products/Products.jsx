import ProductsCard from "./ProductsCard";
import Products01 from "../../../assets/images/products/1.png";
import Products02 from "../../../assets/images/products/2.png";
import Products03 from "../../../assets/images/products/3.png";
import Products04 from "../../../assets/images/products/4.png";
import Products05 from "../../../assets/images/products/5.png";
import Products06 from "../../../assets/images/products/6.png";

const Products = () => {
    return (
        <div>
            <div className='text-center mb-12 space-y-5'>
                <h3>Popular Products</h3>
                <h1 className="text-5xl font-bold">Browse Our Products</h1>
                <p className="w-2/3 mx-auto">
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className='grid grid-cols-3 gap-6'>
                <ProductsCard ProductImg={Products01}></ProductsCard>
                <ProductsCard ProductImg={Products02}></ProductsCard>
                <ProductsCard ProductImg={Products03}></ProductsCard>
                <ProductsCard ProductImg={Products04}></ProductsCard>
                <ProductsCard ProductImg={Products05}></ProductsCard>
                <ProductsCard ProductImg={Products06}></ProductsCard>
            </div>
            <div className='flex justify-center items-center w-full my-10 '>
                <button className="btn btn-outline btn-error ">More Products</button>
            </div>
        </div>
    );
};

export default Products;