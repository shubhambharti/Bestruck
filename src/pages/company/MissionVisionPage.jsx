// src/pages/company/MissionVisionPage.jsx
import React from 'react';
import Seo from '../../components/Seo'; // Adjust path as needed
import { FaBullseye, FaEye, FaUsersCog, FaHandshake, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function MissionVisionPage() {
    return (
        <div className="mission-vision-page theme-color">
            <Seo
                title="Mission & Vision"
                description="Discover the core mission and inspiring vision that guides MF Engineers And Fabricators in delivering exceptional engineering and fabrication solutions."
            />

            {/* Hero Section */}
            <section
                className="text-white d-flex align-items-center justify-content-center text-center py-5"
                style={{
                    minHeight: "50vh",
                    backgroundImage: "url('/img/herosection3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                }}
                data-aos="fade-in"
            ><div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)", /* Dark overlay */
            }}></div>
                <div className="container" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">Our Guiding Principles</h1>
                    <p className="lead mb-4 animate__animated animate__fadeInUp">Driving innovation and excellence in engineering and fabrication.</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section py-5 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center mb-5">
                            <FaBullseye className="text-primary fs-1 mb-3" />
                            <h2 className="display-5 fw-bold mb-3">Our Mission</h2>
                            <p className="lead text-muted">
                                At <i>{import.meta.env.VITE_SITE_NAME}</i>, our mission is to deliver exceptional engineering and fabrication solutions that exceed client expectations, foster innovation, and build lasting relationships based on trust and quality craftsmanship. We are committed to contributing to the success of our partners and the development of robust infrastructure.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center g-4">
                        <div className="col-md-4 mb-3">
                            <div className="card theme-dark-color h-100 shadow-sm border-0 text-center p-4 animate__animated animate__fadeInLeft">
                                <div className="card-body">
                                    <FaUsersCog className="text-info fs-3 mb-3" />
                                    <h5 className="fw-bold">Client-Centric Solutions</h5>
                                    <p className="text-muted small">
                                        Focusing on understanding and fulfilling our clients' unique needs with precision and dedication.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card theme-dark-color h-100 shadow-sm border-0 text-center p-4 animate__animated animate__fadeInUp">
                                <div className="card-body">
                                    <FaLightbulb className="text-success fs-3 mb-3" />
                                    <h5 className="fw-bold">Innovation & Quality</h5>
                                    <p className="text-muted small">
                                        Continuously seeking innovative techniques and maintaining the highest standards of quality in every project.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="card theme-dark-color h-100 shadow-sm border-0 text-center p-4 animate__animated animate__fadeInRight">
                                <div className="card-body">
                                    <FaHandshake className="text-warning fs-3 mb-3" />
                                    <h5 className="fw-bold">Integrity & Trust</h5>
                                    <p className="text-muted small">
                                        Operating with unwavering integrity, transparency, and building long-term trust with all stakeholders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="vision-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center mb-5">
                            <FaEye className="text-secondary fs-1 mb-3" />
                            <h2 className="display-5 fw-bold mb-3">Our Vision</h2>
                            <p className="lead text-muted">
                                Our vision is to be the leading and most trusted provider of engineering and fabrication services, recognized for our cutting-edge solutions, sustainable practices, and profound impact on industrial development across the region.
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center g-4">
                        <div className="col-md-6 mb-3">
                            <div className="card theme-dark-color h-100 shadow-sm border-0 p-4 animate__animated animate__fadeInLeft animation-delay-1">
                                <div className="card-body">
                                    <h5 className="fw-bold text-primary mb-3">Future-Forward Innovation</h5>
                                    <p className="card-text text-muted">
                                        To continuously push the boundaries of engineering and fabrication through research, development, and adoption of advanced technologies, ensuring we remain at the forefront of the industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card theme-dark-color h-100 shadow-sm border-0 p-4 animate__animated animate__fadeInRight animation-delay-1">
                                <div className="card-body">
                                    <h5 className="fw-bold text-primary mb-3">Sustainable Growth</h5>
                                    <p className="card-text text-muted">
                                        To achieve sustainable growth by expanding our capabilities, entering new markets, and fostering a culture of continuous improvement and environmental responsibility.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action (Optional) */}
            <section className="cta-section bg-primary text-white text-center py-5">
                <div className="container">
                    <h2 className="display-6 fw-bold mb-3">Ready to Partner with Us?</h2>
                    <p className="lead mb-4">
                        Experience the dedication and quality that defines MF Engineers And Fabricators.
                    </p>
                    <Link to="/contactus" className="btn btn-light btn-lg">Contact Us Today</Link>
                </div>
            </section>
        </div>
    );
}