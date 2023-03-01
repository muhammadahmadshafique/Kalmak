import React from 'react'
import Footer from '../components/Home/Footer'
import SafetyCard from '../components/Home/SafetyCard'
import { motion } from "framer-motion";
import Navbar from '../components/Home/Navbar';

function HostStandards() {
  return (
    <div>
    <Navbar />
    <div className="w-[80%] my-8 mx-auto flex flex-col gap-y-6">
    <div className="space-y-4">
      <p className='stand my-6'>kalmak Host' standards</p>
      <p className='stand1'>
        Our Kalmak Standards exist to set expectations and serve as guidance
        for our community. All Camper should review and adhere to these
        standards for safety, preparation, and respect.
      </p>
    </div>
    <div className="space-y-4">
      <p className="pre">Be prepared.</p>
      <p className='pre1'>Ensure you have all the info you need before you go.</p>
    </div>
    <div className="space-y-4">
      <p className="pre">RULES AND REGULATIONS</p>
      <p className="pre1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tempus porta rutrum. Aliquam eros elit, ultricies et congue eget,
        vehicula eu sapien. Vestibulum eu felis id sem feugiat fermentum at
        non lacus. In ac convallis nisl. Nunc porta diam in arcu lobortis,
        porta vestibulum nulla elementum. Nulla facilisi. Donec accumsan, mi
        nec hendrerit cursus, nibh dolor ornare lacus, vitae cursus lectus
        risus eu risus. Integer eu ante ipsum. Quisque tincidunt, neque sit
        amet consectetur viverra, leo sapien euismod neque, a lacinia metus
        ante in lacus. In hac habitasse platea dictumst. Donec vestibulum
        laoreet viverra.Nam consequat nisl eu tellus consequat, vitae
        facilisis augue interdum. Nulla ullamcorper enim sed quam auctor,
        iaculis consequat ante pharetra. Sed in viverra velit. Vestibulum
        feugiat placerat dui eu vehicula. Quisque vel posuere arcu. Curabitur
        nec est pellentesque commodo quam sed, finibus urna. Pellentesque
        laoreet posuere lorem ac aliquet. Sed neque sapien, malesuada nec
        consequat in, tincidunt vel velit. In a nisi porta, gravida magna sit
        amet, vestibulum mauris. Nunc vestibulum erat vitae massa hendrerit
        cursus. Nam ullamcorper dignissim consequat. Maecenas vitae iaculis
        ex, vitae ultricies odio. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut id lorem nisl. Aenean eget feugiat odio, sit amet
        porta ex. Donec massa neque, volutpat ut facilisis hendrerit, dapibus
        ut magna. Nunc a lacinia neque. Nam facilisis mauris in risus aliquet
        maximus. Curabitur maximus congue gravida.
      </p>
    </div>
    <div className="space-y-4">
      <p className="pre">Be prepared.</p>
      <p className='pre1'>Ensure you have all the info you need before you go.</p>
    </div>
    <div className="space-y-4">
      <p className="pre">RULES AND REGULATIONS</p>
      <p className="pre1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        tempus porta rutrum. Aliquam eros elit, ultricies et congue eget,
        vehicula eu sapien. Vestibulum eu felis id sem feugiat fermentum at
        non lacus. In ac convallis nisl. Nunc porta diam in arcu lobortis,
        porta vestibulum nulla elementum. Nulla facilisi. Donec accumsan, mi
        nec hendrerit cursus, nibh dolor ornare lacus, vitae cursus lectus
        risus eu risus. Integer eu ante ipsum. Quisque tincidunt, neque sit
        amet consectetur viverra, leo sapien euismod neque, a lacinia metus
        ante in lacus. In hac habitasse platea dictumst. Donec vestibulum
        laoreet viverra.Nam consequat nisl eu tellus consequat, vitae
        facilisis augue interdum. Nulla ullamcorper enim sed quam auctor,
        iaculis consequat ante pharetra. Sed in viverra velit. Vestibulum
        feugiat placerat dui eu vehicula. Quisque vel posuere arcu. Curabitur
        nec est pellentesque commodo quam sed, finibus urna. Pellentesque
        laoreet posuere lorem ac aliquet. Sed neque sapien, malesuada nec
        consequat in, tincidunt vel velit. In a nisi porta, gravida magna sit
        amet, vestibulum mauris. Nunc vestibulum erat vitae massa hendrerit
        cursus. Nam ullamcorper dignissim consequat. Maecenas vitae iaculis
        ex, vitae ultricies odio. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Ut id lorem nisl. Aenean eget feugiat odio, sit amet
        porta ex. Donec massa neque, volutpat ut facilisis hendrerit, dapibus
        ut magna. Nunc a lacinia neque. Nam facilisis mauris in risus aliquet
        maximus. Curabitur maximus congue gravida.
      </p>
    </div>
    </div>
    <div className="w-[86%] mx-auto py-8 text-center md:py-24">
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
        transition={{ duration: 1.5 }} className="grid mb-20 grid-cols-1 md:grid-cols-2 w-[82%] mx-auto justify-center justify-items-center gap-y-6">
      <SafetyCard who={"Camper'"} />
      <SafetyCard who={"Host'"}/>
    </div>
    <Footer/>
  </div>
  )
}

export default HostStandards