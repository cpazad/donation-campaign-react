import Donationchart from "./Donationchart";



const Statistics = () => {
  return (
    <div>
      <h3>Statistics</h3>
      <Donationchart></Donationchart>
      <div className="flex justify-center gap-2 items-center mb-10">
        <div className="flex justify-center gap-2 items-center">
            <p>Your Donation</p>
            <div className="h-3 w-12 bg-[#00C49F]"></div>
        </div>
        <div className="flex justify-center gap-2 items-center">
            <p>Total Donation</p>
            <div className="h-3 w-12 bg-[#0088FE]"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Statistics;
