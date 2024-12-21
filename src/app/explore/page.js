'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// import AudioPlayer from '@/components/AudioPlayer';
import NavbarLogo from '@/components/NavbarLogo';
import dynamic from 'next/dynamic';

const PlanetViewer = dynamic(() => import('@/components/PlanetViewer'), {
    ssr: false,
});
// const ARViewer = dynamic(() => import('@/components/ARViewer'), {
//     ssr: false,
// });


export default function ExplorePage() {
    const Merkurius = dynamic(() => import('@/components/object/Merkurius'), { ssr: false });
    const Venus = dynamic(() => import('@/components/object/Venus'), { ssr: false });
    const Bumi = dynamic(() => import('@/components/object/Bumi'), { ssr: false });
    const Mars = dynamic(() => import('@/components/object/Mars'), { ssr: false });
    const Jupiter = dynamic(() => import('@/components/object/Jupiter'), { ssr: false });
    const Saturnus = dynamic(() => import('@/components/object/Saturnus'), { ssr: false });
    const Uranus = dynamic(() => import('@/components/object/Uranus'), { ssr: false });
    const Neptunus = dynamic(() => import('@/components/object/Neptunus'), { ssr: false });

    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

    const planets = [
        { name: 'Merkurius', Component: Merkurius },
        { name: 'Venus', Component: Venus },
        { name: 'Bumi', Component: Bumi },
        { name: 'Mars', Component: Mars },
        { name: 'Jupiter', Component: Jupiter },
        { name: 'Saturnus', Component: Saturnus },
        { name: 'Uranus', Component: Uranus },
        { name: 'Neptunus', Component: Neptunus },
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

    const handleExplore = () => {
        router.push('../marker');
    }

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
                            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
                            onClick={handleBack}
                        >
                            Back
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
                            onClick={handleExplore}
                        >
                            Explore
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-all"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </NavbarLogo>
    );
}