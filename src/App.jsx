import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./Pages/MainPage";
import MenuPage from "./Pages/MenuPage";
import HousePage from "./Pages/HousePage";
import Address from "./components/Address";
import SalesPage from "./Pages/SalesPage";
import AboutUsPage from "./Pages/AboutUsPage";
import PartnershipPage from "./Pages/PartnershipPage";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage/>}/>
          <Route path="/Menu" element={<MenuPage/>} />
          <Route path="/Houses" element={<HousePage/>} />
          <Route path="/Adress" element={<Address/>} />
          <Route path="/Sales" element={<SalesPage/>} />
          <Route path="/AboutUs" element={<AboutUsPage/>} />
          <Route path="/Partnership" element={<PartnershipPage/>} />
          <Route path="/Ordering" element={<Cart/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
