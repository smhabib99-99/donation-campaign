// import React from 'react';

import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";

// const Router = () => {
//     return (
//         <div>

//         </div>
//     );
// };

const myCreatedRoute = createBrowserRouter([

    {
        path :"/",
        element:<MainLayout></MainLayout>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;