import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Home/Card";
import Navbar from "../components/Home/Navbar";
import PopularCard from "../components/Home/PopularCard";
import ReviewCard from "../components/Home/ReviewCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SafetyCard from "../components/Home/SafetyCard";
import Form from "../components/Home/Form";
import Footer from "../components/Home/Footer";
import { motion } from "framer-motion";

function Home() {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src="./icons8-left-arrow-32.png"
        className={className}
        style={{ ...style, width: "30px", height: "30px" }}
        onClick={onClick}
        alt="Previous"
      />
    );
  };
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src="./icons8-right-arrow-32.png"
        className={className}
        style={{ ...style, width: "30px", height: "30px" }}
        onClick={onClick}
        alt="Previous"
      />
    );
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="md:flex md:w-[86%] mx-auto md:py-12">
        <motion.div initial={{ opacity: 0, x: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 2 }} className="w-[86%] flex-1 mx-auto py-4">
          <p className="headerp1 text-[37px] md:text-[47px] ">
            Find Your <span className="next">Next</span> Adventure Spot
          </p>
          <p className="headerpara py-3">
            One stop destination for travelers to book camps, glamps, and
            cabins.One stop destination for travelers to book camps.
          </p>
          <button className="whitespace-nowrap discoverbutton mt-4">
            <Link to="/DiscoverNow">Discover Now</Link>
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 2 }} className="flex-1">
          <img
            className=""
            src="./HeaderImageWithCloud.png"
            alt=""
            srcset=""
          />
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.5 }} className="grid grid-cols-2 md:my-6 md:w-fit md:justify-items-center md:mx-auto md:pl-10 gap-4 md:grid md:grid-cols-4 searchborder py-8 px-4 rounded md:rounded-[36px]">
        <div className="flex flex-col">
          <p className="searchtext ">Location</p>
          <input
            class="shadow appearance-none border-none focus:border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="Enter Your destination"
          />
        </div>
        <div className="flex flex-col">
          <p className="searchtext ">Date</p>
          <input
            class="shadow appearance-none border-none focus:border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="When it will start?"
          />
        </div>
        <div className="flex flex-col">
          <p className="searchtext ">Guests</p>
          <input
            class="shadow appearance-none border-none focus:border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="How many guests?"
          />
        </div>
        <button className="whitespace-nowrap discoverbutton w-fit h-fit mt-8">
          <Link to="/DiscoverNow">Search Now</Link>
        </button>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1.5 }} className="w-[86%] mx-auto py-8 md:text-center md:py-12">
        <p className="FeauturedListing text-[17px] md:text-[37px] ">
          Some Feautured<span className="listings"> Listings</span>
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[82%] mx-auto justify-center justify-items-center	gap-y-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="py-2">
        <button className="whitespace-nowrap discoverbutton flex justify-center py-12 w-[82%] mx-auto md:w-fit h-fit mt-8">
          <Link to="/DiscoverNow">Load More</Link>
        </button>
      </div>
      <div className="w-[86%] mx-auto py-8 md:text-center md:py-16">
        <motion.p initial={{ opacity: 0, x: -100}}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1.5 }} className="FeauturedListing text-[17px] md:text-[37px] ">
          Discover Popular <span className="listings">Destinations</span>
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 w-[82%] mx-auto justify-center justify-items-center gap-y-6">
        <PopularCard
          p1={"Do Darya in"}
          p2={
            "The iconic sea beach resorts also known as do darya is a popular tourist attraction and is liked by locals and tourists alike."
          }
          city={"Karachi"}
          img={"./Kar.png"}
        />
        <PopularCard
          p1={"Haveli Restaurant in"}
          p2={
            "Haveli is a lush dinning cuisine based in the old city of Lahore also known as the walled city and offers a 360 view of the Old Lahore."
          }
          city={"Lahore"}
          img={"./Lahore.png"}
        />
        <PopularCard
          p1={"Camp 1 in"}
          p2={
            "Camp 1 is a camp site based in the naran city that offers a lush green space to all its travelers so that they can be amused by its beauty."
          }
          city={"Naran"}
          img={"./Naran.png"}
        />
      </div>
      <button className="whitespace-nowrap discoverbutton flex justify-center py-12 w-[82%] mx-auto md:w-fit h-fit mt-8">
        <Link to="/DiscoverNow">Explore all</Link>
      </button>
      <div className="w-[86%] mx-auto py-8 md:text-center md:py-16">
        <p className="FeauturedListing text-[17px] md:text-[37px] ">
          Customer<span className="listings"> Reviews</span>
        </p>
      </div>
      <div className="">
        <div className="px-12 py-12">
          <Slider {...settings}>
            <ReviewCard
              name="Sara Ali"
              Location="Lahore, Pakistan"
              Date="| October 2022"
              img="./client1.png"
              Star={5}
              para="What a great experience using Kalmak! I booked all of my camps for my gap year through kalamak and never had any issues. When I had to cancel a booking because of an emer support helped me"
            />
            <ReviewCard
              name="Ahmad"
              Location="Gujranwala, Pakistan "
              Date="| October 2022"
              img="./client3.png"
              Star={4}
              para="My family and I visit Naran every year, and we usually book our hotels using other services. Kalmak was recommened to us by a long time friend, and I’m so glad we tried it out! The process was easy and"
            />
            <ReviewCard
              name="Alia"
              Location="Karachi, Pakistan "
              Date="| October 2022"
              img="./client2.png"
              Star={5}
              para="When I was looking to book my camp in Skardu, Kalmak had the best browsing experiece so I figured I’d give it a try. It was my first time using Kalmak, but I’d definitely recommend it to a friend and use it for"
            />
            <ReviewCard
              name="Alia"
              Location="Karachi, Pakistan "
              Date="| October 2022"
              img="./client2.png"
              Star={5}
              para="When I was looking to book my camp in Skardu, Kalmak had the best browsing experiece so I figured I’d give it a try. It was my first time using Kalmak, but I’d definitely recommend it to a friend and use it for"
            />
          </Slider>
        </div>
      </div>
      <div className="w-[86%] mx-auto py-8 md:text-center md:py-24">
        <motion.p initial={{ opacity: 0, y: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.5 }} className="FeauturedListing text-[17px] md:text-[37px] ">
          Safety at kalmak
        </motion.p>
      </div>
      <div initial={{ opacity: 0, x: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1.5 }} className="grid grid-cols-1 md:grid-cols-2 w-[82%] mx-auto justify-center justify-items-center gap-y-6">
        <SafetyCard />
        <SafetyCard />
      </div>
      <div className="w-[86%] mx-auto py-10 px-2 md:flex">
        <div className='p-6 emailborder'>
        <video controls width="full">
          <source src="./mykonos-1282.mp4" type="video/mp4"></source>
        </video>
        </div>
        <div className="emailborder p-10">
          <p className="newsp py-6">
            Get Every Monthly <span className="newspcolor">Newsletter</span>
          </p>
          <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:bg-white  rounded-xl border rounded-r-[23px] shawdow shawdow-black">
            <input
              className="shadow rounded-xl appearance-none border-none focus:border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="destination"
              type="text"
              placeholder="Enter Your Email"
            />
            <button className="whitespace-nowrap subs flex gap-x-6 items-center px-6  py-[7px] mx-auto md:w-fit h-fit">
              <img className="w-[19px]" src="./email.png" alt="" srcset="" />
              <Link className="mr-4" to="/DiscoverNow">
                Subscribe
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
