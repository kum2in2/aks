import React from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Breadcrumbs from '../Componets/Breadcrumbs';
import Portfolio from './HomePageComponets/Portfolio';
import { Link } from 'react-router-dom';

const PortfolioP = () => {
  return (
    <>
    <Header />
    <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>Portfolio</li>
                </ol>
                <h2>Portfolio</h2>
            </div>
        </section>
     <section className="inner-page">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <p>Portfolio </p>
  </div>
</section>
<Portfolio />

     <Footer />
   </>
  )
}

export default PortfolioP;