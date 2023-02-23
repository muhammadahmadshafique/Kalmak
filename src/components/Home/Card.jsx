import React from "react";

function Card() {
  return (
    <div>
      <div className="w-fit h-fit borderofcard p-2 border border-[#BFBABA] rounded-lg shadow-outer shadow-[#BFBABA]">
        <div className="relative">
          <div>
            <img
              className="w-[290px] h-[190px] object-contain"
              src="./picture-container.png"
              alt=""
              srcset=""
            />
          </div>
          <div className="bg-[#F3F7FF] absolute top-4 right-4 py-1 flex items-center justify-center gap-x-2 px-1 rounded">
            <img
              className="object-contain"
              src="./Star.png"
              alt="Star"
              srcset=""
            />
            <p className="rating">4.5</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between items-center px-1 mt-3">
            <p className="cardp1">Beautiful Camps</p>
            <img
              className="object-contain w-[18px] h-[18px]"
              src="./redhurt.png"
              alt="Heart"
              srcset=""
            />
          </div>
          <p className="cardp2 px-1">Fairly Meadows, Gilgit</p>
          <p className="night mt-2">
            <span className="dollar">$</span>
            <span className="price">25/</span> night
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
