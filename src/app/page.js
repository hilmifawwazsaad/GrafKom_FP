'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
    const router = useRouter();

    const handleExplore = () => {
        router.push('/explore');
    }

    const handleMarker = () => {
        router.push('/marker');
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <Navbar>
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Explore Your Solar System</h1>
                <div className="flex space-x-4">
                    <button
                        className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 mb-4 rounded-md text-lg transition-all"
                        onClick={handleExplore}
                    >
                        3D Views
                    </button>
                    <button
                        className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 mb-4 rounded-md text-lg transition-all"
                        onClick={handleMarker}
                    >
                        AR Views
                    </button>
                </div>
            </div>
        </Navbar>
    );
}