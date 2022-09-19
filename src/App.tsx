import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Moon from "./Pages/Moon";
import Mars from "./Pages/Mars";
import Europa from "./Pages/Europa";
import Titan from "./Pages/Titan";
import Commander from "./Pages/Commander";
import Specialist from "./Pages/Specialist";
import Pilot from "./Pages/Pilot";
import Engineer from "./Pages/Engineer";
import Vehicle from "./Pages/Vehicle";
import Spaceport from "./Pages/Spaceport";
import Capsule from "./Pages/Capsule";
import Nav from "./Nav";
import GlobalStyle from "./globalStyles";
import { MyBody } from "./Common.styles";

function App() {
  return (
    <MyBody primary>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Destination-Moon" element={<Moon />} />
        <Route path="/Destination-Mars" element={<Mars />} />
        <Route path="/Destination-Europa" element={<Europa />} />
        <Route path="/Destination-Titan" element={<Titan />} />
        <Route path="/Crew-Commander" element={<Commander />} />
        <Route path="/Crew-Mission-Specialist" element={<Specialist />} />
        <Route path="/Crew-Pilot" element={<Pilot />} />
        <Route path="/Crew-Flight-Engineer" element={<Engineer />} />
        <Route path="/Technology-Launch-Vehicle" element={<Vehicle />} />
        <Route path="/Technology-Spaceport" element={<Spaceport />} />
        <Route path="/Technology-Space-Capsule" element={<Capsule />} />
      </Routes>
    </MyBody>
  );
}

export default App;
