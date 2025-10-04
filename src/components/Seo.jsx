

export default function Seo({ title, description }) {
    const siteName = import.meta.env.VITE_SITE_NAME || "MF Engineering And Fabrication";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;

    return (
        <>
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
        </>
    );
}