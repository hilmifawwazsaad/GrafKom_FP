// pages/planets.js
'use client';

import React, { useState } from "react";
import NavbarLogo from "@/components/NavbarLogo";
import { useRouter } from "next/navigation";

const planets = [
    { name: "Merkurius", image: "object/animation/merkurius.gif", details: "The smallest planet in our solar system.", path: "/marker/merkurius" },
    { name: "Venus", image: "object/animation/venus.gif", details: "The hottest planet in our solar system.", path: "/marker/venus" },
    { name: "Bumi", image: "object/animation/bumi.gif", details: "Our home planet.", path: "/marker/bumi" },
    { name: "Mars", image: "object/animation/mars.gif", details: "Known as the Red Planet.", path: "/marker/mars" },
    { name: "Jupiter", image: "object/animation/jupiter.gif", details: "The largest planet in our solar system.", path: "/marker/jupiter" },
    { name: "Saturnus", image: "object/animation/saturnus.gif", details: "Famous for its beautiful ring system.", path: "/marker/saturnus" },
    { name: "Uranus", image: "object/animation/uranus.gif", details: "An ice giant with a blue-green color.", path: "/marker/uranus" },
    { name: "Neptunus", image: "object/animation/neptunus.gif", details: "The farthest planet from the Sun.", path: "/marker/neptunus" },
];

export default function PlanetsPage() {
    const router = useRouter();
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    return (
        <NavbarLogo>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold text-center mb-8">Choose a Planet</h2>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
                    {planets.map((planet, index) => (
                        <button
                            key={index}
                            className={`border rounded-lg p-4 text-center transition-transform transform hover:scale-105 ${selectedPlanet === planet.name
                                ? "border-gray-500 bg-gray-500 text-black"
                                : "border-gray-500"
                                }`}
                            onClick={() => {
                                setSelectedPlanet(planet.name);
                                router.push(planet.path);
                            }}
                        >
                            <h2 className="text-xl font-semibold">{planet.name}</h2>
                            <img
                                src={planet.image}
                                alt={planet.name}
                                className="mt-2 mx-auto"
                                width={100}
                                height={100}
                            />
                            <p className="mt-4">
                                {planet.details}
                            </p>
                        </button>
                    ))}
                </div>

            </div>
        </NavbarLogo>
    );
}
