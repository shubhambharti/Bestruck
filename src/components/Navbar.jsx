import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navbarCollapseRef = useRef(null);
    const location = useLocation();

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const companyLinks = [
        { to: "/aboutus", label: "About Us" },
        { to: "/history", label: "History" },
        { to: "/mission&vision", label: "Mission & Vision" },
    ];

    const products = [
        "BACK REST MOUNTING",
        "BRACKET RIDER L/R",
        "DIFFERENTIAL FOR E-RICKSHAW",
        "SEAT MOUNTING PLATE",
        "SEAT MOUNTING BRACKET",
        "STAY MAIN SWITCH KZNA",
        "STAND MOUNTING BRACKET",
        "GEAR MOUNTING BRACKET",
        "HERO BIKES TAIL LIGHT MOUNTING",
        "HONDA ACTIVA BREAK WIRE GUIDE",
        "SHOCKER ADJUSTER",
        "HINGE",
    ];

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/\s+/g, "")
            .replace(/[\/&]/g, "")
            .replace(/[^a-z0-9-]/g, "");

    // Close navbar on route change
    useEffect(() => {
        if (navbarCollapseRef.current) {
            const bsCollapse =
                window.bootstrap.Collapse.getInstance(navbarCollapseRef.current) ||
                new window.bootstrap.Collapse(navbarCollapseRef.current, { toggle: false });
            bsCollapse.hide();
        }
    }, [location]);

    // Close navbar if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = navbarCollapseRef.current;
            const isMenuOpen = menu?.classList.contains("show");

            if (
                isMenuOpen &&
                !menu.contains(event.target) &&
                !event.target.closest(".navbar-toggler")
            ) {
                const bsCollapse =
                    window.bootstrap.Collapse.getInstance(menu) ||
                    new window.bootstrap.Collapse(menu, { toggle: false });
                bsCollapse.hide();
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <nav
            id="navScroll"
            className={`navbar navbar-expand-lg pb-3 navbar-light fixed-top ${isScrolled ? "scrolled shadow-sm bg-white" : "bg-light"
                }`}
        >
            <div className="container">
                {/* Brand */}
                <a className="navbar-brand pe-4 fs-4" href="/">
                    <span className="ms-1 rouge-script-regular fw-bolder">
                        {import.meta.env.VITE_SITE_NAME?.split(" ")[0]}
                    </span>
                </a>

                {/* Toggler */}
                <button
                    className="navbar-toggler me-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Nav Items */}
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                    ref={navbarCollapseRef}
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* Company Dropdown */}
                        <li className="nav-item link-dark pb-2 link-fancy dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Company
                            </a>
                            <ul className="dropdown-menu professional-dropdown-menu">
                                {companyLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link className="dropdown-item" to={link.to}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Products Dropdown */}
                        <li className="nav-item link-dark link-fancy dropdown mx-2">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                Product
                            </a>
                            <ul className="dropdown-menu professional-dropdown-menu">
                                {products.map((p, i) => (
                                    <li key={i}>
                                        <Link className="dropdown-item" to={`/product/${slugify(p)}`}>
                                            {p}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Static Links */}
                        {[
                            { to: "/people", label: "People" },
                            { to: "/career", label: "Career" },
                            { to: "/contactus", label: "Contact Us" },
                        ].map((l, i) => (
                            <li key={i} className="nav-item link-dark link-fancy mx-2">
                                <Link className="nav-link" to={l.to}>
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}
                    <a
                        href="/assets/BestruckAutopartsLLP.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-dark ms-lg-3"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>
        </nav>
    );
}
