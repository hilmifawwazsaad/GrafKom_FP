"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/BackgroundVideo";
import Image from "next/image";

export default function Dashboard() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [showModal3D, setShowModal3D] = useState(false);
  const [showModalAR, setShowModalAR] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const checkIfMobile = () => {
    return (
      /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      /iPad|iPhone|iPod/.test(navigator.platform) ||
      window.innerWidth <= 768 ||
      "ontouchstart" in window ||
      (navigator.maxTouchPoints > 0 && /MacIntel/.test(navigator.platform))
    );
  };

  const handleExplore = () => {
    router.push("/explore");
    setShowModal3D(false);
  };

  const handleMuseum = () => {
    router.push("/museum");
    setShowModal3D(false);
  };

  const handleMarker = () => {
    router.push("/marker");
    setShowModalAR(false);
  };

  const handleTracking = () => {
    router.push("/tracking");
    setShowModalAR(false);
  };

  const handleFilter = () => {
    window.location.href =
      "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/face-tracking/";
    setShowModalAR(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    sessionStorage.setItem("hasSeenWelcomeModal", "true");
  };

  const handleCloseModal3D = () => {
    setShowModal3D(false);
  };

  const handleCloseModalAR = () => {
    setShowModalAR(false);
  };

  useEffect(() => {
    const mobileCheck = checkIfMobile();
    setIsMobile(mobileCheck);

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    window.addEventListener("resize", handleResize);

    if (!mobileCheck) {
      const hasSeenModal = sessionStorage.getItem("hasSeenWelcomeModal");
      setShowModal(!hasSeenModal);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <h1>This site is desktop-only.</h1>
      </div>
    );
  }

  return (
    <Navbar>
      <VideoBackground videoSrc="video/stars.mp4" type="video/mp4" loop>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-800 text-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">
                Welcome to Solar System Explorer
              </h2>
              <p className="text-gray-300 mb-6">
                Explore the wonders of our solar system in 3D and AR. For the
                best experience, please ensure you have:
                <br />
                <br />• Use Dark Mode System (Required)
                <br />• A stable internet connection
                <br />• Adequate system resources for 3D rendering
                <br />• A webcam for AR experiences
                <br />• For now, the website is not responsive and still has
                many flaws🙏
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
              <h2 className="text-xl font-bold mb-4">Choose Your Experience</h2>
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

        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Explore Your Solar System
          </h1>
          <div className="flex space-x-8">
            <button
              className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 mb-4 rounded-md text-lg transition-all"
              onClick={() => setShowModal3D(true)}
            >
              3D Views
            </button>
            <button
              className="bg-[#FF5A5F] hover:bg-[#F6657E] text-white font-semibold py-3 px-6 mb-4 rounded-md text-lg transition-all"
              onClick={() => setShowModalAR(true)}
            >
              AR Views
            </button>
          </div>
        </div>
      </VideoBackground>
    </Navbar>
  );
}
