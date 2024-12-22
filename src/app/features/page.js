"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <div
      className="max-w-xs bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="text-4xl text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl text-gray-800 font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Flowchart = () => {
  return (
    <div className="bg-black rounded-lg p-6 text-white overflow-auto max-h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">Feature Flow</h2>
      <img
        src="/flowchart.jpg"
        alt="Feature Flowchart"
        className="w-full rounded-lg"
      />
      <p className="mt-4 text-gray-300 text-sm">
        Explore the feature flow for better understanding of the apps structure.
      </p>
    </div>
  );
};

const AugmentedReality = () => {
  return (
    <div className="bg-black rounded-lg p-6 text-white overflow-auto max-h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">Augmented Reality</h2>
      <p className="text-gray-300 text-sm">
        Discover how augmented reality integrates seamlessly with our digital
        world.
      </p>
      <img
        src="/hilmiar.jpg"
        alt="Augmented Reality Preview"
        className="w-full rounded-lg mt-4"
      />
      <img
        src="/fatihar.jpg"
        alt="Augmented Reality Preview"
        className="w-full rounded-lg mt-4"
      />
    </div>
  );
};

const PlanetSimulation = () => {
  return (
    <div className="bg-black rounded-lg p-6 text-white overflow-auto max-h-[70vh]">
      <h2 className="text-2xl font-bold mb-4">Planet Simulation</h2>
      <p className="text-gray-300 text-sm">
        Experience an interactive 3D simulation of our solar system, complete
        with animations and data.
      </p>
      <img
        src="/museum.jpg"
        alt="Planet Simulation Museum"
        className="w-full rounded-lg mt-4"
      />
      <img
        src="/explore.jpg"
        alt="Planet Simulation Museum"
        className="w-full rounded-lg mt-4"
      />
    </div>
  );
};

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

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

        {selectedFeature === null ? (
          <div className="flex justify-center gap-6 flex-wrap">
            <FeatureCard
              icon="🚀"
              title="Planet Simulation"
              description="Experience 3D simulation of our solar system"
              onClick={() => setSelectedFeature("Planet Simulation")}
            />
            <FeatureCard
              icon="💡"
              title="Augmented Reality"
              description="Enjoy a clean integration between our reality and the digital world"
              onClick={() => setSelectedFeature("Augmented Reality")}
            />
            <FeatureCard
              icon="📊"
              title="Feature Flow"
              description="Explore the entire flow of features"
              onClick={() => setSelectedFeature("Flowchart")}
            />
          </div>
        ) : selectedFeature === "Flowchart" ? (
          <Flowchart />
        ) : selectedFeature === "Augmented Reality" ? (
          <AugmentedReality />
        ) : selectedFeature === "Planet Simulation" ? (
          <PlanetSimulation />
        ) : (
          <div>
            <button
              onClick={() => setSelectedFeature(null)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Back to Features
            </button>
          </div>
        )}

        {selectedFeature && (
          <button
            onClick={() => setSelectedFeature(null)}
            className="mt-8 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Back to Features
          </button>
        )}
      </div>
    </Navbar>
  );
}
