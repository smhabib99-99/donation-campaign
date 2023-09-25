import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className=''>


            <nav className='flex justify-between items-center py-12' >


                <div>
                    <Logo></Logo>
                </div>
                <ul className='flex gap-10'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li><NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                        }
                    >
                        Donation
                    </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div>
                <h1 className='text-5xl font-bold text-center my-6'>I Grow By Helping People In Need</h1>
            </div>
            <div className='items-center text-center mt-10'>
                {/* <input type="text" placeholder="Search here...." className="input relative input-bordered w-full max-w-xl" /> */}
                <input type="search" name="" placeholder='Search here....' className='border py-2 pl-4 relative rounded-lg left-12 w-full max-w-xl' id="" />
                <button className='bg-red-400 rounded-r-lg absolute py-2 px-3 text-white'>Search</button>
            </div>
        </div>

    );
};

export default Navbar;