import React from "react";
import Footer from "../components/Home/Footer";
import Navbar from "../components/Home/Navbar";

function Detaildescription() {
  return (
    <div>
      <Navbar />

      <p className="Detaildescription1 py-20">
        Learn more about Traveling & Hosting{" "}
      </p>
      <div className="w-[86%] mx-auto">
        <img
          className="object-contain"
          src="./Blog-image 1.png"
          alt=""
          srcset=""
        />
        <p className="ah1 py-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus.
        </p>
        <p className="ah2">
          Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
          lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum
          velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Praesent auctor
          purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
          rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel
          bibendum lorem. Morbi convallis convallis diam sit amet lacinia.
          Aliquam in elementum tellus.
        </p>
        <p className="ah2">
          {" "}
          Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
          quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
          vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu
          vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
          porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
          non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
          lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
          sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis
          nisi, ac posuere leo.
        </p>
      </div>
      <div className="w-[86%] mx-auto">
        <p className="ah1 py-12">Common Locations You Need To Visit</p>
        <div className="flex flex-col md:flex-row items-start gap-x-20">
          <p className="ah2 flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus{" "}
          </p>
          <img className="flex flex-1 w-[500px] h-[400px] mt-[-50px] object-contain rounded-full" src="./Telescope-rafiki 1.png" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Detaildescription;
