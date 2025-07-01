
import About from '../about/About';
import Banner from '../banner/Banner';
import ContactUS from '../contact/ContactUS';
import Products from '../products/Products';
import Service from '../service/Service';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <About></About>
                <Service></Service>
                <ContactUS></ContactUS>
                <Products></Products>
        </div>
    );
};

export default Home;