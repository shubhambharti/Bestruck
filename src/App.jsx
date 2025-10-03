import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProductPage from "./pages/product/ProductPage";
import AboutUsPage from "./pages/company/AboutUsPage";
import HistoryPage from "./pages/company/HistoryPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactUsPage from "./pages/ContactUsPage";
import PeoplePage from "./pages/PeoplePage";
import CareerPage from "./pages/CareerPage";
import MissionVisionPage from "./pages/company/MissionVisionPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/mission&vision" element={<MissionVisionPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/career" element={<CareerPage />} />

        <Route path="/product/:slug" element={<ProductPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />

        {/* Catch All */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
