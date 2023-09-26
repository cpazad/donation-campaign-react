import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveDonation } from "../../Utiltiy/localStorage";

const DonationDetails = () => {
  const donations = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donation) => donation.id === idInt);
  const { description, price, picture, title, category_bg } = donation;

  // toast function
  const showToast = (message) => {
    toast.success(message, { autoClose: 2000 });
  };

  const handleAddDonation = () => {
    saveDonation(idInt);
    return showToast("Donation added succeefully, Thank You");
    
  };

  return (
    <div>
      <div className="container">
        <img className="w-full rounded-md" src={picture} alt="Image" />
        <div className="content text-left">
          <button
            onClick={handleAddDonation}
            style={{ backgroundColor: category_bg }}
            className="btn text-white border-0 capitalize"
          >
            Donate {price}$
          </button>
        </div>
      </div>
      <div className="my-10 text-left p-5">
        <h2 className="text-3xl font-bold mb-3"> {title} </h2>
        <p>{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DonationDetails;
