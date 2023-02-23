import React from 'react'
import { Link } from 'react-router-dom'

function SafetyCard() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg border border-[#e0dbdb] ">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
        kalmak Camper' standards
        </div>
        <p className="placepara">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus porta rutrum. Aliquam eros elit, ultricies et congue eget, vehicula eu sapien. Vestibulum eu felis id sem feugiat fermentum at non lacus. In ac convallis nisl
        </p>
      </div>
      <div className="py-8">
        <button className="whitespace-nowrap discoverbutton flex justify-center py-12 w-[82%] mx-auto md:w-fit h-fit">
          <Link to="/LearnMore">Learn More</Link>
        </button>
      </div>
    </div>
  )
}

export default SafetyCard