import "@/app/globals.css";
import Head from "next/head";

export const metadata = {
    title: "AR Solar System",
    description: "---",
};

export default function MarkerLayout({ children }) {
    return (
        <html>
            <body style={{ margin: 0, overflow: 'hidden' }}>
                {children}
            </body>
        </html>
    );
}