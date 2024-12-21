'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PlanetModel from '@/components/models/Planet';

export default function ThreeViewer({ currentPlanet, onNext, onPrevious }) {
    return (
        <div className="w-full h-full relative">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <PlanetModel modelPath={currentPlanet.modelPath} />
                <OrbitControls />
            </Canvas>

            {/* Navigation Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
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
        </div>
    );
}
