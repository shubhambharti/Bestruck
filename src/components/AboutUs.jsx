import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
    return (
        <div>
            {/* Services Section */}
            <div className="py-vh-5 w-100 overflow-hidden" id="services">
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div className="col-lg-8" data-aos="fade-down">
                            <h2 className="display-6">
                                Okay, there are three really good reasons for us. There are no
                                more than three, but we think three is a reasonable good number
                                of good stuff.
                            </h2>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center">
                        <div
                            className="col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <span className="h5 fw-lighter">01.</span>
                            <h3 className="py-5 border-top border-dark">
                                Customer Satisfaction
                            </h3>
                            <p>
                                We Achieve high levels of customer satisfaction through high-quality
                                products and services.<br />
                                Maintain a customer satisfaction rating of over 100%.<br />
                                Resolve customer complaints as soon as possible.
                            </p>
                        </div>

                        <div
                            className="col-md-6 col-lg-4 py-vh-4 pb-0"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <span className="h5 fw-lighter">02.</span>
                            <h3 className="py-5 border-top border-dark">
                                Product Quality
                            </h3>
                            <p>
                                We Ensure that products meet or exceed quality standards and
                                specifications.<br />
                                Reduce the defect rate of manufactured products to less than 0%. Maintain
                                product compliance with industry standards and regulations.
                            </p>
                        </div>

                        <div
                            className="col-md-6 col-lg-4 py-vh-6 pb-0"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <span className="h5 fw-lighter">03.</span>
                            <h3 className="py-5 border-top border-dark">
                                Employee Training and Development
                            </h3>
                            <p>
                                We Enhance the skills and knowledge of employees to improve quality
                                outcomes.<br />
                                We Provide quality training to 100% of staff/workers annually.<br />
                                We Improve employee skills with a targeted reduction in errors or accidents.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="py-vh-4 bg-gray-100 w-100 overflow-hidden" id="aboutus">
                <div className="container">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <div className="row gx-5 d-flex">
                                <div className="col-md-11">
                                    <div
                                        className="shadow ratio ratio-16x9 rounded bg-cover bp-center align-self-end"
                                        data-aos="fade-right"
                                        style={{
                                            backgroundImage: "url(/img/about1.png)",
                                            "--bs-aspect-ratio": "50%",
                                        }}
                                    ></div>
                                </div>
                                <div className="col-md-5 offset-md-1">
                                    <div
                                        className="shadow ratio ratio-1x1 rounded bg-cover mt-5 bp-center float-end"
                                        data-aos="fade-up"
                                        style={{
                                            backgroundImage: "url(/img/about4.png)",
                                        }}
                                    ></div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="col-12 shadow ratio rounded bg-cover mt-5 bp-center"
                                        data-aos="fade-left"
                                        style={{
                                            backgroundImage: "url(/img/about3.png)",
                                            "--bs-aspect-ratio": "150%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h3
                                className="py-5 border-top border-dark"
                                data-aos="fade-left"
                            >
                                We did some interesting stuff in our field of work.
                            </h3>
                            <p data-aos="fade-left" data-aos-delay="200">
                                With a commitment to precision engineering, we craft durable components that meet the highest industry standards. Each product is a testament to our dedication to quality and reliability.
                            </p>
                            <p>
                                <Link
                                    to="/product/backrestmounting"
                                    className="link-fancy link-dark"
                                    data-aos="fade-left"
                                    data-aos-delay="400"
                                >
                                    View More
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
