import React from 'react'
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Breadcrumbs from '../Componets/Breadcrumbs';
import AboutUs from './HomePageComponets/AboutUs';
import { Link } from 'react-router-dom';

const AboutP = () => {
  return (
    <> 
    <Header />
    <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>About Us</li>
                </ol>
                <h2>About Us</h2>
            </div>
        </section>
    <section className="inner-page">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <p>About Us </p>
  </div>
</section>
<AboutUs />

<Footer />
    
    </>
  )
}

export default AboutP;