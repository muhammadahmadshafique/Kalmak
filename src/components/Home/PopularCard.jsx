import React from "react";

function PopularCard({p1,p2,city,img}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-[#e0dbdb] ">
      <img className="w-full rounded-xl" src={img} alt="Karachi" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 fontjust">
          {p1} <span className="city">{city}</span>{" "}
        </div>
        <p className="placepara">
         {p2}
        </p>
      </div>
    </div>
  );
}

export default PopularCard;
