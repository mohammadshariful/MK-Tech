import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home.js";
import Footer from "./pages/Shared/Footer/Footer.js";
import Menubar from "./pages/Shared/Menubar/Menubar.js";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
