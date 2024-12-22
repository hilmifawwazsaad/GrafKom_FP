"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import VideoBackground from "@/components/BackgroundVideo";

export default function Dashboard() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
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
  };

  const handleMarker = () => {
    router.push("/marker");
  };

  const handleTracking = () => {
    router.push("/tracking");
  };

  useEffect(() => {
    const mobileCheck = checkIfMobile();
    setIsMobile(mobileCheck);

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    window.addEventListener("resize", handleResize);

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
      <VideoBackground videoSrc="/video/stars.mp4">
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Explore Your Solar System
          </h1>
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
      </VideoBackground>
    </Navbar>
  );
}
