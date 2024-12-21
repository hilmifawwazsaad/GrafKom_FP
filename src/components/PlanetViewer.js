'use client';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function PlanetViewer({ planetComponent }) {
    return (
        <div className="h-[70vh] w-full">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                style={{ background: '' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <group>
                    {planetComponent}
                </group>
                <OrbitControls enableZoom={true} />
            </Canvas>
        </div>
    );
}