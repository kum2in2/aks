import React from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Breadcrumbs from '../Componets/Breadcrumbs';
import ContactUs from './HomePageComponets/ContactUs';
import { Link } from 'react-router-dom';

const ContactP = () => {
  return (
    <>
    <Header />
    <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li> Contact Us </li>
                </ol>
                <h2> Contact Us </h2>
            </div>
        </section>
     <section className="inner-page">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <p>Contact Us </p>
  </div>
</section>
<ContactUs />

     <Footer />
   </>
  )
}

export default ContactP;