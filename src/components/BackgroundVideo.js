'use client'

import React from "react";

export default function BackgroundVideo() {
    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute mt-0 w-full h-full z-[-20] object-cover"
        >
            <source src="/video/stars.mp4" type="video/mp4" />
        </video>
    );
}
