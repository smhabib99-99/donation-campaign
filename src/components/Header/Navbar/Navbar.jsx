import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>


            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-700 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
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