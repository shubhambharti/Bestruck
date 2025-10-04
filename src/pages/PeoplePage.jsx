import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

import Seo from "../components/Seo";

const teamMembers = [
    {
        name: "Priya Sharma",
        role: "Chief Executive Officer",
        imageUrl: "/img/person1.jpg",
        bio: "Priya leads our company with a vision for the future, combining innovative strategies with a deep commitment to our clients.",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "mailto:priya.sharma@example.com",
        },
    },
    {
        name: "Rohan Kumar",
        role: "Chief Technology Officer",
        imageUrl: "/img/person2.jpg",
        bio: "Rohan is the architect of our technology, driving the engineering team to build robust and scalable solutions.",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "mailto:rohan.kumar@example.com",
        },
    },
    {
        name: "Anjali Verma",
        role: "Head of Operations",
        imageUrl: "/img/person6.jpg",
        bio: "Anjali ensures that our operations run smoothly and efficiently, focusing on quality and process optimization.",
        social: {
            linkedin: "#",
            email: "mailto:anjali.verma@example.com",
        },
    },
    {
        name: "Vikram Singh",
        role: "Lead Product Designer",
        imageUrl: "/img/person4.jpg",
        bio: "Vikram’s creative vision shapes our products, blending user-centric design with cutting-edge aesthetics.",
        social: {
            twitter: "#",
            email: "mailto:vikram.singh@example.com",
        },
    },
];

export default function PeoplePage() {

    return (
        <div className="people-page theme-color">
            <Seo
                title="Our Team"
                description={`Meet the talented engineers, fabricators, and leadership driving ${import.meta.env.VITE_SITE_NAME || "MF Engineering And Fabrication"}'s success.`}
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
            >
                <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}></div>
                <div className="container" style={{ zIndex: 1 }}>
                    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">Meet Our Team</h1>
                    <p className="lead mb-4 animate__animated animate__fadeInUp">The passionate individuals driving our vision forward.</p>
                </div>
            </section>

            {/* --- Team Grid Section --- */}
            <section className="team-grid theme-color py-5">
                <div className="container">
                    <div className="row g-4">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-6 mb-3"
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                            >
                                <div className="team-card-container">
                                    <div className="team-card">
                                        {/* Card Front */}
                                        <div className="team-card-front">
                                            <img src={member.imageUrl} alt={member.name} className="team-member-image" />
                                            <div className="team-card-title theme-dark-color">
                                                <h5 className="mb-0">{member.name}</h5>
                                                <p className="text-primary small mb-0">{member.role}</p>
                                            </div>
                                        </div>

                                        {/* Card Back */}
                                        <div className="team-card-back">
                                            <div className="team-card-back-content">
                                                <h5 className="mb-1">{member.name}</h5>
                                                <p className="text-primary small">{member.role}</p>
                                                <p className="small mb-3">{member.bio}</p>
                                                <div className="social-links">
                                                    {member.social.linkedin && (
                                                        <a className="theme-text-color" href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                                                            <FaLinkedin />
                                                        </a>
                                                    )}
                                                    {member.social.twitter && (
                                                        <a className="theme-text-color" href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                                                            <FaTwitter />
                                                        </a>
                                                    )}
                                                    {member.social.email && (
                                                        <a className="theme-text-color" href={member.social.email}>
                                                            <FaEnvelope />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
