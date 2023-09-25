import React from "react";
import { Link } from "react-router-dom";

const Donate = ({ donation }) => {
  const { id, picture, title, category } = donation;

  return (
    <div>
      <Link to={`/donation/${id}`}>
        <div className="card card-compact bg-base-100 shadow-xl m-3 p-0 rounded">
          <figure>
            <img src={picture} alt={category} />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-start">
              <button className="btn btn-primary btn-sm "> {category} </button>
            </div>
            <h2 className="card-title text-lg"> {title} </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Donate;
