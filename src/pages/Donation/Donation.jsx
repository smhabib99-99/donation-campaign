import PropTypes from 'prop-types';
import DonationCard from './DonationCard';

const Donation = ({donationData}) => {
    console.log(donationData)
    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 rounded-lg'>
                {
                    donationData?.map(donation=> <DonationCard key={donation.id} donation={donation} ></DonationCard>)
                }
            </div>
            
        </div>
    );
};
Donation.propTypes ={
    donationData: PropTypes.object
}

export default Donation;