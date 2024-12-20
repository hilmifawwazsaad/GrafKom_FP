'use client'

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

export default function Dashboard() {
    // const router = useRouter();

    // const handleExplore = () => {
    //     router.push('/explore');
    // }

    // useEffect(() => {
    //     document.body.style.overflow = "hidden";

    //     return () => {
    //         document.body.style.overflow = "";
    //     };
    // }, []);

    return (
        <Navbar>
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Explore Your Solar System</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md text-lg transition-all"
                    // onClick={handleExplore}
                >
                    Explore Now
                </button>
            </div>
        </Navbar> 
    );
}