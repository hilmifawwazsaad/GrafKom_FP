'use client';

import { useEffect, useState } from 'react';

export default function ARViewer({ currentPlanet, onNext, onPrevious }) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const loadARScripts = async () => {
            // Load AFRAME
            const aframeScript = document.createElement('script');
            aframeScript.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
            await new Promise((resolve) => {
                aframeScript.onload = resolve;
                document.body.appendChild(aframeScript);
            });

            // Load AR.js
            const arScript = document.createElement('script');
            arScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
            document.body.appendChild(arScript);

            setIsClient(true);
        };

        loadARScripts();

        return () => {
            // Cleanup scripts
            const scripts = document.querySelectorAll('script');
            scripts.forEach(script => {
                if (script.src.includes('aframe.min.js') || script.src.includes('aframe-ar.js')) {
                    script.remove();
                }
            });
        };
    }, []);

    if (!isClient) return <div>Loading AR...</div>;

    return (
        <>
            <a-scene
                embedded
                arjs="sourceType: webcam; debugUIEnabled: false;"
                renderer="logarithmicDepthBuffer: true;"
                vr-mode-ui="enabled: false"
            >
                <a-marker preset="hiro">
                    <a-entity
                        gltf-model={currentPlanet.modelPath}
                        scale="1 1 1"
                        rotation="0 0 0"
                        position="0 0 0"
                        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
                    ></a-entity>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>

            {/* Navigation Controls */}
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-50">
                <button
                    onClick={onPrevious}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg opacity-80"
                >
                    Previous
                </button>
                <button
                    onClick={onNext}
                    className="bg-gray-800 text-white px-4 py-2 rounded-lg opacity-80"
                >
                    Next
                </button>
            </div>
        </>
    );
}