import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Purchase from "./pages/Purchase";
import ShopNow from "./pages/ShopNow";
import Latest from "./pages/Latest";
import Explore from "./pages/Explore";
import Replacement from "./pages/Replacement";
import ShopNow2 from "./pages/ShopNow2";
import Cart from "./pages/Cart";
import Upgrade from "./pages/Upgrade";
import GumCare from "./pages/GumCare";
import DownloadApp from "./pages/DownloadApp";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <Router>
        <NavigationBar />
        <Purchase />
        <ShopNow />
        <Latest />
        <Explore />
        <Replacement />
        <ShopNow2 />
        <Cart />
        <Upgrade />
        <GumCare />
        <DownloadApp />
        <Footer />
      </Router>
    </>
  )
}

export default App
