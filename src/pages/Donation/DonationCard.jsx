import PropTypes from 'prop-types'
import swal from 'sweetalert';

const DonationCard = ({ donation }) => {
    const { id, title, image, category, price, description, textColor, cardBackgroundColor,categoryBackgroundColor } = donation || {}
    // const { id, title, image, category, price, description, textColor, cardBackgroundColor,categoryBackgroundColor } = donation || {}

    const handleAddToDonation = () =>{
        const addDonationItemsArray =[];

        // console.log(donation);
        const donationItems = JSON.parse(localStorage.getItem('donate'))

        if(!donationItems){
            addDonationItemsArray.push(donation)
            localStorage.setItem('donate',JSON.stringify(addDonationItemsArray))
            swal("Good job!", "Your donation is successful!", "success");
            
        }
        else{
            const isExists = donationItems.find(donation => donation.id ==id)

            if(!isExists){


            addDonationItemsArray.push(...donationItems,donation)
            localStorage.setItem('donate',JSON.stringify(addDonationItemsArray))
            swal("Good job!", "Your donation is successful!", "success");
            }
            else{
                swal("Ayy!", "You already Donated!", "error");
            }

        }




    }



    return (
        <div>
            <div>
                <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">


                    <div>

                        <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                            <img
                                src={image}
                                alt="img-blur-shadow"
                                layout="fill"
                            />
                        </div>




                        <div className="p-6 rounded-lg pt-0">
                            <div className="bg-hero-overlay">
                                <button style={{backgroundColor:textColor}}
                                onClick={handleAddToDonation}
                                    className="select-none absolute bottom-72 drawer-overlay rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    data-ripple-light="true"
                                >
                                    Donate {price}
                                </button>
                            </div>
                        </div>


                    </div>





                    <div className="p-6">
                        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {category}
                        </h5>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                            {description}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object
}

export default DonationCard;