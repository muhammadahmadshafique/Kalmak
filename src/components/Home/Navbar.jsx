import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cancel from "./Cancel";
import Hamburger from "./Hamburger";
import { motion } from "framer-motion";

function Navbar() {
  const [ham, setHam] = useState(false);

  return (
    <div className="bg-white sticky w-screen top-0 py-4 z-50">
      <nav className="flex items-center justify-between w-[86%] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1.5 }}
          className="flex justify-center cursor-pointer items-center w-[270px] h-[61px]"
        >
          <Link to="/">
            <img
              className="w-[270px] h-[61px]"
              src="/kalmak logo design png 1.png"
              alt="Logo"
              srcset=""
            />
          </Link>
        </motion.div>
        <div
          onClick={() => setHam(!ham)}
          className="flex cursor-pointer lg:hidden"
        >
          {!ham ? <Hamburger /> : <Cancel />}
        </div>
        <div
          className={`bg-[#89B374] ${
            ham ? "" : "hidden"
          } absolute left-0 top-0 h-[100vh] w-[60%] py-12`}
        >
          <div className="flex flex-col h-[60vh] items-center justify-between">
            <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
              <Link to="/">About</Link>
            </button>
            <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
              <Link to="/Blog">Blog</Link>
            </button>
            <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
              <Link to="/NearMe">Near me</Link>
            </button>
            <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
              <Link to="/Explore">Explore</Link>
            </button>
            <button className="uppercase font-poppins navtext whitespace-nowrap  navbuttoncontact">
              <Link to="/BecomeHost">Become a Host</Link>
            </button>
          </div>
        </div>

        {/* For Large screens */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 2 }}
          className="hidden lg:flex items-center justify-between gap-x-[52.72px]"
        >
          <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374]  decoration-4">
            <Link to="/">About</Link>
          </button>
          <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374]  decoration-4">
            <Link to="/Story">Blog</Link>
          </button>
          <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374] decoration-4">
            <Link to="/Work">Near me</Link>
          </button>
          <button className="uppercase font-poppins navtext whitespace-nowrap hover:underline decoration-[#89B374]  decoration-4">
            <Link to="/Services">Explore</Link>
          </button>
          <button className="uppercase font-poppins navtext whitespace-nowrap navbuttoncontact">
            <Link to="/ContactUs">Become a Host</Link>
          </button>
        </motion.div>
      </nav>
    </div>
  );
}

export default Navbar;