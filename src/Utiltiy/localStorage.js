const getStoredDonations = () =>{
    const storedDonation = localStorage.getItem('Donations');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonation = id =>{
    const storedDonations = getStoredDonations();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('Donations', JSON.stringify(storedDonations))
    }
}

export { getStoredDonations, saveDonation}