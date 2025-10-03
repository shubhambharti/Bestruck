import { useState } from "react";
import {
    FaBriefcase,
    FaUsers,
    FaLightbulb,
    FaHeart
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Seo from "../components/Seo";

export default function CareerPage() {
    const [openJobId, setOpenJobId] = useState(null);

    const toggleJobDetails = (id) => {
        setOpenJobId(openJobId === id ? null : id);
    };

    const handleCareerFormSuccess = (data) => {
        console.log("Career form submitted successfully:", data);
    };

    return (
        <div className="career-page theme-color">
            <Seo
                title="Careers"
                description={`Join the team at ${import.meta.env.VITE_SITE_NAME || "MF Engineering And Fabrication"
                    } and build your career with us. Explore exciting job opportunities and our vibrant company culture.`}
            />

            {/* Hero Section */}
            <section
                className="text-white d-flex align-items-center justify-content-center text-center py-5"
                style={{
                    minHeight: "50vh",
                    backgroundImage: "url('/img/herosection3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
                data-aos="fade-in"
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // overlay
                    }}
                ></div>
                <div className="container" style={{ zIndex: 1 }}>
                    <h1
                        className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown"
                        data-aos="fade-down"
                    >
                        Build Your Future With Us
                    </h1>
                    <p
                        className="lead mb-4 animate__animated animate__fadeInUp"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Discover a place where your talent thrives and your contributions
                        make an impact.
                    </p>
                </div>
            </section>

            {/* Culture & Benefits Section */}
            <section className="culture-benefits py-5">
                <div className="container">
                    <h2
                        className="text-center mb-5 display-5 fw-bold"
                        data-aos="fade-up"
                    >
                        Our Culture & Benefits
                    </h2>
                    <div className="row text-center g-4">
                        <div className="col-md-3 mb-3" data-aos="zoom-in" data-aos-delay="100">
                            <div
                                className="card theme-dark-color h-100 shadow-sm p-4 border-0"
                                style={{ borderRadius: "20px" }}
                            >
                                <div className="card-body">
                                    <FaUsers className="text-primary fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">
                                        Collaborative Environment
                                    </h5>
                                    <p className="card-text text-muted">
                                        Work alongside passionate individuals who support and
                                        inspire each other.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3" data-aos="zoom-in" data-aos-delay="200">
                            <div
                                className="card theme-dark-color h-100 shadow-sm p-4 border-0"
                                style={{ borderRadius: "20px" }}
                            >
                                <div className="card-body">
                                    <FaLightbulb className="text-success fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">Innovation at Core</h5>
                                    <p className="card-text text-muted">
                                        Challenge the status quo and contribute to groundbreaking
                                        projects.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3" data-aos="zoom-in" data-aos-delay="300">
                            <div
                                className="card theme-dark-color h-100 shadow-sm p-4 border-0"
                                style={{ borderRadius: "20px" }}
                            >
                                <div className="card-body">
                                    <FaBriefcase className="text-info fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">Growth Opportunities</h5>
                                    <p className="card-text text-muted">
                                        Continuous learning, mentorship, and clear paths for career
                                        advancement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3" data-aos="zoom-in" data-aos-delay="400">
                            <div
                                className="card theme-dark-color h-100 shadow-sm p-4 border-0"
                                style={{ borderRadius: "20px" }}
                            >
                                <div className="card-body">
                                    <FaHeart className="text-danger fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">Employee Well-being</h5>
                                    <p className="card-text text-muted">
                                        Comprehensive benefits, flexible work options, and a focus
                                        on work-life balance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* General Application Form */}
            <section
                id="application-form-section"
                className="py-5"
                data-aos="fade-up"
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <ContactForm
                                isCareerForm={true}
                                formTitle="Apply Now"
                                formDescription="Don't see your role? We are always looking for talented people."
                                submitButtonText="Submit Application"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section
                className="career-cta bg-primary text-white text-center py-5"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <div className="container">
                    <h2 className="display-5 fw-bold mb-3">Ready to Make an Impact?</h2>
                    <p className="lead mb-4">
                        Explore our opportunities and find your next challenge.
                    </p>
                    <a href="#application-form-section" className="btn btn-light btn-lg">
                        Apply Today
                    </a>
                </div>
            </section>
        </div>
    );
}
