'use client';

import React from "react";

const VideoBackground = ({ videoSrc, children }) => {
  return (
    <div className="relative w-full h-full">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VideoBackground;
