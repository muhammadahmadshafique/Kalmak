import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Datepicker from "react-tailwindcss-datepicker";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from '../components/Home/Footer'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Navbar from "../components/Home/Navbar";

function ListingDiscription() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div>
      <Navbar />
      <p className="OurBlog2 py-6 w-[86%] mx-auto">Beautifull Camps</p>
      <div className="w-[86%] mx-auto">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="" src="./imageslider.png" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="./imageslider.png" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="./imageslider.png" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="./imageslider.png" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="./imageslider.png" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="./imageslider.png" alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="" src="./imageslider.png" alt="" srcset="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-col md:flex-row gap-x-12 w-[86%] mx-auto mt-20 ">
        {/* left */}
        <div className="md:w-[65%]">
          {/* first left */}
          <div className="space-y-6">
            <p className="desandwhat w-fit px-6">Description:</p>
            <p className="dis">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit, sit amet
              feugiat lectus. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Praesent auctor purus
              luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
              rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
              vel bibendum lorem. Morbi convallis convallis diam sit amet
              lacinia. Aliquam in elementum tellus..
            </p>
          </div>
          {/* second left */}
          <div className="space-y-6 py-8">
            <p className="desandwhat w-fit px-6">What this place offers:</p>
            <div className="space-y-6 py-4 w-fit">
              <div className="flex items-center gap-x-3">
                <img src="./car.png" alt="" srcset="" />
                <p>Car Parking</p>
              </div>
              <div className="flex ml-[-11px] gap-x-1 items-center">
                <img src="./cam.png" alt="" srcset="" />
                <p>Campfire</p>
              </div>
              <div className="flex items-center gap-x-3">
                <img src="./car.png" alt="" srcset="" />
                <p>Car Parking</p>
              </div>
              <div className="flex items-center ml-[-11px] gap-x-1">
                <img src="./cam.png" alt="" srcset="" />
                <p>Campfire</p>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="md:w-[35%] borderright  py-12 px-8 h-fit ">
          <p className="night ml-3 pb-3">$75/night</p>
          <div className="bg-[#B6DBCE] rounded-xl input">
            <Datepicker
              value={value}
              onChange={handleValueChange}
              showShortcuts={true}
              inputClassName="font-normal bg-blue-300 dark:bg-green-900 dark:placeholder:text-green-100" 
            />
          </div>
          <div className=" py-2  rounded-xl px-4">
            <p className="guest py-2">Guests</p>
            <input placeholder="Number of Guests" className="font-sm outline-none" type="" name="" id="" />
          </div>
          <button className="bg-[#89B374] my-4 re w-full p-3 rounded-xl ">Reserver</button>
          <div className="space-y-4 mt-2">
            <div className="flex justify-between items-center">
              <p className="n1">$85x5 Nights</p>
              <p className='n1'>435$</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="n1">Cleaning Fee</p>
              <p className='n1'>35$</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="n1">Service Fee</p>
              <p className='n1'>30$</p>
            </div>
          </div>
          <hr className="h-1 w-full bg-black my-4" />
          <div className="flex justify-between items-center">
              <p className="n2">Total Fee</p>
              <p className='n2'>500$</p>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ListingDiscription;
