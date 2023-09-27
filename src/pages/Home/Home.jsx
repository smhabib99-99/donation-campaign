import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donations from "../Donations/Donations";
// import Donation from "../Donations/Donations";
// import PropTypes from 'prop-types'


const Home = () => {


    // const donationData = useLoaderData()
    // console.log(donationData)
    // const donations = useLoaderData()
    const donations = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            {/* <Donation donationData={donationData}></Donation> */}
            <Donations donations={donations}></Donations>
        </div>
    );
};

// Home.propTypes = {
//     donations: PropTypes.object
// }

export default Home;
// export default Home;