import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Donation from "../Donation/Donation";


const Home = () => {


    const donationData = useLoaderData()
    // console.log(donationData)

    return (
        <div>
            <Banner></Banner>
            <Donation donationData={donationData}></Donation>
        </div>
    );
};

export default Home;