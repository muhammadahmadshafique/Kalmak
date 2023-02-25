import React from 'react'

function OneBlog({p1,img,city,p2}) {
    const Read="Read More>>"
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-[#e0dbdb] ">
      <img className="w-full rounded-xl" src={img} alt="Karachi" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 fontjust">
          {p1} <span className="cityblog">{city}</span>{" "}
        </div>
        <p className="placepara">
         {p2}
        </p>
      </div>
      <p className='readmore underline py-6 cursor-pointer px-4 flex justify-end'>{Read}</p>
    </div>
  )
}

export default OneBlog