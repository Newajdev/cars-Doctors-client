import { useContext} from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import RegistrationImage from '../../assets/images/login/login.svg'
import Navbar from "../shared/havbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate()
    const { registerUser } = useContext(AuthContext);

    const hendlerRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        registerUser(email, password)
            .then(result => {
                alert(`${result}'Registation Successful'`)
                form.reset();
                navigate('/login')
            })
            .then(error => {
                console.log(error)
            })


    }
    return (
        
       <div>
        <Navbar></Navbar>
         <div className="bg-base-200 p-14">
            <div className="grid grid-cols-2 gap-16">
                <div className="flex">
                    <img src={RegistrationImage} alt="" />
                </div>
                <div className="card bg-base-100 border border-gray-200 o p-16">
                    <div className="card-body">
                        <h3 className="font-semibold text-4xl text-center mb-6">Sign Up</h3>
                        <form onSubmit={hendlerRegister} className="fieldset">
                            <label className="label mb-2">Name</label>
                            <input type="text" name="name" className="input mb-3 w-full" placeholder="Your name" />
                            <label className="label mb-2">Email</label>
                            <input type="email" name="email" className="input mb-3 w-full" placeholder="Your Email" />
                            <label className="label mb-2">Confirm Password</label>
                            <input type="password" name="password" className="input mb-3 w-full" placeholder="Password" />
                            <input type="submit" className="btn btn-neutral mb-3" value={"Sign Up"} />
                        </form>
                        <p className="text-center">Or Sign Up with</p>
                        <div className="flex justify-center gap-3 my-6">
                            <div className="w-14 h-14 rounded-full bg-gray-200 text-2xl flex justify-center items-center"><FaFacebookF /></div>
                            <div className="w-14 h-14 rounded-full bg-gray-200 text-2xl flex justify-center items-center"><FaLinkedinIn /></div>
                            <div className="w-14 h-14 rounded-full bg-gray-200 text-2xl flex justify-center items-center"><FcGoogle /></div> 
                        </div>
                        <p className="text-center">Already have an account? <Link to="/login"><span className="font-bold text-red-500">Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Register;