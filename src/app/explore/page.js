'use client';

import dynamic from "next/dynamic";

const ARPage = dynamic(() => import("../../components/ARPage"), { ssr: false });

export default function Explore() {
    return (
        <ARPage />

    );
}