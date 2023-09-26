import PropTypes from 'prop-types';
import DonationsCard from './DonationsCard';
// import DonationsCard from './DonationsCard';

const Donations = ({donations}) => {
    // console.log(donations)



    return (
        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 rounded-lg'>
                {
                    // donations?.map(donation=> <DonationsCard key={donation.id} donation={donation} ></DonationsCard>)
                    donations.map(donation => <DonationsCard key={donation.id} donation={donation}></DonationsCard>)
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