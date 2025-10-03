import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Seo from "../components/Seo";
import ContactForm from '../components/ContactForm';



export default function ContactUsPage() {
    const siteAddress = import.meta.env.VITE_SITE_ADDRESS || "123 Main Street, City, State, Country";
    const siteEmail = import.meta.env.VITE_SITE_EMAIL || "info@example.com";
    const phones = [
        import.meta.env.VITE_SITE_PHONE1,
        import.meta.env.VITE_SITE_PHONE2,
        import.meta.env.VITE_SITE_PHONE3,
    ].filter(Boolean);

    // Optional: Define a success handler specific to the contact page if needed
    const handleContactSuccess = (data) => {
        console.log("Contact form submitted successfully on Contact Us Page:", data);
    };

    return (
        <div className="contact-us-page theme-color">
            <Seo
                title="Contact Us"
                description={`Reach out to ${import.meta.env.VITE_SITE_NAME || " MF Engineering And Fabrication"} for inquiries, support, or partnership opportunities. Find our contact details and send us a message.`}
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
            >
                <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}></div>
                <div className="container" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">Get in Touch</h1>
                    <p className="lead mb-4 animate__animated animate__fadeInUp">We’d love to hear from you. Let’s connect!</p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <div className="container mt-5 py-3">
                <div className="row g-4 justify-content-center">

                    {/* Form Component */}
                    <div className="col-lg-7 mb-3" data-aos="fade-right">
                        <ContactForm
                            formTitle="Send Us a Message"
                            submitButtonText="Send Message"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-5 mb-3" data-aos="fade-left">
                        <div className="contact-info-card card h-100 shadow-lg border-0 p-4"
                            style={{ background: "rgba(255,255,255,0.95)", borderRadius: "16px" }}>
                            <h4 className="fw-bold text-center mb-4">Our Details</h4>

                            {/* Address */}
                            <div className="contact-item d-flex align-items-start mb-3" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-circle me-3">
                                    <FiMapPin />
                                </div>
                                <address className="mb-0 flex-grow-1">{siteAddress}</address>
                            </div>

                            {/* Email */}
                            <div className="contact-item d-flex align-items-center mb-3" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-circle me-3">
                                    <FiMail />
                                </div>
                                <Link to={`mailto:${siteEmail}`} className="text-decoration-none text-dark">{siteEmail}</Link>
                            </div>

                            {/* Phones */}
                            {phones.map((phone, i) => (
                                <div key={i} className="contact-item d-flex align-items-center mb-3" data-aos="zoom-in" data-aos-delay={300 + i * 100}>
                                    <div className="icon-circle me-3">
                                        <FiPhone />
                                    </div>
                                    <Link to={`tel:${phone}`} className="text-decoration-none text-dark">{phone}</Link>
                                </div>
                            ))}

                            {/* Google Maps Iframe */}
                            <div className="map-container mt-4" data-aos="fade-up" data-aos-delay="500">
                                <iframe
                                    title="map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15222.18663806742!2d78.37341858972168!3d17.48425268019623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbef2829283f51%3A0x6a0f3b0c6a5a0d!2sHitech%20City!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    className="contact-map border-0 rounded-3"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
