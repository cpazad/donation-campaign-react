import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  const {description, price, picture, title, category_bg} = donation;
  return (
    <div>
         <div className="container">
        <img className="w-full rounded-md" src={picture} alt="Image" />
        <div className="content text-left">
          
            <button style={{backgroundColor:category_bg}} className="btn text-white border-0 capitalize">Donate {price}$</button>
        </div>
      </div>
      <div className="my-10 text-left p-5">
        <h2 className="text-3xl font-bold mb-3"> {title} </h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DonationDetails