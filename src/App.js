import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="overflow-x-hidden">
      {/* <Home/> */}
      {/* <Story/> */}
      {/* <Services/> */}
      {/* <Work/> */}
      {/* <ContactUs/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Story" element={<Story />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/ContactUs" element={<ContactUs />} /> */}
        </Routes>
    </div>
  );
}