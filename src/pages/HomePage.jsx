import React from 'react'
import AboutUs from '../components/AboutUs'
import Customer from '../components/Customer'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <div className="w-100 overflow-hidden bg-gray-100" id="top">
                <div className="container position-relative">
                    <div className="col-12 col-lg-8 mt-0 h-100 position-absolute top-0 end-0 bg-cover" data-aos="fade-left"
                        style={{ backgroundImage: "url(/img/banner1.png)" }}></div>
                    <div className="row">
                        <div className="col-lg-7 py-vh-6 position-relative" data-aos="fade-right">
                            <h1 className="display-1 fw-bold mt-5">Building the Future of Auto Parts!</h1>
                            <p className="lead">Reliable toolings, fixtures, and sheet metal solutions for the automotive industry.</p>
                            <Link to="/aboutus" className="btn btn-dark btn-xl shadow me-3 rounded-0 my-5">Who We Are?</Link>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <Customer />
        </>
    )
}
