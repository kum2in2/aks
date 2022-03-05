import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <>
        <section className="breadcrumbs">
            <div className="container">
                <ol>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>Inner Page</li>
                </ol>
                <h2>Inner Page</h2>
            </div>
        </section>

     </>
  )
}

export default Breadcrumbs;