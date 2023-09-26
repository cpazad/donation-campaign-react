import React from "react";
import { Link } from "react-router-dom";

const Donated = ({donation}) => {
  
  const {id,price, picture, title, category,category_bg,card_bg,text_button_bg} = donation;
  console.log(donation)
  return (
    <div>
      <div style={{backgroundColor:card_bg}} className="card card-side bg-red-200 shadow-sm p-0 m-5 rounded-sm">
        <figure className="w-2/5 p-0">
          <img
          
            src={picture}
            alt="Movie"
          />
        </figure>
        <div className="card-body w-3/5 text-left justify-start">
        <div className="card-actions justify-start">
            <button style={{backgroundColor:text_button_bg, color:category_bg}} className="btn btn-sm border-0 capitalize rounded-sm">{category}</button>
          </div>
          <h2 className="card-title">{title}</h2>
          <p style={{color:category_bg}}>${price}</p>
          <div className="card-actions justify-start">
            <Link to={`/donation/${id}`}>  <button style={{backgroundColor:category_bg}} className="btn btn-sm btn-primary capitalize rounded-sm border-0"> View Details </button></Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donated;
