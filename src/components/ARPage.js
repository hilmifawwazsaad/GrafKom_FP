// components/ARPage.js

'use client';

import React, { useEffect, useState } from 'react';

export default function ARPage() {
    // const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    //     setIsClient(true);

    //     const script1 = document.createElement('script');
    //     script1.src = 'https://aframe.io/releases/1.3.0/aframe.min.js';
    //     script1.async = true;
    //     document.body.appendChild(script1);

    //     const script2 = document.createElement('script');
    //     script2.src = 'https://raw.githack.com/AR-js-org/AR.js/dev/aframe/build/aframe-ar.js';
    //     script2.async = true;
    //     document.body.appendChild(script2);

    //     return () => {
    //         document.body.removeChild(script1);
    //         document.body.removeChild(script2);
    //     };
    // }, []);

    // if (!isClient) {
    //     return <p>Loading AR experience...</p>;
    // }

    return (
        <div className="overflow-hidden">
            <a-scene embedded arjs>
                <a-marker preset="hiro">
                    <a-entity
                        gltf-model="#venus"
                        scale="0.5 0.5 0.5"
                        position="0 0.5 0"
                    ></a-entity>
                    {/* <a-box position="0 0.5 0" material="color: blue;"></a-box> */}
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>
        </div>
    );
}
