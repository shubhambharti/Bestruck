import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiSend, FiMapPin } from "react-icons/fi";

export default function ContactUsPage() {
    const siteAddress = import.meta.env.VITE_SITE_ADDRESS;
    const siteEmail = import.meta.env.VITE_SITE_EMAIL;
    const phones = [
        import.meta.env.VITE_SITE_PHONE1,
        import.meta.env.VITE_SITE_PHONE2,
        import.meta.env.VITE_SITE_PHONE3,
    ].filter(Boolean);
    return (
        <div>
            {/* Hero Section */}
            <section
                className="text-white d-flex align-items-center justify-content-center"
                style={{
                    minHeight: "40vh",
                    backgroundImage: "url('/img/herosection3.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                <div
                    className="text-center p-4"
                >
                    <h1 className="display-4 fw-bold">Get in Touch</h1>
                    <p className="lead">We’d love to hear from you. Let’s connect!</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className="container my-5">
                <div className="row g-4 align-items-center">
                    {/* Form */}
                    <div className="col-lg-7">
                        <div
                            className="card shadow-lg border-0 p-4 my-4"
                            style={{
                                background: "rgba(255,255,255,0.9)",
                                borderRadius: "16px",
                            }}
                        >
                            <h2 className="fw-bold theme-text-color my-4 text-center">
                                Send Us a Message
                            </h2>
                            <form className="row g-3 my-5 py-2 needs-validation" noValidate>
                                {/* Full Name */}
                                <div className="col-md-6">
                                    <div className="form-floating-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder=" " /* Use a space for consistent behavior */
                                            required
                                        />
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="col-md-6">
                                    <div className="form-floating-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder=" " /* Use a space for consistent behavior */
                                            required
                                        />
                                        <label htmlFor="email" className="form-label">Email</label>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="col-md-6">
                                    <div className="form-floating-group">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            placeholder=" " /* Use a space for consistent behavior */
                                        />
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="col-md-6">
                                    <div className="form-floating-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            placeholder=" " /* Use a space for consistent behavior */
                                            required
                                        />
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="col-12">
                                    <div className="form-floating-group">
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows="5"
                                            placeholder=" " /* A space here is crucial for the CSS selector */
                                            required
                                        ></textarea>
                                        <label htmlFor="message" className="form-label">Message</label>
                                    </div>
                                </div>

                                {/* Submit Button remains the same */}
                                <div className="col-12 text-center mt-3">
                                    <button className="btn btn-submit" type="submit">
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-5">
                        <div className="contact-info-card h-100">
                            <h4 className="fw-bold text-center my-4">Contact Info</h4>

                            {/* Address */}
                            <div className="contact-item">
                                <div className="icon-circle">
                                    {/* Assuming you use a location icon, e.g., from react-icons/fi */}
                                    <FiMapPin />
                                </div>
                                <address>{siteAddress}</address>
                            </div>

                            {/* Email */}
                            <div className="contact-item">
                                <div className="icon-circle">
                                    <FiMail />
                                </div>
                                <Link to={`mailto:${siteEmail}`}>{siteEmail}</Link>
                            </div>

                            {/* Phones */}
                            {phones.map((phone, i) => (
                                <div key={i} className="contact-item">
                                    <div className="icon-circle">
                                        <FiPhone />
                                    </div>
                                    <Link to={`tel:${phone}`}>{phone}</Link>
                                </div>
                            ))}

                            {/* Google Maps Iframe */}
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1778.7959363523548!2d81.06037337431903!3d26.916444822989327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959569f87619b%3A0x7148a0c8b1765421!2sM.F%20ENGGENRING%20AND%20FABRICATION!5e0!3m2!1sen!2sin!4v1759225694917!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                className="contact-map"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
