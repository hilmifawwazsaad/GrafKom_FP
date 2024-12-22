'use client'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Dashboard() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const [showModal3D, setShowModal3D] = useState(false);
    const [showModalAR, setShowModalAR] = useState(false);
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

    const handle3d = () => {
        setShowModal3D(true);
    }

    const handleAR = () => {
        setShowModalAR(true);
    }

    const handleExplore = () => {
        router.push('/explore');
        setShowModal3D(false);
    }

    const handleMuseum = () => {
        router.push('/museum');
        setShowModal3D(false);
    }

    const handleMarker = () => {
        router.push('/marker');
        setShowModalAR(false);
    }

    const handleTracking = () => {
        router.push('/tracking');
        setShowModalAR(false);
    }

    const handleFilter = () => {
        window.location.href = "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/face-tracking/";
        setShowModalAR(false);
    }

    const handleUnderstand = () => {
        window.location.href = "https://google.com";
    }

    const handleCloseModal = () => {
        setShowModal(false);
        sessionStorage.setItem('hasSeenWelcomeModal', 'true');
    }

    const handleCloseModal3D = () => {
        setShowModal3D(false);
    }

    const handleCloseModalAR = () => {
        setShowModalAR(false);
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

            {showModal3D && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 text-white rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">
                            Choose Your Experience
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Select how you would like to explore our solar system:
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={handleExplore}
                                className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 rounded-md text-lg transition-all w-full"
                            >
                                Explore Planets
                            </button>
                            <button
                                onClick={handleMuseum}
                                className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 rounded-md text-lg transition-all w-full"
                            >
                                Visit Museum
                            </button>
                            <button
                                onClick={handleCloseModal3D}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-all w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showModalAR && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <div className="bg-gray-800 text-white rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">
                            Choose Your AR Experience
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Select how you would like to experience augmented reality:
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={handleMarker}
                                className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 rounded-md text-lg transition-all w-full"
                            >
                                Marker Based AR
                            </button>
                            <button
                                onClick={handleTracking}
                                className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 rounded-md text-lg transition-all w-full"
                            >
                                Image Tracking AR
                            </button>
                            <button
                                onClick={handleFilter}
                                className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 rounded-md text-lg transition-all w-full"
                            >
                                Face Filter AR
                            </button>
                            <button
                                onClick={handleCloseModalAR}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-all w-full"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col items-center justify-center min-h-screen text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Explore Your Solar System</h1>
                <div className="text-center mb-8">
                    <div className="flex space-x-8 mb-8">
                        <button
                            className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 mb-4 rounded-md text-lg transition-all"
                            onClick={handle3d}
                        >
                            3D Views
                        </button>
                        <button
                            className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 mb-4 rounded-md text-lg transition-all"
                            onClick={handleAR}
                        >
                            AR Views
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 py-6">
                <div className="flex justify-center gap-x-28">
                    <Image
                        src="/logo/arjs.png"
                        alt="AR.js"
                        width={50}
                        height={5}
                        className="object-contain"
                    />
                    <Image
                        src="/logo/aframe.png"
                        alt="A-Frame"
                        width={55}
                        height={5}
                        className="object-contain"
                    />
                    <Image
                        src="/logo/threejs.png"
                        alt="Three.js"
                        width={115}
                        height={5}
                        className="object-contain"
                    />
                    <Image
                        src="/logo/mindar.png"
                        alt="MindAR"
                        width={55}
                        height={5}
                        className="object-contain"
                    />
                    <Image
                        src="/logo/blender.png"
                        alt="Blender"
                        width={125}
                        height={5}
                        className="object-contain"
                    />
                    <Image
                        src="/logo/nextjs.png"
                        alt="Next.js"
                        width={105}
                        height={5}
                        className="object-contain"
                    />
                </div>
            </div>
            </div>
        </Navbar>
    );
}