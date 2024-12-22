'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const checkIfMobile = () => {
        return (
            /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            /iPad|iPhone|iPod/.test(navigator.platform) ||
            (window.innerWidth <= 768) ||
            ('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0 && /MacIntel/.test(navigator.platform))
        );
    };

    const handleExplore = () => {
        router.push('/explore');
    }

    const handleMarker = () => {
        router.push('/marker');
    }

    const handleTracking = () => {
        router.push('/tracking');
    }

    const handleUnderstand = () => {
        window.location.href = "https://google.com";
    }

    const handleCloseModal = () => {
        setShowModal(false);
        sessionStorage.setItem('hasSeenWelcomeModal', 'true');
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";

        const mobileCheck = checkIfMobile();
        setIsMobile(mobileCheck);

        if (!mobileCheck) {
            const hasSeenModal = sessionStorage.getItem('hasSeenWelcomeModal');
            setShowModal(!hasSeenModal); 
        }

        const handleResize = () => {
            const mobileCheck = checkIfMobile();
            setIsMobile(mobileCheck);
        };

        window.addEventListener('resize', handleResize);

        if (mobileCheck) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Mobile view
    if (isMobile) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                <div className="bg-gray-800 text-white rounded-lg p-6 max-w-md w-full">
                    <h2 className="text-xl font-bold mb-4">
                        Desktop Only Website
                    </h2>
                    <p className="text-gray-300 mb-6">
                        This website requires a desktop or laptop computer to function properly.
                        Mobile devices, including tablets, are not supported.
                    </p>
                    <button
                        onClick={handleUnderstand}
                        className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-2 px-4 rounded-md transition-all w-full"
                    >
                        I Understand
                    </button>
                </div>
            </div>
        );
    }

    // Desktop view
    return (
        <Navbar>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 text-white rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">
                            Welcome to Solar System Explorer
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Explore the wonders of our solar system in 3D and AR.
                            For the best experience, please ensure you have:
                            <br /><br />
                            • Use Dark Mode System (Required)<br />
                            • A stable internet connection<br />
                            • Adequate system resources for 3D rendering<br />
                            • A webcam for AR experiences<br />
                            • For now, the website is not responsive and still has many flaws🙏
                        </p>
                        <button
                            onClick={handleCloseModal}
                            className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-2 px-4 rounded-md transition-all w-full"
                        >
                            Continue to Site
                        </button>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Explore Your Solar System</h1>
                <div className="flex space-x-8">
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
                        AR - Marker
                    </button>
                    <button
                        className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 mb-4 rounded-md text-lg transition-all"
                        onClick={handleTracking}
                    >
                        AR - Tracking
                    </button>
                </div>
            </div>
        </Navbar>
    );
}