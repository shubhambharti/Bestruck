import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaPersonArrowUpFromLine } from "react-icons/fa6";

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const [isButtonVisible, setIsButtonVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsButtonVisible(false);
    }, [pathname]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsButtonVisible(true);
            } else {
                setIsButtonVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const handleScrollToTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <button
            className={`scroll-to-top btn ${isButtonVisible ? 'show' : ''}`}
            onClick={handleScrollToTopClick}
            aria-label="Scroll to top"
        >
            <FaPersonArrowUpFromLine />
        </button>
    );
}