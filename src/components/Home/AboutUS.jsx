import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function AboutUS() {
  return (
    <div>
      <Navbar />
      <div className="md:w-[86%] mx-auto py-12 overflow-hidden">
        <p className="stand">Your Travelling Buddy</p>
        <img src="./kalmak web 4-01 2.png" alt="" srcset="" />
      </div>
      <div className="w-[86%] overflow-hidden lg:flex justify-center items-center gap-x-12  mx-auto">
        <img src="./Group 100.png" alt="" srcset="" />
        <div className="space-y-4 my-6">
          <p className="pd">Product Description</p>
          <p className="pd1">
            Kalmak is an online marketplace that makes it easy to find unique
            camping spots and enjoy great scenery, accommodations, and outdoor
            experiences on public and private lands. Whether you're looking for
            scenic spots to pitch your tent, park your RV, or plan a nature
            trip, Kalmak is your guide to getting outside. For farmers,
            ranchers, and other landowners, our platform creates new revenue
            streams for businesses that help protect your land and keep it wild.
            Our mission is to expand access to nature – getting more people
            outside. Inspire more people to appreciate and protect our world.
          </p>
        </div>
      </div>
      <div className="w-[86%] overflow-hidden lg:flex justify-center items-center gap-x-32 mx-auto">
        <div className="space-y-4 my-6">
          <p className="pd">Mission Statement</p>
          <p className="pd1">
            “At Kalmak we offer travelers from all over the world the best
            camping experience ever in the most beautiful areas of Pakistan. We
            inspire travelers to go out, explore nature & have an experience
            like never before at as price so low so that as many people as
            possible will be able to afford it.
          </p>
        </div>
        <img src="./Group2222.png" alt="" srcset="" />
      </div>
      <p className="stand py-8">Meet our Team</p>
      <div className="grid overflow-hidden grid-cols-1 md:grid-cols-3 w-[80%] mx-auto justify-items-center	gap-y-4 justify-center	">
        <div className="flex flex-col w-fit items-center justify-center gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image1.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Minahil Awan</p>
          <p className="whathedo1 w-fit">Co-Founder</p>
        </div>
        <div className="flex flex-col w-fit  gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image2.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Syeda Aqsa Azhar</p>
          <p className="whathedo1 w-fit">Video Editor</p>
        </div>
        <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image3.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Wajeeha Usman</p>
          <p className="whathedo1 w-fit">SEO Content Writer</p>
        </div>
        <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image4.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Areesha Tariq Khan</p>
          <p className="whathedo1 w-fit">Digital Marketer</p>
        </div>
        <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image5.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Maryam Sarfraz</p>
          <p className="whathedo1 w-fit">Graphic & UI designer </p>
        </div>
        <div className="flex flex-col w-fit gap-y-1">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src="./image6.png"
            alt=""
            srcset=""
          />
          <p className="name1 w-fit">Munaza Ashraf</p>
          <p className="whathedo1 w-fit">Scriptwriter and Web Developer </p>
        </div>
      </div>
      <p className="stand py-8">Founder </p>
      <div className="flex gap-x-16 mb-12 border border-blue-300 rounded-2xl px-5 md:px-20 flex-col md:flex-row  overflow-hidden gap-y-4 justify-center items-center w-[66%] mx-auto">
        <div className="flex flex-col w-fit items-center justify-center gap-y-1">
          <img
            className="w-[300px] h-[280px] py-12 object-contain rounded-full"
            src="./Mask group.png"
            alt=""
            srcset=""
          />
        </div>
        <div className='flex flex-col justify-center items-center md:items-start yexy-center'>
          <p className="name1 w-fit">Mushtaq Khan</p>
          <p className="whathedo1 w-fit">Founder at Kalmak</p>
          <p className="ceo py-4">
          Business student, aspiring entrepreneur , Curious about Pakistan
          start-up ecosystem, Venture Capital, Capital markets, Blockchain
          technology.
        </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutUS;
