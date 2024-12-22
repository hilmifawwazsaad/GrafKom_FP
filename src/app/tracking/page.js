'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function TrackingPage() {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Camera request function
        const requestCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                stream.getTracks().forEach(track => track.stop());
            } catch (err) {
                console.error('Camera error:', err);
                alert('Please enable camera access to use AR features');
            }
        };

        // Script loading function
        const loadARScripts = async () => {
            // Load AFRAME
            const aframeScript = document.createElement('script');
            aframeScript.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
            await new Promise((resolve) => {
                aframeScript.onload = resolve;
                document.body.appendChild(aframeScript);
            });

            // Load AR.js with NFT support
            const arScript = document.createElement('script');
            arScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js';
            await new Promise((resolve) => {
                arScript.onload = resolve;
                document.body.appendChild(arScript);
            });

            setIsClient(true);
        };

        // Execute both functions
        const init = async () => {
            await requestCamera();
            await loadARScripts();
        };

        init();

        // Cleanup function
        return () => {
            const scripts = document.querySelectorAll('script');
            scripts.forEach(script => {
                if (script.src.includes('aframe.min.js') || script.src.includes('aframe-ar-nft.js')) {
                    script.remove();
                }
            });
        };
    }, []); // Empty dependency array

    if (!isClient) {
        return <div className="flex items-center justify-center h-screen">Loading AR Experience...</div>;
    }

    return (
        <div>
            <div className="arjs-loader">
                <div>Loading, please wait...</div>
            </div>
            <style jsx>{`
                .arjs-loader {
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: rgba(0, 0, 0, 0.8);
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: white;
                    font-size: 1.25em;
                }
                .arjs-loader div {
                    text-align: center;
                    font-size: 1.25em;
                    color: white;
            }
            `}</style>
            <a-scene
                vr-mode-ui='enabled: false;'
                renderer="logarithmicDepthBuffer: true; precision: medium;"
                device-orientation-permission-ui="enabled: false"
                embedded
                arjs='sourceType: webcam; debugUIEnabled: true;'
            >
                <a-nft
                    type='nft'
                    url='/object/nft/venus/venus'
                    smooth='true'
                    smoothCount='10'
                    smoothTolerance='0.01'
                    smoothThreshold='5'
                >
                    <a-entity
                        gltf-model='/object/marker-based/venus.glb'
                        scale="1 1 1"
                        position="0 0 0"
                    >
                    </a-entity>
                </a-nft>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
}