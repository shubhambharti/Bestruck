import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const customerLogos = [
    { name: "Tata Toyo Radiator Ltd.", src: "/img/customer/customer1.png" },
    { name: "Sharda Industries", src: "/img/customer/customer2.png" },
    { name: "The West India Power Equuipment (P) Ltd.", src: "/img/customer/customer3.png" },
    { name: "Imperial Auto Industries Ltd.", src: "/img/customer/customer4.png" },
    { name: "Stallion Auto Parts Pvt Ltd.", src: "/img/customer/customer5.png" },
    { name: "Sunmax Auto Engineering Pvt. Ltd", src: "/img/customer/customer6.png" },
    { name: "Vijai Electricals Ltd.", src: "/img/customer/customer7.png" },
    { name: "Face Pro Electronic India", src: "/img/customer/customer8.png" },
    { name: "Grip Engineers Pvt. Ltd.", src: "/img/customer/customer9.png" },
    { name: "Jagjit Engineers Pvt. Ltd." }, // no src
];

export default function Customer() {
    const groupedSlides = [];
    for (let i = 0; i < customerLogos.length; i += 5) {
        groupedSlides.push(customerLogos.slice(i, i + 5));
    }

    return (
        <div className="customers-section py-4 theme-color">
            <div className="container-fluid">
                <h6 className="text-center text-muted mb-4">
                    Trusted by leading companies worldwide
                </h6>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    className="mySwiper"
                >
                    {groupedSlides.map((group, index) => (
                        <SwiperSlide key={index}>
                            <div className="logo-grid">
                                <div className="top-row">
                                    {group.slice(0, 3).map((logo, i) => (
                                        <div
                                            key={i}
                                            className="d-flex flex-column align-items-center logo-wrapper"
                                        >
                                            {logo.src ? (
                                                <img
                                                    src={logo.src}
                                                    alt={logo.name}
                                                    className="logo-img"
                                                />
                                            ) : (
                                                <div className="logo-placeholder">{logo.name}</div>
                                            )}
                                            <p className="logo-name">{logo.name}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="bottom-row">
                                    {group.slice(3).map((logo, i) => (
                                        <div
                                            key={i}
                                            className="d-flex flex-column align-items-center logo-wrapper"
                                        >
                                            {logo.src ? (
                                                <img
                                                    src={logo.src}
                                                    alt={logo.name}
                                                    className="logo-img"
                                                />
                                            ) : (
                                                <div className="logo-placeholder">{logo.name.split(" ").map(w => w[0]).slice(0, 2).join("")}</div>
                                            )}
                                            <p className="logo-name">{logo.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}
