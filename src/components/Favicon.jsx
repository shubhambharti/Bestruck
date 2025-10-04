import { useEffect } from "react";

export default function Favicon() {
    useEffect(() => {
        const siteName = import.meta.env.VITE_SITE_NAME || "MF";
        const initials = siteName.substring(0, 2).toUpperCase();

        // Create a canvas-based favicon
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");

        // Background
        ctx.fillStyle = "#eae0d52c"; // theme color
        ctx.fillRect(0, 0, 64, 64);

        // Text
        ctx.font = "bold 36px sans-serif";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(initials, 32, 36);

        // Convert to favicon
        const link = document.querySelector("link[rel*='icon']") || document.createElement("link");
        link.type = "image/png";
        link.rel = "icon";
        link.href = canvas.toDataURL("image/png");
        document.head.appendChild(link);
    }, []);

    return null;
}
