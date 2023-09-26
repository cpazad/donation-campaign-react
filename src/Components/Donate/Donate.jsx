import React from "react";
import { Link } from "react-router-dom";

const Donate = ({ donation }) => {
  const { id, picture, title, category,category_bg,card_bg,text_button_bg } = donation;

  return (
    <div>
      <Link to={`/donation/${id}`}>
        <div className="card card-compact bg-base-100 shadow-xl m-3 p-0 rounded" style={{backgroundColor:card_bg}}>
          <figure>
            <img src={picture} alt={category} />
          </figure>
          <div className="card-body">
            <div className="card-actions justify-start">
              <button className="btn btn-primary btn-sm border-0 " style={{backgroundColor:text_button_bg, color:category_bg }}> {category} </button>
            </div>
            <h2 className="card-title text-lg" style={{color:category_bg}}> {title} </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Donate;
