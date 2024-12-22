"use client";

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import VideoBackground from "@/components/BackgroundVideo";

export default function Features() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Navbar>
      <VideoBackground videoSrc="video/stars.mp4" type="video/mp4" loop>
        <div>
          <h1>Features</h1>
        </div>
      </VideoBackground>
    </Navbar>
  );
}
