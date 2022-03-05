import React from 'react';
import Header from "../Componets/Header";
import Footer from "../Componets/Footer";
import Breadcrumbs from '../Componets/Breadcrumbs';
import Team from './HomePageComponets/Team';
import { Link } from 'react-router-dom';

const TeamP = () => {
  return (
    <>
    <Header />
    <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li> Team</li>
                </ol>
                <h2>Team</h2>
            </div>
        </section>
     <section className="inner-page">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    <p>Teams</p>
  </div>
</section>
<Team />

     <Footer />
   </>
  )
}

export default TeamP;