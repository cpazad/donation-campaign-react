import { useLoaderData } from "react-router-dom";
import Donated from "../../Components/Donate/Donated";
import "./Donation.css";
import { useEffect, useState } from "react";
import { getStoredDonations } from "../../Utiltiy/localStorage";

const Donation = () => {
  const donations = useLoaderData();

  const [donated, setDonated] = useState([]);
  const [displayDonated, setDisplayDonated] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedDonationsIds = getStoredDonations();
    if (donations.length > 0) {
      const donatedItem = [];
      for (const id of storedDonationsIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donatedItem.push(donation);
        }
      }
      setDonated(donatedItem);
      setDisplayDonated(donatedItem);
    }
  }, [donations]);

  return (
    <>
      <h2 className="text-2xl">No of Donations: {donated.length}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {donated.slice(0, dataLength).map((donation) => (
          <Donated key={donation.id} donation={donation}></Donated>
        ))}
      </div>
      <div className={dataLength === donated.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(donated.length)}
          className="btn btn-primary mb-10"
        >
          {" "}
          Show All Donations{" "}
        </button>
      </div>
    </>
  );
};

export default Donation;
