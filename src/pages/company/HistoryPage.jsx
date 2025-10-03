import { useEffect, useRef } from "react";

import Seo from "../../components/Seo"

export default function HistoryPage() {
    const historyEvents = [
        {
            year: "2022",
            title: "Global Expansion",
            description:
                "Expanded operations into the European and Asian markets, opening new headquarters in Berlin and Singapore.",
        },
        {
            year: "2020",
            title: "Acquires Innovate Inc.",
            description:
                "A landmark acquisition that doubled our research and development capabilities, paving the way for next-gen products.",
        },
        {
            year: "2018",
            title: "Launched Quantum Platform",
            description:
                "Introduced our flagship SaaS product, which quickly became the industry standard for cloud-based analytics.",
        },
        {
            year: "2015",
            title: "Series A Funding",
            description:
                "Secured $20 million from leading venture capital firms to accelerate growth and product development.",
        },
        {
            year: "2012",
            title: "Company Founded",
            description:
                "Started in a small garage with a big idea: to revolutionize data processing for small and medium-sized businesses.",
        },
    ];

    const timelineRef = useRef(null);
    const timelineProgressRef = useRef(null);

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });

        const handleScroll = () => {
            const timeline = timelineRef.current;
            const progressLine = timelineProgressRef.current;
            if (!timeline || !progressLine) return;

            const timelineRect = timeline.getBoundingClientRect();
            const timelineTop = timelineRect.top + window.scrollY;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;

            const scrollPosition = scrollY + windowHeight / 2;
            const totalTimelineHeight = timeline.offsetHeight;
            const progressHeight = Math.min(
                totalTimelineHeight,
                Math.max(0, scrollPosition - timelineTop)
            );

            const scrollPercent = progressHeight / totalTimelineHeight;
            progressLine.style.height = `${scrollPercent * 100}%`;

            const timelineItems = timeline.querySelectorAll(".timeline-item");
            timelineItems.forEach((item) => {
                const itemTop = item.getBoundingClientRect().top + window.scrollY;
                const itemActivationPoint = itemTop + 20;

                if (scrollY + windowHeight / 2 >= itemActivationPoint) {
                    item.classList.add("in-view");
                } else {
                    item.classList.remove("in-view");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    // useEffect(() => {
    //     const navbar = document.getElementById("navScroll");
    //     const hero = document.querySelector(".hero-section");
    //     if (navbar && hero) {
    //         hero.style.paddingTop = navbar.offsetHeight + "px";
    //     }
    // }, []);


    return (
        <div className="history-page theme-color">
            <Seo
                title="Our History"
                description={`Explore the journey and milestones of ${import.meta.env.VITE_SITE_NAME || " MF Engineering And Fabrication"}'s from its inception to today, highlighting our growth and achievements.`}
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
                    <h1 className="display-4 fw-bold mb-3 animate__animated animate__fadeInDown">Our Journey</h1>
                    <p className="lead mb-4 animate__animated animate__fadeInUp">A timeline of our company's most significant milestones and achievements.</p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="container mt-5">
                <div className="main-timeline" ref={timelineRef}>
                    {/* Progress Line */}
                    <div className="timeline-progress" ref={timelineProgressRef}></div>

                    {/* Events */}
                    {historyEvents.reverse().map((event, index) => (
                        <div
                            key={index}
                            className={`timeline-item  ${index % 2 === 0 ? "left" : "right"}`}
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={index * 200}
                        >
                            <div className="card theme-dark-color shadow-sm">
                                <div className="card-body p-4">
                                    <h4 className="card-title text-danger fw-bold">
                                        {event.year}
                                    </h4>
                                    <h5 className="card-subtitle mb-2 fw-semibold">
                                        {event.title}
                                    </h5>
                                    <p className="card-text text-muted small">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
