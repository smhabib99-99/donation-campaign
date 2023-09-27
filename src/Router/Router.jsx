// import React from 'react';

import { Outlet, createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
// import Donation from "../pages/Donations/Donations";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Donations from "../pages/Donations/Donations";
import Donation from "../pages/Donation/Donation";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
// import DonationSingleCard from "../pages/DonationSingleCard/DonationSingleCard";

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
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader: () =>fetch('/public/homedata.json')
            },
            {
                path : "/donations",
                element : <Donations></Donations>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            // {
            //     // DonationSingleCard view dynamically without button feature
            //     path: "/donationsinglecard/:id",
            //     element:<DonationSingleCard></DonationSingleCard>,
            //     loader: () => fetch('/homedata.json')
            // }

            {
                path: "donations/:id",
                element: <Donation></Donation>,
                loader: () => fetch('/homedata.json')
            },
            {
                path:"/donation",
                element:<Favorites></Favorites>,
            }
        ]
    }
])

// export default myCreatedRoute;
export default myCreatedRoute;