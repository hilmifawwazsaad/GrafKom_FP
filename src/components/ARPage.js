'use client';

import React, { useEffect } from 'react';

export default function ARPage() {
    useEffect(() => {
        const scene = document.querySelector('a-scene');
        if (scene) {
            scene.addEventListener('loaded', () => {
                scene.enterVR();
            });

            scene.addEventListener('exit-vr', () => {
                window.location.href = '/';
            });
        }
    }, []);

    return (
        <div className="overflow-hidden">
            <a-scene embedded arjs>
                <a-marker preset="hiro">;
                    <a-entity
                        gltf-model="/object/marker-based/venus.glb"
                        scale="0.5 0.5 0.5"
                        position="0 0.5 0"
                        rotation="0 45 0"
                        animation="property: rotation; to: 0 405 0; loop: true; dur: 10000"
                    ></a-entity>
                    {/* <a-box position="0 0.5 0" material="color: blue;"></a-box> */}
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
}
