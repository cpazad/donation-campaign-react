import React from "react";

const Donated = () => {
  return (
    <div>
      <div className="card card-side bg-red-200 shadow-sm p-0 m-5 rounded-sm">
        <figure className="w-2/5 p-0">
          <img
          
            src="/museum.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body w-3/5">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-sm btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donated;
