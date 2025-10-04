import { Link } from "react-router-dom";

import Seo from "../components/Seo"

export default function ErrorPage() {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center min-vh-100 mt-5">
            <Seo
                title="Page Not Found"
                description={`The page you are looking for on ${import.meta.env.VITE_SITE_NAME || " MF Engineering And Fabrication"}'s could not be found.`}
            />
            <main className="text-start">
                <h1>404</h1>
                <h1 className="display-1 fw-bold">Uuuups, something is broken...</h1>
                <p className="lead">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link to="/" className="link-fancy d-inline-flex align-items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-left me-2"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 
                 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 
                 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 
                 15 8z"
                        />
                    </svg>
                    Go back to frontpage
                </Link>
            </main>
        </div>
    );
}
