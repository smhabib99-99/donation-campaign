

const FavoritesCard = ({donation}) => {
    const { id, title, image, category, price, description,textColor, cardBackgroundColor,categoryBackgroundColor } = donation || {}





    return (
        <div>
            <div>
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h6 style={{color:textColor}} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {/* startups */}
                            <button>{category}</button>
                            
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {/* Lyft launching cross-platform service this week */}
                            {title}
                        </h4>
                        <p style={{color:textColor}} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            {/* Like so many organizations these days, Autodesk is a company in
                            transition. It was until recently a traditional boxed software company
                            selling licenses. Yet its own business model disruption is only part of
                            the story */}
                            {price}
                        </p>
                        <a className="inline-block" href="#">
                            <button style={{backgroundColor:textColor}}
                                className=" px-2 flex select-none items-center gap-2 text-white rounded-lg py-3 text-center align-middle font-sans text-xs font-bold uppercase transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                {/* Learn More */}
                                View Details
                                {/* <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg> */}
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoritesCard;