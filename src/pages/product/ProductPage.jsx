import { Link, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Seo from "../../components/Seo"


//  Slugify helper
function slugify(name) {
    return name
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[\/&]/g, "")
        .replace(/[^a-z0-9-]/g, "");
}
//  Product data
const products = [
    {
        name: "BACK REST MOUNTING",
        description: "Our high-quality back rest mounting provides superior support and durability for various vehicle types. Crafted from robust materials, it ensures a secure fit and long-lasting performance. Ideal for custom modifications and replacements.",
        images: ["/img/product/product11.png", "/img/product/product12.png", "/img/product/product13.png"],
        specifications: [
            { label: "Material", value: "High-grade Steel" },
            { label: "Finish", value: "Matte Black" },
        ],
    },
    {
        name: "BRACKET RIDER L/R",
        description: "The Bracket Rider L/R is designed for easy installation and provides essential support for various applications. Its universal design ensures compatibility with multiple models, offering flexibility and reliability. Perfect for industrial and automotive use.",
        images: ["/img/product/product21.png", "/img/product/product22.png"],
        specifications: [
            { label: "Material", value: "Aluminum Alloy" },
            { label: "Compatibility", value: "Universal" },
        ],
    },
    {
        name: "DIFFERENTIAL FOR E-RICKSHAW",
        description: "Our E-Rickshaw Differential is engineered for optimal power transfer and efficiency. It features robust gears and a durable casing, ensuring smooth operation and extended lifespan in demanding conditions. A crucial component for reliable e-rickshaw performance.",
        images: ["/img/product/product31.png", "/img/product/product32.png", "/img/product/product33.png"],
        specifications: [
            { label: "Type", value: "E-Rickshaw Specific" },
            { label: "Efficiency", value: "95%" },
        ],
    },
    {
        name: "SEAT MOUNTING PLATE",
        description: "The Seat Mounting Plate is a durable and precisely engineered component designed to provide a secure and stable base for seating installations. Made from high-quality materials, it ensures strength, easy fitting, and long-lasting performance. Ideal for automotive, industrial, and custom applications, it guarantees safety, reliability, and consistent support.",
        images: ["/img/product/product41.png", "/img/product/product42.png"],
        specifications: [
            { label: "Compatibility", value: "Universal" },
            { label: "Load Capacity", value: "150 kg" },
        ],
    },
    {
        name: "SEAT MOUNTING BRACKET",
        description: "A versatile seat mounting bracket providing a secure and stable base for various seating configurations. Engineered for strength and ease of installation, ensuring passenger safety and comfort.",
        images: ["/img/product/product51.png", "/img/product/product52.png"],
        specifications: [
            { label: "Compatibility", value: "Universal" },
            { label: "Load Capacity", value: "150 kg" },
        ],
    },
    {
        name: "STAY MAIN SWITCH KZNA",
        description: "High-precision stay for main switch (KZNA model). Ensures proper alignment and secure mounting, crucial for electrical system integrity and operational safety.",
        images: ["/img/product/product61.png", "/img/product/product62.png"],
        specifications: [
            { label: "Model", value: "KZNA" },
            { label: "Precision", value: "High" },
        ],
    },
    {
        name: "STAND MOUNTING BRACKET",
        description: "Robust stand mounting bracket designed for stability and easy installation. Essential for securing kickstands or center stands on motorcycles and other vehicles.",
        images: ["/img/product/product71.png", "/img/product/product72.png"],
        specifications: [
            { label: "Application", value: "Motorcycles/Vehicles" },
            { label: "Durability", value: "Heavy Duty" },
        ],
    },
    {
        name: "GEAR MOUNTING BRACKET",
        description: "Precision-engineered gear mounting bracket for secure attachment of gearboxes and transmissions. Minimizes vibration and ensures reliable performance under various loads.",
        images: ["/img/product/product81.png", "/img/product/product82.png"],
        specifications: [
            { label: "Material", value: "Reinforced Steel" },
            { label: "Vibration Dampening", value: "Good" },
        ],
    },
    {
        name: "HERO BIKES TAIL LIGHT MOUNTING",
        description: "Custom-fit tail light mounting bracket specifically designed for Hero Bikes. Ensures perfect fitment and enhanced aesthetics for the rear lighting system.",
        images: ["/img/product/product91.png", "/img/product/product92.png"],
        specifications: [
            { label: "Brand", value: "Hero Bikes" },
            { label: "Fitment", value: "Exact" },
        ],
    },
    {
        name: "HONDA ACTIVA BREAK WIRE GUIDE",
        description: "Durable break wire guide for Honda Activa models. Ensures smooth routing and protection of the brake cable, preventing kinks and ensuring responsive braking.",
        images: ["/img/product/product101.png", "/img/product/product102.png"],
        specifications: [
            { label: "Vehicle", value: "Honda Activa" },
            { label: "Function", value: "Cable Protection" },
        ],
    },
    {
        name: "SHOCKER ADJUSTER",
        description: "The Shocker Adjuster is a high-quality component designed to fine-tune suspension performance. It allows precise adjustment of shock absorbers for improved ride comfort, handling, and stability. Built with durable materials for long-lasting use, it ensures reliable performance across varied road conditions, making it ideal for automotive and two-wheeler applications.",
        images: ["/img/product/product111.png"],
        specifications: [
            { label: "Type", value: "Heavy Duty" },
            { label: "Finish", value: "Zinc Plated" },
        ],
    },
    {
        name: "HINGE",
        description: "Strong and reliable hinge for various applications, from industrial machinery to heavy-duty doors. Built to last with robust construction and smooth articulation.",
        images: ["/img/product/product121.png", "/img/product/product122.png"],
        specifications: [
            { label: "Type", value: "Heavy Duty" },
            { label: "Finish", value: "Zinc Plated" },
        ],
    },
].map((p) => ({ ...p, slug: slugify(p.name) }));

export default function ProductPage() {
    const { slug } = useParams();
    const productIndex = products.findIndex((p) => p.slug === slug);
    const product = products[productIndex];

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    if (!product) {
        return (
            <main className="text-center">
                <div className="container my-5 py-5" data-aos="fade-up">
                    <h2 className="mt-5">Product not found</h2>
                    <p>The product you are looking for does not exist.</p>
                    <Link to="/" className="link-fancy d-inline-flex align-items-center">
                        Go back to frontpage
                    </Link>
                </div>
            </main>
        );
    }

    // Determine next product
    const previousProduct = products[(productIndex - 1 + products.length) % products.length];
    const nextProduct = products[(productIndex + 1) % products.length];

    return (
        <div className="theme-color">
            <div className="container mt-4 p-5 p-md-5">
                <Seo
                    title="Our Products"
                    description={`Explore the innovative products and custom fabrication solutions offered by ${import.meta.env.VITE_SITE_NAME || " MF Engineering And Fabrication"}'s.`}
                />
                <main>
                    {/*  Mobile View as Card */}
                    <div className="card shadow-sm theme-dark-color p-2 d-block d-md-none" data-aos="fade-up">
                        {/* Image */}
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={true}
                            navigation={true}
                            pagination={{ clickable: true }}
                            className="rounded-top custom-swiper"
                        >
                            {product.images.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={img}
                                        onError={(e) => (e.target.src = "/img/noimage.jpg")}
                                        alt={`${product.name} - ${index + 1}`}
                                        className="img-fluid rounded-top"
                                        style={{
                                            width: "100%",
                                            maxHeight: "300px",
                                            objectFit: "contain",
                                            backgroundColor: "#a38b70",
                                            borderRadius: "20px"
                                        }}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Card Body */}
                        <div className="card-body theme-dark-color text-center">
                            <h2 className="card-title fw-bold" data-aos="fade-up">{product.name}</h2>
                            <p className="card-text text-muted text-justify" data-aos="fade-up" data-aos-delay="200">{product.description}</p>
                            <div className="d-grid gap-2 mt-3" data-aos="fade-up" data-aos-delay="400">
                                <Link to="/contactus" className="btn btn-primary btn-lg">
                                    Enquire Now
                                </Link>
                                <a
                                    href="/assets/BestruckAutopartsLLP.pdf"
                                    target="_blank"
                                    className="btn btn-outline-secondary btn-lg"
                                >
                                    Download Brochure
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*  Desktop / Tablet View */}
                    <div className="row g-4 theme-color align-items-center d-none d-md-flex">
                        {/* Image Slider */}
                        <div className="col-md-6" data-aos="fade-right">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={10}
                                slidesPerView={1}
                                loop={true}
                                navigation={true}
                                pagination={{ clickable: true }}
                                className="rounded shadow-sm custom-swiper"
                            >
                                {product.images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <img
                                            src={img}
                                            onError={(e) => (e.target.src = "/img/noimage.jpg")}
                                            alt={`${product.name} - ${index + 1}`}
                                            className="img-fluid rounded"
                                            style={{
                                                width: "100%",
                                                maxHeight: "450px",
                                                objectFit: "contain",
                                                backgroundColor: "#eae0d5",
                                                borderRadius: "20px"
                                            }}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Product Info */}
                        <div className="col-md-6" data-aos="fade-left">
                            <h1 className="mb-3 display-5 fw-bold">{product.name}</h1>
                            <p className="lead text-muted text-justify">{product.description}</p>
                            <div className="mt-4">
                                <Link to="/enquiry" className="btn btn-outline-primary btn-theme-dark-color btn-lg me-2">
                                    Enquire Now
                                </Link>
                                <a
                                    href="/assets/BestruckAutopartsLLP.pdf"
                                    target="_blank"
                                    className="btn btn-theme-dark-color btn-lg"
                                >
                                    Download Brochure
                                </a>
                            </div>
                        </div>
                    </div>

                    {/*  Previous / Next Links (Common for all) */}
                    <div className="row mt-5 g-4 align-items-center text-center text-md-start">
                        <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center" data-aos="fade-right">
                            <Link
                                to={`/product/${previousProduct.slug}`}
                                className="btn btn-outline-primary btn-lg w-100 w-md-auto px-4 py-2 mb-2 shadow-sm rounded-pill"
                            >
                                &larr; {previousProduct.name}
                            </Link>
                        </div>

                        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center" data-aos="fade-left">
                            <Link
                                to={`/product/${nextProduct.slug}`}
                                className="btn btn-outline-primary btn-lg w-100 w-md-auto px-4 py-2 shadow-sm rounded-pill"
                            >
                                {nextProduct.name} &rarr;
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    );
}
