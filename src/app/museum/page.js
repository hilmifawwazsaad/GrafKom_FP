'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import AudioPlayer from '@/components/AudioPlayer';
import NavbarLogo from '@/components/NavbarLogo';
import dynamic from 'next/dynamic';

const PlanetViewer = dynamic(() => import('@/components/PlanetViewer'), {
    ssr: false,
});

export default function ExplorePage() {
    const MuseumIn = dynamic(() => import('@/components/object/MuseumIn'), { ssr: false });
    const MuseumOut = dynamic(() => import('@/components/object/MuseumOut'), { ssr: false });

    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

    const planets = [
        { name: 'Museum', Component: MuseumIn },
        { name: 'Museum', Component: MuseumOut },
    ];

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const handleNext = () => {
        setCurrentPlanetIndex((prev) => (prev + 1) % planets.length);
    };

    const handleBack = () => {
        setCurrentPlanetIndex((prev) => (prev - 1 + planets.length) % planets.length);
    };

    const toggleViewMode = () => {
        setViewMode(prev => prev === '3d' ? 'ar' : '3d');
    };

    const CurrentPlanet = planets[currentPlanetIndex].Component;

    return (
        <NavbarLogo>
            <div className="container mx-auto px-4 py-8">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                        {planets[currentPlanetIndex].name}
                    </h2>

                    <div className="mb-6">
                        <PlanetViewer planetComponent={<CurrentPlanet />} />
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button
                            className="text-gray-500 hover:text-gray-700 font-semibold py-2 px-4 transition-all"
                            onClick={handleBack}
                        >
                            &lt; Back
                        </button>
                        <button
                            className="text-gray-500 hover:text-gray-700 font-semibold py-2 px-4 transition-all"
                            onClick={handleNext}
                        >
                            Next &gt;
                        </button>
                    </div>
                </div>
            </div>
        </NavbarLogo>
    );
}