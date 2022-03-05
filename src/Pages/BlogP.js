import React from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Breadcrumbs from '../Componets/Breadcrumbs';
import { Link } from 'react-router-dom';

const BlogP = () => {
  return (
    <>
    <Header />
    <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>Blog</li>
                </ol>
                <h2>Blog</h2>
            </div>
        </section>
     <section className="inner-page">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <p> Blog</p>
  </div>
</section>


     <Footer />
   </>
  )
}

export default BlogP;