import Donated from "../../Components/Donate/Donated";
import DonationDetails from "../DonationDetails/DonationDetails"
import "./Donation.css";
const Donation = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <Donated></Donated>
        <Donated></Donated>
        <Donated></Donated>
        <Donated></Donated>
        <Donated></Donated>
        <Donated></Donated>
      </div>
      <div className="flex justify-center mb-10">
        <button className="btn btn-info"> Show More</button>
      </div>
     
    </>
  );
};

export default Donation;
