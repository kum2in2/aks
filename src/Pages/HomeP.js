import React from "react"; 
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Banner from "./HomePageComponets/Banner";
import Clients from "./HomePageComponets/Clients";
import AboutUs from "./HomePageComponets/AboutUs";
import Counts from "./HomePageComponets/Counts";
import Tabs from "./HomePageComponets/Tabs";
import Services from "./HomePageComponets/Services";
import Portfolio from "./HomePageComponets/Portfolio";
import Testiminials from "./HomePageComponets/Testiminials";
import Team from "./HomePageComponets/Team";
import ContactUs from "./HomePageComponets/ContactUs";
const HomeP = () => {
return(
  <>
   <Header />
    <Banner />
    <Clients />
    <AboutUs />
    <Counts />
    <Tabs />
    <Services />
    <Portfolio />
    <Testiminials />
    <Team />
    <ContactUs /> 
    <Footer />
  </>
);
};

export default HomeP;