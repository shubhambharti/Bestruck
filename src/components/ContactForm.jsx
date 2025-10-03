import React, { useState } from 'react';
import { FiSend, FiBriefcase, FiUpload } from 'react-icons/fi';

// For a real app, this would be imported from a shared data file
const jobOpenings = [
    { id: "software-engineer", title: "Software Engineer (Frontend)" },
    { id: "product-manager", title: "Product Manager" },
    { id: "marketing-specialist", title: "Digital Marketing Specialist" },
];

export default function ContactForm({
    formTitle,
    formDescription,
    submitButtonText,
    onSubmitSuccess,
    isCareerForm = false // New prop to control which fields are shown
}) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        position: '',
        resume: null,
        message: '',
    });
    const [fileName, setFileName] = useState('Upload your Resume/CV');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFormData(prevData => ({ ...prevData, resume: e.target.files[0] }));
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            e.stopPropagation();
        }
        form.classList.add('was-validated');

        if (form.checkValidity()) {
            // In a real app, you'd send the data to a backend.
            // For file uploads, you'd use FormData.
            console.log("Form Submitted:", formData);
            if (onSubmitSuccess) onSubmitSuccess(formData);

            alert(`Thank you for your message, ${formData.fullName || formData.email}!`);

            // Reset form
            setFormData({ fullName: '', email: '', phone: '', subject: '', position: '', resume: null, message: '' });
            setFileName('Upload your Resume/CV');
            form.classList.remove('was-validated');
        }
    };

    return (
        <div
            className="card shadow-lg border-0 p-4"
            style={{
                background: "rgba(255,255,255,0.95)",
                borderRadius: "16px",
            }}
        >
            <h2 className="fw-bold theme-text-color my-4 text-center">
                {formTitle || "Send Us a Message"}
            </h2>
            <p className="card-text text-center text-muted mb-4">
                {formDescription || "We'd love to hear from you. Please fill out the form below."}
            </p>
            <form className="row g-3 px-md-3 needs-validation" noValidate onSubmit={handleSubmit}>
                {/* --- Common Fields --- */}
                <div className="col-md-6">
                    <div className="form-floating-group">
                        <input type="text" className="form-control" id="fullName" name="fullName" placeholder=" " value={formData.fullName} onChange={handleChange} required />
                        <label className="form-label" htmlFor="fullName">Full Name</label>
                        <div className="invalid-feedback">Please enter your full name.</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating-group">
                        <input type="email" className="form-control" id="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                        <label className="form-label" htmlFor="email">Email</label>
                        <div className="invalid-feedback">Please enter a valid email address.</div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-floating-group">
                        <input type="tel" className="form-control" id="phone" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} />
                        <label className="form-label" htmlFor="phone">Phone (Optional)</label>
                    </div>
                </div>

                {/* --- Conditional Fields --- */}
                {isCareerForm ? (
                    <>
                        {/* --- Position Dropdown --- */}
                        <div className="col-md-6">
                            <div className="form-floating-group custom-dropdown-wrapper">
                                <div
                                    className="custom-dropdown"
                                    onClick={() => setOpen(!open)}
                                    tabIndex={0}
                                    onBlur={() => setOpen(false)}
                                >
                                    <div className={`selected-value ${formData.position ? "filled" : ""}`}>
                                        {formData.position || "Select a position"}
                                        <span className={`arrow ${open ? "up" : "down"}`}></span>
                                    </div>

                                    {open && (
                                        <ul className="options">
                                            {jobOpenings.map((job) => (
                                                <li
                                                    key={job.id}
                                                    onClick={() => {
                                                        setFormData((prev) => ({ ...prev, position: job.title }));
                                                        setOpen(false);
                                                    }}
                                                >
                                                    {job.title}
                                                </li>
                                            ))}
                                            <li
                                                onClick={() => {
                                                    setFormData((prev) => ({ ...prev, position: "Other" }));
                                                    setOpen(false);
                                                }}
                                            >
                                                General Application
                                            </li>
                                        </ul>
                                    )}
                                </div>
                                <label className={`form-label ${formData.position ? "floated" : ""}`} htmlFor="position">
                                    Position Applying For
                                </label>
                                <div className="invalid-feedback">Please select a position.</div>
                            </div>
                        </div>


                        {/* --- Resume File Upload --- */}
                        <div className="col-12">
                            <div className="form-floating-group">
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    title=' '
                                    className="form-control file-input"
                                    onChange={handleFileChange}
                                    accept=".pdf,.doc,.docx"
                                    required
                                />
                                <label className="form-label" htmlFor="resume">
                                    Resume / CV
                                </label>
                                <div className="invalid-feedback">Please upload your resume.</div>
                            </div>
                        </div>
                    </>
                )

                    : (
                        // --- Field for Contact Us Page ---
                        <div className="col-md-6">
                            <div className="form-floating-group">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder=" " value={formData.subject} onChange={handleChange} required />
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <div className="invalid-feedback">Please enter a subject.</div>
                            </div>
                        </div>
                    )}

                {/* --- Message Field (Common to both) --- */}
                <div className="col-12">
                    <div className="form-floating-group">
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder=" "
                            style={{ height: "120px" }}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <label className="form-label" htmlFor="message">{isCareerForm ? "Cover Letter / Additional Information" : "Your Message"}</label>
                        <div className="invalid-feedback">Please enter your message.</div>
                    </div>
                </div>

                {/* --- Submit Button (Common to both) --- */}
                <div className="col-12 text-center mt-4">
                    <button className="btn btn-primary btn-lg px-5" type="submit">
                        <FiSend className="me-2" /> {submitButtonText || "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
}