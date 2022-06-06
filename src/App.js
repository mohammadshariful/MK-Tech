import { Route, Routes } from "react-router-dom";
import BannerAdd from "./pages/Home/Advertising/BannerAdd";
import Native from "./pages/Home/Advertising/Native";
import PropUnder from "./pages/Home/Advertising/Popunder";
import Skim from "./pages/Home/Advertising/Skim";
import Home from "./pages/Home/Home/Home.js";
import Footer from "./pages/Shared/Footer/Footer.js";
import Menubar from "./pages/Shared/Menubar/Menubar.js";
function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<PropUnder />} />
          <Route path="/banneradd" element={<BannerAdd />} />
          <Route path="/native" element={<Native />} />
          <Route path="/skim" element={<Skim />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
