import React from "react";
import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";

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
                            className="card shadow-lg border-0 p-4"
                            style={{
                                background: "rgba(255,255,255,0.9)",
                                borderRadius: "16px",
                            }}
                        >
                            <h2 className="fw-bold theme-text-color mb-4 text-center">
                                Send Us a Message
                            </h2>
                            <form className="row g-3 needs-validation" noValidate>
                                {/* Full Name */}
                                <div className="col-md-6">
                                    <label htmlFor="name" className="form-label fw-semibold">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        id="name"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label fw-semibold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control rounded-pill"
                                        id="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label fw-semibold">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control rounded-pill"
                                        id="phone"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="col-md-6">
                                    <label htmlFor="subject" className="form-label fw-semibold">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control rounded-pill"
                                        id="subject"
                                        placeholder="Query about services"
                                        required
                                    />
                                </div>

                                {/* Message */}
                                <div className="col-12">
                                    <label htmlFor="message" className="form-label fw-semibold">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Write your message..."
                                        required
                                        style={{ borderRadius: "12px" }}
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <div className="col-12 text-center mt-3">
                                    <button
                                        className="btn theme-text-color px-5 py-2 fw-semibold shadow-sm"
                                        type="submit"
                                        style={{ borderRadius: "50px" }}
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-5">
                        <div className="bg-light rounded-4 p-4 shadow-sm h-100">
                            <h4 className="fw-bold mb-3 theme-text-color">Contact Info</h4>
                            <address className="text-secondary mt-3 fs-5">{siteAddress}</address>

                            {/* Email */}
                            <p>
                                <Link to={`mailto:${siteEmail}`} className="">
                                    <FiMail className="bi bi-geo-alt-fill theme-text-color me-2" /> {siteEmail}
                                </Link>
                            </p>

                            {/* Phones */}
                            {phones.map((phone, i) => (
                                <p key={i} className="mb-2">
                                    <Link to={`tel:${phone}`} className="">
                                        <FiPhone className="bi bi-geo-alt-fill theme-text-color me-2" /> {phone}
                                    </Link>
                                </p>
                            ))}

                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1778.7959363523548!2d81.06037337431903!3d26.916444822989327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399959569f87619b%3A0x7148a0c8b1765421!2sM.F%20ENGGENRING%20AND%20FABRICATION!5e0!3m2!1sen!2sin!4v1759225694917!5m2!1sen!2sin"
                                width="100%"
                                height="250"
                                style={{ border: 0, borderRadius: "12px" }}
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
