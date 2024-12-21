"use client";

import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300">
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function Features() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <Navbar>
      <div className="container mx-auto text-center py-16">
        <h1 className="text-4xl font-bold mb-8">Features</h1>
        <div className="flex justify-center gap-6 flex-wrap">
          <FeatureCard
            icon="🚀"
            title="Fast Performance"
            description="Experience blazing-fast speed with our optimized features."
          />
          <FeatureCard
            icon="🔒"
            title="Secure"
            description="Your data is safe with our top-notch security protocols."
          />
          <FeatureCard
            icon="💡"
            title="Innovative Design"
            description="Enjoy a clean and modern design tailored for you."
          />
        </div>
      </div>
    </Navbar>
  );
}
