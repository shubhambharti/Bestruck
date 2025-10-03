import { useState } from 'react';
import { FaBriefcase, FaUsers, FaLightbulb, FaHeart, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import Seo from "../components/Seo"


// --- Job Listing Data ---
// (Your existing jobOpenings array)
// const jobOpenings = [
//     {
//         id: "software-engineer",
//         title: "Software Engineer (Frontend)",
//         location: "Bengaluru, India",
//         type: "Full-time",
//         department: "Engineering",
//         description: "We're looking for a passionate Frontend Engineer to join our growing team. You'll work on exciting projects, building user-friendly and responsive web applications using React, HTML, CSS, and modern JavaScript.",
//         responsibilities: [
//             "Develop and maintain high-quality user interfaces for our web applications.",
//             "Collaborate with product managers and designers to define and implement new features.",
//             "Optimize applications for maximum speed and scalability.",
//             "Write clean, maintainable, and testable code.",
//         ],
//         requirements: [
//             "2+ years of experience with React.js and its ecosystem.",
//             "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
//             "Thorough understanding of React.js and its core principles.",
//             "Experience with popular React workflows (such as Flux or Redux).",
//             "Familiarity with RESTful APIs.",
//             "Bachelor's degree in Computer Science or a related field.",
//         ],
//     },
// ];

export default function CareerPage() {
    const [openJobId, setOpenJobId] = useState(null);

    const toggleJobDetails = (id) => {
        setOpenJobId(openJobId === id ? null : id);
    };

    // Optional: Define a success handler specific to the career page if needed
    const handleCareerFormSuccess = (data) => {
        console.log("Career form submitted successfully:", data);
        // Maybe log applicant data to a different system or show a different message
    };


    return (
        <div className="career-page theme-color">
            <Seo
                title="Careers"
                description={`Join the team at ${import.meta.env.VITE_SITE_NAME || "MF Engineering And Fabrication"}'s and build your career with us. Explore exciting job opportunities and our vibrant company culture.`}
            />

            {/* --- Hero Section --- */}
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
                    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">Auild Your Future With Us</h1>
                    <p className="lead mb-4 animate__animated animate__fadeInUp">Discover a place where your talent thrives and your contributions make an impact.</p>
                </div>
            </section>

            {/* --- Culture & Benefits Section --- */}
            <section className="culture-benefits py-5 ">
                <div className="container">
                    <h2 className="text-center mb-5 display-5 fw-bold">Our Culture & Benefits</h2>
                    <div className="row text-center g-4">
                        <div className="col-md-3">
                            <div className="card theme-dark-color h-100 shadow-sm p-4 border-0" style={{ borderRadius: "20px" }}>
                                <div className="card-body">
                                    <FaUsers className="text-primary fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">Collaborative Environment</h5>
                                    <p className="card-text text-muted">Work alongside passionate individuals who support and inspire each other.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card theme-dark-color h-100 shadow-sm p-4 border-0" style={{ borderRadius: "20px" }}>
                                <div className="card-body">
                                    <FaLightbulb className="text-success fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">Innovation at Core</h5>
                                    <p className="card-text text-muted">Challenge the status quo and contribute to groundbreaking projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card theme-dark-color h-100 shadow-sm p-4 border-0" style={{ borderRadius: "20px" }}>
                                <div className="card-body">
                                    <FaBriefcase className="text-info fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">Growth Opportunities</h5>
                                    <p className="card-text text-muted">Continuous learning, mentorship, and clear paths for career advancement.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card theme-dark-color h-100 shadow-sm p-4 border-0" style={{ borderRadius: "20px" }}>
                                <div className="card-body">
                                    <FaHeart className="text-danger fs-1 mb-3" />
                                    <h5 className="card-title fw-bold">Employee Well-being</h5>
                                    <p className="card-text text-muted">Comprehensive benefits, flexible work options, and a focus on work-life balance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Job Openings Section --- */}
            {/* <section id="job-openings" className="job-openings py-5">
                <div className="container">
                    <h2 className="text-center mb-5 display-5 fw-bold">Current Job Openings</h2>
                    {jobOpenings.length > 0 ? (
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                {jobOpenings.map((job) => (
                                    <div key={job.id} className="job-card card mb-3 shadow-sm border-0">
                                        <div className="card-body p-4">
                                            <div className="d-flex justify-content-between align-items-center" onClick={() => toggleJobDetails(job.id)} style={{ cursor: 'pointer' }}>
                                                <div>
                                                    <h4 className="mb-1 text-primary">{job.title}</h4>
                                                    <p className="text-muted mb-0">
                                                        {job.location} • {job.type} • {job.department}
                                                    </p>
                                                </div>
                                                <div>
                                                    {openJobId === job.id ? <FaChevronUp className="text-secondary" /> : <FaChevronDown className="text-secondary" />}
                                                </div>
                                            </div>
                                            {openJobId === job.id && (
                                                <div className="job-details mt-4 animate__animated animate__fadeIn">
                                                    <p className="mb-3">{job.description}</p>
                                                    <h5 className="fw-bold">Responsibilities:</h5>
                                                    <ul className="list-unstyled mb-3">
                                                        {job.responsibilities.map((res, i) => (
                                                            <li key={i} className="mb-1 d-flex align-items-start">
                                                                <FaBriefcase className="me-2 mt-1 text-success flex-shrink-0" />
                                                                <span>{res}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <h5 className="fw-bold">Requirements:</h5>
                                                    <ul className="list-unstyled mb-4">
                                                        {job.requirements.map((req, i) => (
                                                            <li key={i} className="mb-1 d-flex align-items-start">
                                                                <FaLightbulb className="me-2 mt-1 text-info flex-shrink-0" />
                                                                <span>{req}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <a href="#application-form-section" className="btn btn-outline-primary mt-2">Apply Now</a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <p className="lead text-muted">We currently don't have any open positions, but we're always looking for talented individuals! Please check back later or send us your resume below.</p>
                        </div>
                    )}
                </div>
            </section> */}

            {/* --- General Application/Contact Form for Careers Page --- */}
            <section id="application-form-section" className="py-5 ">
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

            {/* --- Call to Action Section (Optional, can be removed if form is enough) --- */}
            <section className="career-cta bg-primary text-white text-center py-5">
                <div className="container">
                    <h2 className="display-5 fw-bold mb-3">Ready to Make an Impact?</h2>
                    <p className="lead mb-4">Explore our opportunities and find your next challenge.</p>
                    {/* Link directly to the form section */}
                    <a href="#application-form-section" className="btn btn-light btn-lg">Apply Today</a>
                </div>
            </section>
        </div>
    );
}