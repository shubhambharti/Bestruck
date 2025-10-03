import { Helmet } from 'react-helmet';

export default function Seo({ title, description }) {
    // Access VITE_SITE_NAME once here
    const siteName = import.meta.env.VITE_SITE_NAME || "MF Engineers And Fabrications";

    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
        </Helmet>
    );
}