import React from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Breadcrumbs from '../Componets/Breadcrumbs';
import Services from './HomePageComponets/Services';
import { Link } from 'react-router-dom';

const ServicesP = () => {
  return (
    <>
    <Header />
    <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>Services</li>
                </ol>
                <h2>Services</h2>
            </div>
        </section>
     <section className="inner-page">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <p>Services </p>
  </div>
</section>
<Services />

     <Footer />
   </>
  )
}

export default ServicesP;