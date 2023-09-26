import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const Donation = () => {

    const [donation, setDonation] = useState()


    const {id} = useParams()
    // console.log(id)

    const donations = useLoaderData()
    // console.log(donations)

    useEffect( () =>{

        const findDonation = donations.find(donation => donation.id == id)

        // console.log(findDonation)

        setDonation(findDonation)
        
    },[donations, id])

    // console.log(donation)


    return (
        <div className="flex items-center py-10 justify-center items-center">
            <DonationCard donation={donation}></DonationCard>
        </div>
    );
};

export default Donation;