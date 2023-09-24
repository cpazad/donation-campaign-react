const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen z-[-20]"
        style={{
          backgroundImage:
            "url(https://ogdenlv.com/wp-content/uploads/2018/12/DK_OGDEN_GivingBack_Local_Las_Vegas_Charities_1200x530_feature.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">
              I Grow By Helping People In Need
            </h1>
            {/* Search input */}
            <div className="join border-0">
              <div>
                <div>
                  <input
                    className="input input-bordered join-item"
                    placeholder="Search"
                  />
                </div>
              </div>
              <select className="select select-bordered join-item text-neutral">
                <option disabled selected>
                  Filter
                </option>
                <option>Sci-fi</option>
                <option>Drama</option>
                <option>Action</option>
              </select>
              <div className="indicator">
                {/* <span className="indicator-item badge badge-secondary">
                  new
                </span> */}
                <button className="btn join-item bg-red-600 to-white">Search</button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
// https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg
