import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiSend } from "react-icons/fi";

export default function Footer() {
    const siteName = import.meta.env.VITE_SITE_NAME;
    const siteAddress = import.meta.env.VITE_SITE_ADDRESS;
    const siteEmail = import.meta.env.VITE_SITE_EMAIL;
    const phones = [
        import.meta.env.VITE_SITE_PHONE1,
        import.meta.env.VITE_SITE_PHONE2,
        import.meta.env.VITE_SITE_PHONE3,
    ].filter(Boolean);

    const companyLinks = [
        { to: "aboutus", label: "About Us" },
        { to: "history", label: "History" },
        { to: "mission&vision", label: "Mission & Vision" },
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

    const subpages = [
        { href: "people", label: "People" },
        { href: "career", label: "Career" },
        { href: "contactus", label: "Contact Us" },
    ];

    const slugify = (text) =>
        text
            .toLowerCase()
            .replace(/\s+/g, "") // remove spaces
            .replace(/[\/&]/g, "") // remove slash & ampersand
            .replace(/[^a-z0-9]/g, ""); // remove special chars

    return (
        <footer className="bg-dark theme-text-color py-4 shadow-lg border-top border-light border-5" style={{ borderRadius: "20px 20px 0 0" }}>
            <div className="container small">
                <div className="row p-2 d-flex justify-content-between">

                    {/* Company Info */}
                    <div className="col-12 col-lg-6 col-xl-3 border-end p-5" data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex justify-content-evenly">
                            <h4 className="rouge-script-regular">{siteName?.split(" ").slice(0, 2).join(" ")}</h4>
                        </div>

                        <address className="text-light mt-3 fs-5">{siteAddress}</address>

                        <Link to={`mailto:${siteEmail}`} className="nav-link link-light ps-0 mt-3 fs-6">
                            <FiMail className="me-2" /> {siteEmail}
                        </Link>

                        {phones.map((phone, i) => (
                            <Link key={i} to={`tel:${phone}`} className="nav-link link-light ps-0 mt-3 fs-6">
                                <FiPhone className="me-2" /> {phone}
                            </Link>
                        ))}
                    </div>

                    {/* Company Links */}
                    <div className="col-12 col-lg-6 col-xl-3 border-end p-5" data-aos="fade-up" data-aos-delay="200">
                        <h3 className="h6 mb-3">Company</h3>
                        <ul className="nav flex-column">
                            {companyLinks.map((link, i) => (
                                <li key={i} className="nav-item link-light pb-1 link-fancy me-2">
                                    <Link className="nav-link link-light ps-0" to={`/${link.to}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="col-12 col-lg-6 col-xl-3 border-end p-5" data-aos="fade-up" data-aos-delay="300">
                        <h3 className="h6 mb-3">Products</h3>
                        <ul className="nav flex-column">
                            {products.map((product, i) => (
                                <li key={i} className="nav-item link-light pb-1 link-fancy me-2">
                                    <Link className="nav-link link-light ps-0" to={`product/${slugify(product)}`}>
                                        {product}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subpages & Newsletter */}
                    <div className="col-12 col-lg-6 col-xl-3 p-5" data-aos="fade-up" data-aos-delay="400">
                        <h3 className="h6 mb-3">Quick Links</h3>
                        <ul className="nav flex-column">
                            {subpages.map((page, i) => (
                                <li key={i} className="nav-item link-light pb-1 link-fancy me-2">
                                    <Link className="nav-link link-light ps-0" to={`/${page.href}`}>{page.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <h5 className="mt-5">Subscribe Our Newsletter</h5>
                        <form data-aos="fade-up" data-aos-delay="500">
                            <div className="input-group">
                                <input
                                    type="email"
                                    name="subscribe"
                                    className="form-control rounded-pill"
                                    placeholder="Enter your Email Address"
                                />
                                <button
                                    type="submit"
                                    className="btn rounded-pill ms-n5"
                                    style={{ marginLeft: "-50px", zIndex: 5, marginBottom: "5px" }}
                                >
                                    <FiSend />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="d-flex justify-content-between">
                <div className="container text-center py-3 small" data-aos="fade-right">
                    &copy; {siteName}
                </div>
                <div className="container text-center py-3 small" data-aos="fade-left">
                    Developed by{" "}
                    <a href="https://shubhambhartiportfolio.netlify.app/" className="link-fancy theme-text-color" target="_blank" rel="noreferrer">
                        Shubham Bharti
                    </a>
                </div>
            </div>
        </footer>
    );
}
