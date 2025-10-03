import React from 'react';
import { Helmet } from 'react-helmet';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// --- Team Member Data ---
// Simply add or edit objects in this array to update the page.
const teamMembers = [
    {
        name: "Priya Sharma",
        role: "Chief Executive Officer",
        imageUrl: "/img/team/member1.jpg",
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
        imageUrl: "/img/team/member2.jpg",
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
        imageUrl: "/img/team/member3.jpg",
        bio: "Anjali ensures that our operations run smoothly and efficiently, focusing on quality and process optimization.",
        social: {
            linkedin: "#",
            email: "mailto:anjali.verma@example.com",
        },
    },
    {
        name: "Vikram Singh",
        role: "Lead Product Designer",
        imageUrl: "/img/team/member4.jpg",
        bio: "Vikram’s creative vision shapes our products, blending user-centric design with cutting-edge aesthetics.",
        social: {
            twitter: "#",
            email: "mailto:vikram.singh@example.com",
        },
    },
];

export default function PeoplePage() {
    return (
        <div className="people-page">
            <Helmet>
                <title>Meet Our Team | Your Company Name</title>
                <meta name="description" content="Get to know the passionate and talented individuals who drive our company forward." />
            </Helmet>

            {/* --- Hero Section --- */}
            <section className="people-hero text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">Meet Our Team</h1>
                    <p className="lead text-muted">The passionate individuals driving our vision forward.</p>
                </div>
            </section>

            {/* --- Team Grid Section --- */}
            <section className="team-grid py-5">
                <div className="container">
                    <div className="row g-4">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6">
                                <div className="team-card-container">
                                    <div className="team-card">
                                        <div className="team-card-front">
                                            <img src={member.imageUrl} alt={member.name} className="team-member-image" />
                                            <div className="team-card-title">
                                                <h5 className="mb-0">{member.name}</h5>
                                                <p className="text-primary small mb-0">{member.role}</p>
                                            </div>
                                        </div>
                                        <div className="team-card-back">
                                            <div className="team-card-back-content">
                                                <h5 className="mb-1">{member.name}</h5>
                                                <p className="text-primary small">{member.role}</p>
                                                <p className="small mb-3">{member.bio}</p>
                                                <div className="social-links">
                                                    {member.social.linkedin && <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>}
                                                    {member.social.twitter && <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>}
                                                    {member.social.email && <a href={member.social.email}><FaEnvelope /></a>}
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