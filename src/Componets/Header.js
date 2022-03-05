import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <header id="header" className="fixed-top d-flex align-items-center">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto">
      <a href="/">
        Presento<span>.</span>
      </a>
    </h1>
    {/* Uncomment below if you prefer to use an image logo */}
    {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt=""></a>*/}
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li>
          <Link className="nav-link scrollto active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/services">
            Services
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link className="nav-link scrollto" to="/teams">
            Team
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
       
        <li>
          <Link className="nav-link scrollto" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    {/* .navbar */}
    <Link to="/contact" className="get-started-btn scrollto">
      Get Started
    </Link>
  </div>
</header>
<Outlet />
    </>
  )
}

export default Header;