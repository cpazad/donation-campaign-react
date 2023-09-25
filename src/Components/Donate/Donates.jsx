import React, { useEffect, useState } from 'react'
import Donate from './Donate'


const Donates = () => {
 const [donations, setDonations] = useState([])

 useEffect(()=>{
    fetch('donation.json')
    .then(res => res.json())
    .then(data => setDonations(data))
 },[])
  
    return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-10'>

      {
        donations.map(donation =><Donate key={donation.index} donation={donation}></Donate>)
      }
        
    </div>
  )
}

export default Donates