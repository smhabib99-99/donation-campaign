import { useEffect, useState } from "react";
import DonationCard from "../Donation/DonationCard";
import FavoritesCard from "./FavoritesCard";


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);
    const [noFound,setNOFound] =useState(false);
    

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem("donate"));

        if(donationItems){
            setFavorites(donationItems);
        }
        else{
            setNOFound("No Data Found")
        }

    },[])

    // console.log(favorites);


    return (
        
        <div>
            <div>
                {
                    noFound?<p className="h-[80vh] flex justify-center items-center">{noFound}</p>:
                    
                    <div className="grid grid-cols-2 gap-5 p-5 m-4 ">
                        {
                            // favorites.map(donation =><DonationCard key={donation.id} donation={donation}></DonationCard>)
                            favorites.map(donation=> <FavoritesCard key={donation.id} donation={donation}></FavoritesCard>)
                        }
                    </div>
                }
            </div>
            
        </div>
    );
};

export default Favorites;




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