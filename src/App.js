import AboutP from "./Pages/AboutP";
import HomeP from "./Pages/HomeP";
import ServicesP from "./Pages/ServicesP";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioP from "./Pages/PortfolioP";
import TeamP from "./Pages/TeamP";
import BlogP from "./Pages/BlogP";
import ContactP from "./Pages/ContactP";
import Header from "./Componets/Header";
import NoPage from "./Pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Header />}>
        <Route path="/" index  element={<HomeP />} />
          <Route path="about" element={<AboutP />} />
          <Route path="services" element={<ServicesP />} />
          <Route path="portfolio" element={<PortfolioP />} />
          <Route path="teams" element={<TeamP />} />
          <Route path="blog" element={<BlogP />} />
          <Route path="contact" element={<ContactP />} />
          <Route path="*" element={<NoPage />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
