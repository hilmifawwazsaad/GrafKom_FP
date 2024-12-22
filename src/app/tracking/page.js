'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function TrackingPage() {
    const [isClient, setIsClient] = useState(false);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);
    const router = useRouter();

    useEffect(() => {
        let mounted = true;

        // Check if scripts are already loaded
        const isScriptLoaded = (srcHint) => {
            return document.querySelector(`script[src*="${srcHint}"]`) !== null;
        };

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

        // Script loading function with protection against duplicate loading
        const loadARScripts = async () => {
            if (isScriptLoaded('aframe.min.js') && isScriptLoaded('aframe-ar-nft.js')) {
                console.log('Scripts already loaded');
                setScriptsLoaded(true);
                return;
            }

            try {
                // Load AFRAME if not already loaded
                if (!isScriptLoaded('aframe.min.js')) {
                    const aframeScript = document.createElement('script');
                    aframeScript.src = 'https://aframe.io/releases/1.4.0/aframe.min.js';
                    await new Promise((resolve, reject) => {
                        aframeScript.onload = resolve;
                        aframeScript.onerror = reject;
                        document.head.appendChild(aframeScript);
                    });
                }

                // Wait a bit to ensure A-Frame is properly initialized
                await new Promise(resolve => setTimeout(resolve, 100));

                // Load AR.js if not already loaded
                if (!isScriptLoaded('aframe-ar-nft.js')) {
                    const arScript = document.createElement('script');
                    arScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js';
                    await new Promise((resolve, reject) => {
                        arScript.onload = resolve;
                        arScript.onerror = reject;
                        document.head.appendChild(arScript);
                    });
                }

                if (mounted) {
                    setScriptsLoaded(true);
                }
            } catch (error) {
                console.error('Error loading scripts:', error);
            }
        };

        // Execute initialization
        const init = async () => {
            await requestCamera();
            await loadARScripts();
            if (mounted) {
                setIsClient(true);
            }
        };

        init();

        // Cleanup function
        return () => {
            mounted = false;
            // We don't remove scripts anymore to prevent re-registration issues
            // Instead, we'll reuse them if they're already loaded
        };
    }, []); // Empty dependency array

    if (!isClient || !scriptsLoaded) {
        return <div className="flex items-center justify-center h-screen">Loading AR Experience...</div>;
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0" />
            </Head>
            <div className="ar-container">
                <div className="arjs-loader">
                    <div>Loading, please wait...</div>
                </div>
                <style jsx global>{`
                    body {
                        margin: 0;
                        padding: 0;
                        width: 100vw;
                        height: 100vh;
                        overflow: hidden;
                    }
                    .ar-container {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
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
                    }
                    .arjs-loader div {
                        text-align: center;
                        font-size: 1.25em;
                        color: white;
                    }
                    .a-canvas {
                        width: 100% !important;
                        height: 100% !important;
                        position: absolute !important;
                        top: 0 !important;
                        left: 0 !important;
                    }
                `}</style>
                {scriptsLoaded && (
                    <a-scene
                        vr-mode-ui="enabled: false;"
                        renderer="logarithmicDepthBuffer: true; precision: medium;"
                        embedded
                        arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
                        device-orientation-permission-ui="enabled: false"
                    >
                        <a-nft
                            type="nft"
                            url="/object/nft/venus/venus"
                            smooth="true"
                            smoothCount="10"
                            smoothTolerance="0.01"
                            smoothThreshold="5"
                        >
                            <a-entity
                                gltf-model="/object/marker-based/venus.glb"
                                scale="1 1 1"
                                position="0 0 0"
                            >
                            </a-entity>
                        </a-nft>
                        <a-entity camera></a-entity>
                    </a-scene>
                )}
            </div>
        </>
    );
}