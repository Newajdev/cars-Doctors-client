import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import RegistrationImage from '../../assets/images/login/login.svg'
import Navbar from '../shared/havbar/Navbar';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    
    

    const henldeLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1000
                });
                form.reset();
                
                // get access token
                const logedinUser = {email}
                axios.post('http://localhost:5000/jwt', logedinUser, {withCredentials: true})
                .then(res => {
                    console.log(res.data)
                    
                    if(res.data.success){
                        navigate(location?.state ? location?.state: "/")
                    }
                })
                .catch(error => console.log(error))
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: `${error}`,
                    showConfirmButton: false,
                    timer: 1000
                });
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
                            <h3 className="font-semibold text-4xl text-center mb-6">Login</h3>
                            <form onSubmit={henldeLogin} className="fieldset">

                                <label className="label mb-2">Email</label>
                                <input type="email" name="email" className="input mb-3 w-full" placeholder="Your Email" />
                                <label className="label mb-2">Confirm Password</label>
                                <input type="password" name="password" className="input mb-3 w-full" placeholder="Password" />
                                <input type="submit" className="btn btn-neutral mb-3" value={"Sign In"} />
                            </form>
                            <p className="text-center">Or Sign In with</p>
                            <div className="flex justify-center gap-3 my-6">
                                <div className="w-14 h-14 rounded-full bg-gray-200 text-2xl flex justify-center items-center"><FaFacebookF /></div>
                                <div className="w-14 h-14 rounded-full bg-gray-200 text-2xl flex justify-center items-center"><FaLinkedinIn /></div>
                                <div className="w-14 h-14 rounded-full bg-gray-200 text-2xl flex justify-center items-center"><FcGoogle /></div>
                            </div>
                            <p className="text-center">Don't have an account? <Link to="/register"><span className="font-bold text-red-500">Sing Up</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;