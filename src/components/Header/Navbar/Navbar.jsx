import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className=''>


            <nav className='flex justify-between items-center py-12'>


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


        </div>
    );
};

export default Navbar;