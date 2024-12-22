// pages/planets.js
'use client';

import React, { useState, useEffect } from "react";
import NavbarLogo from "@/components/NavbarLogo";
import { useRouter } from "next/navigation";

const planets = [
    { name: "Merkurius", image: "object/animation/merkurius.gif", details: "The smallest planet in our solar system.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/merkurius" },
    { name: "Venus", image: "object/animation/venus.gif", details: "The hottest planet in our solar system.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/venus" },
    { name: "Bumi", image: "object/animation/bumi.gif", details: "Our home planet.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/bumi" },
    { name: "Mars", image: "object/animation/mars.gif", details: "Known as the Red Planet.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/mars" },
    { name: "Jupiter", image: "object/animation/jupiter.gif", details: "The largest planet in our solar system.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/jupiter" },
    { name: "Saturnus", image: "object/animation/saturnus.gif", details: "Famous for its beautiful ring system.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/saturnus" },
    { name: "Uranus", image: "object/animation/uranus.gif", details: "An ice giant with a blue-green color.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/uranus" },
    { name: "Neptunus", image: "object/animation/neptunus.gif", details: "The farthest planet from the Sun.", path: "https://hilmifawwazsaad.github.io/GrafKom_ARG/src/arg/features/image-tracking/neptunus" },
];

export default function PlanetsPage() {
    const router = useRouter();
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <NavbarLogo>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-4xl font-bold text-center mb-8">Choose a Planet</h2>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
                    {planets.map((planet, index) => (
                        <a
                            key={index}
                            href={planet.path} // Mengarahkan ke URL path planet
                            target="_blank" // Membuka di tab baru untuk URL eksternal
                            rel="noopener noreferrer" // Keamanan tambahan
                            className={`block border rounded-lg p-4 text-center transition-transform transform hover:scale-105 ${selectedPlanet === planet.name
                                ? "border-gray-500 bg-gray-500 text-black"
                                : "border-gray-500"
                                }`}
                            onClick={() => setSelectedPlanet(planet.name)} // Hanya untuk mencatat planet yang dipilih
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
                        </a>
                    ))}
                </div>
            </div>

        </NavbarLogo>
    );
}
