import React from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Breadcrumbs from '../Componets/Breadcrumbs';
import { Link } from 'react-router-dom';

const NoPage = () => {
  return (
    <>
    <Header />
    <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>404 Error</li>
                </ol>
                <h2>404 Error</h2>
            </div>
        </section>
     <section className="inner-page">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <p> 404 Error </p>
  </div>
</section>

     <Footer />
   </>
  )
}

export default NoPage;