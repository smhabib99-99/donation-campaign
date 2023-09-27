import { useEffect, useState } from "react";
import DonationCard from "../Donation/DonationCard";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound,setNOFound] =useState(false);

    const[isSeeAll,setIsSeeAll] = useState(false)
    

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donate"));

        if(donationItems){
            setFavorites(donationItems);
        }
        else{
            setNOFound("No Data Available")
        }

    },[])

    // console.log(favorites);


    return (
        
        <div>
            <div>
                {
                    noFound?<p className="h-[80vh] flex justify-center items-center">{noFound}</p>:
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-5 m-4 ">
                        {
                            // favorites.map(donation =><DonationCard key={donation.id} donation={donation}></DonationCard>)
                            isSeeAll ? favorites.map(donation => <FavoritesCard key={donation.id} donation={donation}></FavoritesCard>)
                            :
                            favorites.slice(0,4).map(donation => <FavoritesCard key={donation.id} donation={donation}></FavoritesCard>)
                        }
                    </div>
                    
                }
            </div>
            {
                favorites.length > 4 &&  <button className="bg-green-600 text-base mx-auto rounded-lg p-2 text-white px-3 block" onClick={()=>setIsSeeAll(!isSeeAll)}>
                {/* See All */}
                {isSeeAll?"See Less":"See All"}
                {/* {
                    if(favorites.length>3){
                        isSeeAll?"See Less" : "See All"
                    }
                } */}
            </button>
            }
            
        </div>
    );
};

export default Favorites;


// {/* <button className="bg-green-600 text-base mx-auto rounded-lg p-2 text-white px-3 block" onClick={()=>setIsSeeAll(!isSeeAll)}>
                {/* See All */}
                // {isSeeAll?"See Less":"See All"}
                // {/* {
                //     if(favorites.length>3){
                //         isSeeAll?"See Less" : "See All"
                //     }
                // } */}
            // </button> */}

// {
//     noData?<p className='h-[80vh] flex justify-center items-center'>{noData}</p>: 
    
//     <div>
//         <div>
            
//         </div>
//     </div>
// }


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