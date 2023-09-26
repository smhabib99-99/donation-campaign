

const Banner = () => {
    return (
        <div >
            {/* <img className="hero-overlay" src="../resources/people-meeting-community-center.jpg" alt="" /> */}
            {/* style={{backgroundImage:'URL("../resources/people-meeting-community-center.jpg")' }} */}

            <div>
                <div className="relative -z-10 opacity-70 w-full">
                    <img className='h-96 w-full' src="../resources/people-meeting-community-center.jpg" alt="" />
                </div>
                <div className="absolute top-72 right-4 left-10 z-10">
                    <div>
                        <h1 className='text-5xl font-bold text-center my-6'>I Grow By Helping People In Need</h1>
                    </div>
                    <div className='items-center text-center mt-10'>
                        {/* <input type="text" placeholder="Search here...." className="input relative input-bordered w-full max-w-xl" /> */}
                        <input type="search" name="" placeholder='Search here....' className='border py-2 pl-4 relative rounded-lg left-12 w-full max-w-xl' id="" />
                        <button className='bg-red-400 rounded-r-lg absolute py-2 px-3 text-white'>Search</button>
                    </div>
                </div>
            </div>

            <img src="" alt="" />
        </div>
    );
};

export default Banner;