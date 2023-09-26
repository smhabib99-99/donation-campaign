// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import DsCard from "../DsCard/DsCard";


// const DonationSingleCard = () => {

//     // const { id, title, image, category, price, description, } = donation || {}
//     const [dscard, setDscard] = useState()

//     const {id} = useParams();
//     console.log(id)
//     // donationsinglecard=phones
//     const donationsinglecard = useLoaderData()
//     console.log(donationsinglecard);


//     useEffect(() => {
//         const findDscard = donationsinglecard.find(dscard => dscard.id === id)

//         console.log(findDscard);


//     }, [donationsinglecard, id])

//     return (
//         <div>
//             {/* DonationSingleCard */}


//             <div>
//                <DsCard></DsCard>
//             </div>



//         </div>
//     );
// };

// export default DonationSingleCard;