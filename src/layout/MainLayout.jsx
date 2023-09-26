
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar/Navbar';
import Banner from '../components/Header/Banner/Banner';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;