import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import ListingDiscription from "./pages/ListingDiscription";
import Detaildescription from "./pages/Detaildescription";
import BecomeHost from "./pages/BecomeHost";
import StandardsCamp from "./pages/StandardsCamp";
import HostStandards from "./pages/HostStandards";
import AboutUS from "./components/Home/AboutUS";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <Home/> */}
      {/* <Story/> */}
      {/* <Services/> */}
      {/* <Work/> */}
      {/* <ContactUs/> */}
        <Routes>
        <Route path="/" element={<BecomeHost/>} />
        <Route path="/Home" element={<Home />} />

          {/* <Route path="/" element={<BecomeHost/>} /> */}
          <Route path="/Blog" element={<Blog />} />
          <Route path="/ListingDiscription" element={<ListingDiscription />} />
          <Route path="/Detaildescription" element={<Detaildescription />} />
          <Route path="/StandardsCamp" element={<StandardsCamp />} />
          <Route path="/HostStandards" element={<HostStandards />} />
          <Route path="/AboutUS" element={<AboutUS />} />

        </Routes>
    </div>
  );
}
