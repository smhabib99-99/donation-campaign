import PropTypes from 'prop-types';
import DonationsCard from './DonationsCard';
import { useEffect, useState } from 'react';
// import DonationsCard from './DonationsCard';

const Donations = ({donations}) => {
    // console.log(donations)

    // const [donationns,setDonationns] = useState([])

    // const[noData,setNoData] = useState("")

    // useEffect(()=>{
    //     const donationItems = JSON.parse(localStorage.getItem('donate'))
    //     if(donationItems){
    //         setDonationns(donationItems)
    //     }
    //     else{
    //         // console.log('no data')
    //         setNoData('No data Available')
    //     }

    // },[])


    // console.log(donationns)

    return (
        <div>
            {/* {
                noData?<p className='h-[80vh] flex justify-center items-center'>{noData}</p>: 
                
                <div>
                    <div>

                    </div>
                </div>
            } */}




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 rounded-lg'>
                {
                    donations?.map(donation=> <DonationsCard key={donation.id} donation={donation} ></DonationsCard>)
                    // donations.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
                }
            </div>
            
        </div>
    );
};
// Donations.propTypes ={
//     donations: PropTypes.object
// }

Donations.propTypes = {
    donations: PropTypes.object
}

export default Donations;