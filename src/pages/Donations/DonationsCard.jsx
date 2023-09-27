import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationsCard = ({ donation }) => {


    const { id, title, image, category, price, description, textColor, cardBackgroundColor,categoryBackgroundColor } = donation || {}


    return (
        <div>
            <div>
                <Link to={`/donations/${id}`}>
                    <div style={{ backgroundColor: cardBackgroundColor }} className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                        <div className="relative h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                            <img
                                src={image}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="mb-2 flex items-center justify-between">
                                <button className='rounded-md px-2' style={{backgroundColor:categoryBackgroundColor}}>
                                    <p style={{ color: textColor }} className="block font-sans text-sm font-medium leading-relaxed text-blue-gray-900 antialiased">
                                        {category}
                                    </p>
                                </button>
                                <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                                </p>
                            </div>
                            <p style={{ color: textColor }} className="block font-sans text-xl font-semibold leading-normal text-gray-700 antialiased opacity-75">
                                {title}
                            </p>
                        </div>
                        {/* <div className="p-6 pt-0">
                    <button
                        className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                
                    </button>
                </div> */}
                    </div>
                </Link>
            </div>
        </div>
    );
};

DonationsCard.propTypes = {
    donation: PropTypes.object,
};

export default DonationsCard;