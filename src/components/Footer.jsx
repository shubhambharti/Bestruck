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
            .replace(/\s+/g, "") // spaces remove
            .replace(/[\/&]/g, "") // slash & remove
            .replace(/[^a-z0-9]/g, ""); // extra chars remove

    return (
        <footer>
            <div className="container small border-top">
                <div className="row py-2 d-flex justify-content-between">

                    {/* Company Info */}
                    <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
                        <div className="d-flex justify-content-evenly">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" className="bi bi-layers-half" viewBox="0 0 16 16">
                                <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 
                                    8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 
                                    .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 
                                    8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zM8 
                                    9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                            </svg> */}
                            <h4>{siteName?.split(" ").slice(0, 2).join(" ")}</h4>
                        </div>

                        <address className="text-secondary mt-3 fs-5">{siteAddress}</address>

                        {/* Email */}
                        <Link to={`mailto:${siteEmail}`} className="nav-link link-secondary ps-0 mt-3 fs-6">
                            <FiMail className="me-2" /> {siteEmail}
                        </Link>

                        {/* Phones */}
                        {phones.map((phone, i) => (
                            <Link key={i} to={`tel:${phone}`} className="nav-link link-secondary ps-0 mt-3 fs-6">
                                <FiPhone className="me-2" /> {phone}
                            </Link>
                        ))}
                    </div>

                    {/* Company Links */}
                    <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
                        <h3 className="h6 mb-3">Company</h3>
                        <ul className="nav flex-column">
                            {companyLinks.map((link, i) => (
                                <li key={i} className="nav-item link-dark pb-1 link-fancy me-2">
                                    <Link className="nav-link link-secondary ps-0" to={`/${link.to}`}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="col-12 col-lg-6 col-xl-3 border-end p-5">
                        <h3 className="h6 mb-3">Products</h3>
                        <ul className="nav flex-column">
                            {products.map((product, i) => (
                                <li key={i} className="nav-item link-dark pb-1 link-fancy me-2">
                                    <Link className="nav-link link-secondary ps-0" to={`product/${slugify(product)}`}>
                                        {product}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Subpages */}
                    <div className="col-12 col-lg-6 col-xl-3 p-5">
                        <h3 className="h6 mb-3">Quick Links</h3>
                        <ul className="nav flex-column">
                            {subpages.map((page, i) => (
                                <li key={i} className="nav-item link-dark pb-1 link-fancy me-2">
                                    <Link className="nav-link link-secondary ps-0" to={`/${page.href}`}>{page.label}</Link>
                                </li>
                            ))}
                        </ul>
                        <h5 className="mt-5">Subscribe Our Newsletter</h5>
                        <form>
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
                <div className="container text-center py-3 small">
                    &copy; {siteName}
                </div>
                <div className="container text-center py-3 small">
                    Developed by{" "}
                    <a href="https://shubhambhartiportfolio.netlify.app/" className="link-fancy" target="_blank" rel="noreferrer">
                        Shubham Bharti
                    </a>
                </div>
            </div>
        </footer >
    );
}
