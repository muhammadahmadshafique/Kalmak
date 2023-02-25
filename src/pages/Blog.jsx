import React from "react";
import Navbar from "../components/Home/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OneBlog from "../components/Blog/OneBlog";
import Footer from "../components/Home/Footer";

function Blog() {
  const Read = "Read More>>";
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <div className="md:flex md:w-[86%] mx-auto md:py-12">
          <motion.div
            initial={{ opacity: 0, x: -100, rotate: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 2 }}
            className="w-[86%] flex-1 mx-auto py-4"
          >
            <p className="headerp1 text-[37px] md:text-[47px] ">
              Learn more about Traveling & <br />{" "}
              <span className="next">Hosting</span>
            </p>
            <p className="headerpara py-3">
              One stop destination for travelers to book camps, glamps, and
              cabins.One stop destination for travelers to book camps.
            </p>
            <button className="whitespace-nowrap discoverbutton mt-4">
              <Link to="/DiscoverNow">Create a New Blog</Link>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, rotate: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 2 }}
            className="flex-1 flex md:justify-end"
          >
            <img
              className="w-[450px] h-[450px] object-contain"
              src="./blogheader.png"
              alt=""
              srcset=""
            />
          </motion.div>
        </div>
        <p className="OurBlog text-center py-4">Our Blog</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 w-[82%] mx-auto justify-center justify-items-center gap-y-6">
          <OneBlog
            p1={"Camp 1,"}
            p2={
              "Why staying at the naran camp in the winters is the best experience."
            }
            city={"Naran"}
            img={"./b1.png"}
          />
          <OneBlog
            p1={"Camp 2,"}
            p2={
              "Why staying at the naran camp in the winters is the best experience."
            }
            city={"Lahore"}
            img={"./b2.png"}
          />
          <OneBlog
            p1={"Camp 3,"}
            p2={
              "Why staying at the naran camp in the winters is the best experience."
            }
            city={"Naran"}
            img={"./b3.png"}
          />
        </div>
        {/* Featured Blog */}
        <div className="w-[82%] mx-auto rounded-xl overflow-hidden shadow-lg border border-[#e0dbdb] my-12">
          <img className="rounded-xl" src="./b4.png" alt="" srcset="" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 fontjust">
              Camp 1, <span className="cityblog">Naran</span>{" "}
            </div>
            <p className="placepara">
              Why staying at the naran camp in the winters is the best
              experience. Enjoy these trips with our friends and family and you
              can make this imagination a reality by booking a camp through
              Kalmak camps. So book Today!
            </p>
          </div>
          <p className="readmore underline py-6 cursor-pointer px-4 flex justify-end">
            {Read}
          </p>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Blog;
