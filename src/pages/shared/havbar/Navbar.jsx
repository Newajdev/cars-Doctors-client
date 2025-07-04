import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { IoIosLogOut } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
    const { user , LogOut } = useContext(AuthContext)
    // const [Bookings, setBookings] = useState([])
    

    // const userEmail = user.email ;
    // console.log(userEmail);
    
    
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/bookings/?${userEmail}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setBookings(data)
    //         // console.log(Bookings)
    //     } )
    // },[setBookings, userEmail])

    const hendlerLogOut = () =>{
        LogOut()
        .then(res => console.log(res))
        .catch(errror => console.log(errror)
        )
    }


    const ListItems = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/services"}>Services</NavLink></li>
        <li><NavLink to={"/blog"}>Blog</NavLink></li>
        <li><NavLink to={"/Contact"}>Contact</NavLink></li>



    </>
    return (
        <div className="navbar bg-base-100 shadow-sm py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {ListItems}
                    </ul>
                </div>
                <Link to={"/"} ><img className="w-28 btn btn-ghost" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {ListItems}
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {
                    user ? <>
                        <div className="indicator mr-3">
                        {/* <span className="indicator-item px-2 rounded-full bg-red-400 text-white ">{Bookings.length}</span> */}
                        <span className="indicator-item px-2 rounded-full bg-red-400 text-white "></span>
                            <NavLink className="m-2 bg-none border-none hover:bg-none" to={`/carddetails/${user.email}`}><MdOutlineShoppingBag className="font-bold text-2xl" /></NavLink>
                        </div>
                    </> : ''
                }
                <button className="btn btn-outline btn-error "><Link to={'/register'}> Appointment </Link></button>
                {
                    user ? <button onClick={hendlerLogOut} className="btn btn-error text-white"><Link to={'/'} className="flex justify-center items-center gap-3"> Log out <IoIosLogOut className="font-bold text-xl" /></Link></button> : ''
                }
            </div>
        </div>
    );
};

export default Navbar;