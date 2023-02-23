import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div className="footercolor h-full w-screen py-6">
    <div className="footercolor space-y-12 w-[86%] mx-auto py-12">
      <motion.div initial={{ opacity: 0, x: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1.5 }} className='flex justify-center items-center gap-x-8'>
        <img src="./instagram.png" alt="" srcset="" />
        <img src="./facebook.png" alt="" srcset="" />
        <img src="twitter.png" alt="" srcset="" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 1.5 }} className='flex justify-center flex-wrap gap-y-6 md:gap-y-0 items-center gap-x-12'>
        <p className="cursor-pointer footertext">Home</p>
        <p className="cursor-pointer footertext">About</p>
        <p className="cursor-pointer footertext">Explore</p>
        <p className="cursor-pointer footertext whitespace-nowrap">Near Me</p>
        <p className="cursor-pointer footertext">Blog</p>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ duration: 2.5 }} className="w-full flex justify-center items-cente">
      <Link to="/">
        <img
          className=""
          src="/kalmak logo design png 1.png"
          alt="Logo"
          srcset=""
        />
      </Link>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: -100, rotate: 0 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1.5 }} className='flex justify-center items-center gap-x-2'>
        <img src="./ant-design_copyright-outlined.png" alt="" srcset="" />
        <p className='copy'>copyright 2022 Find you dream destination, sukoon</p>
      </motion.div>
    </div>
    </div>
  );
}

export default Footer;
