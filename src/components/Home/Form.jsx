import React from "react";
import { motion } from "framer-motion";

function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100, rotate: 0 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1.5 }}
      className="bg-[#89B374] py-16 "
    >
      <div className="w-[90%] mx-auto">
        <p className="contactus md:ml-12">Contact Us</p>
      </div>
      <div className="w-[89%] mx-auto">
        <form className="">
          <div className="flex flex-col gap-y-6 md:px-12 ">
            <div className="flex gap-x-4 ">
              <div className="flex flex-col">
                <label className="lable">Email address</label>
                <input
                  type="text"
                  id="last_name"
                  className="rounded text-gray-900  formtext w-full h-[36px]  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 "
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="lable">First Name</label>
                <input
                  type="text"
                  id="last_name"
                  className="rounded text-gray-900 formtext w-full h-[36px]  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 "
                  placeholder="Enter First Name"
                  required
                />
              </div>
            </div>
            <div>
              <label className="lable">Email address</label>
              <input
                type="text"
                id="email_address"
                className="rounded text-gray-900 formtext  w-full h-[36px]  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 "
                placeholder="Enter Email address"
                required
              />
            </div>
            <div>
              {" "}
              <label className="lable">Phone number</label>
              <input
                type="text"
                id="phone_number"
                className="rounded text-gray-900 formtext  w-full h-[36px]  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 "
                placeholder="Enter Phone Number"
                required
              />
            </div>
            <div>
              <label className="lable">Message</label>
              <textarea
                id="message"
                rows="4"
                className="block rounded p-2.5 formtext w-full text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button className="uppercase rounded-xl bg-[#B0D3E0] py-2 text-white md:w-[25%] submitformbutton">
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Form;
