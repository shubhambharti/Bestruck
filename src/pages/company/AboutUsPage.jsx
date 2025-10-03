import { useEffect } from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo"

export default function AboutUsPage() {


    return (
        <div className="about-us-page theme-color">
            <Seo
                title="About Us"
                description={`Learn more about ${import.meta.env.VITE_SITE_NAME || " MF Engineering And Fabrication"}'s, our mission, values, and what drives us in engineering and fabrication.`}
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
                    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">About Us</h1>
                    <p className="lead mb-4 animate__animated animate__fadeInUp">Passion. Innovation. Excellence.</p>
                </div>
            </section>

            {/* Company Story */}
            <section className="container my-5">
                <div className="row align-items-center g-4">
                    <div className="col-md-6" data-aos="fade-right" >
                        <img
                            src="/img/about.png"
                            alt="Company Story"
                            className="img-fluid "
                            style={{ borderRadius: "20px" }}
                        />
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <h2 className="fw-bold mb-3">Our Story</h2>
                        <p className="lead text-muted">
                            Founded with a vision to provide top-notch automotive solutions, we combine
                            expertise, quality, and innovation to deliver products that exceed expectations.
                            Our journey started with a small workshop, and today we serve clients across
                            industries with reliability and trust.
                        </p>
                        <Link to="/contactus" className="btn btn-primary btn-lg mt-3">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className=" py-5">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5" data-aos="fade-up">Meet Our Team</h2>
                    <div className="row g-4 justify-content-center">
                        {[
                            { name: "DWARKESH LAJPAL", role: "Founder & Director", img: "/img/person2.jpg" },
                            { name: "FARUK MOHOMMAD", role: "Founder & Director", img: "/img/person4.jpg" },
                            { name: "PARMESH KUMAR", role: "Founder & Director", img: "/img/person5.jpg" },
                        ].map((member, idx) => (
                            <div className="col-12 x col-sm-6 col-md-4 mb-3" key={idx} data-aos="zoom-in" data-aos-delay={idx * 200}>
                                <div className="card theme-dark-color shadow-sm text-center border-0 h-100" style={{ borderRadius: "20px" }}>
                                    <img
                                        src={member.img}
                                        className="card-img-top rounded-circle mx-auto mt-3"
                                        alt={member.name}
                                        style={{ width: "150px", height: "150px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{member.name}</h5>
                                        <p className="card-text text-muted">{member.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container py-5">
                <h2 className="fw-bold text-center mb-5" data-aos="fade-up">Our Values</h2>
                <div className="row g-4">
                    {[
                        { title: "Quality", desc: "Top-quality products ensuring durability and performance.", icon: "✓" },
                        { title: "Innovation", desc: "Constantly evolving solutions to meet modern challenges.", icon: "💡" },
                        { title: "Integrity", desc: "Honesty and transparency in every aspect of our work.", icon: "🤝" },
                        { title: "Customer First", desc: "Prioritizing client satisfaction and support.", icon: "⭐" },
                    ].map((item, idx) => (
                        <div className="col-12 col-md-6 col-lg-3 mb-3" key={idx} data-aos="flip-left" data-aos-delay={idx * 150}>
                            <div className="card theme-dark-color h-100 border-0 shadow-sm text-center p-4" style={{ borderRadius: "20px" }}>
                                <div className="display-4 mb-3">{item.icon}</div>
                                <h5 className="fw-bold">{item.title}</h5>
                                <p className="text-muted">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center py-5 bg-primary text-white" style={{ borderRadius: "20px 20px 0 0" }} data-aos="zoom-in">
                <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
                <p className="mb-4">Join us and experience excellence in every product we deliver.</p>
                <Link to="/contactus" className="btn btn-light btn-lg">
                    Contact Us
                </Link>
            </section>
        </div>
    );
}
