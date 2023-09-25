import Banner from "../../Components/Banner/Banner";
import Donates from "../../Components/Donate/Donates";

const Home = () => {
  return (
    <div>
      <div className="z-[-10] mt-[-100px]">
        <Banner></Banner>
        <Donates></Donates>
        {/* <Donates donations={donations}></Donates> */}
      </div>
    </div>
  );
};

export default Home;
