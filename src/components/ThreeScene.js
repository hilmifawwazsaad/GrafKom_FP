'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import "@/app/globals.css";

export default function ThreeScene({ children }) {
    return (
        <div className="h-[70vh] w-full">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                style={{ background: '#171717' }}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    {children}
                    <OrbitControls enableZoom={true} />
                </Suspense>
            </Canvas>
        </div>
    );
}