'use client';

import React, { Suspense } from 'react';
import PlanetModel from '../models/Planet';

export default function Venus() {
    return (
        <Suspense fallback={null}>
            <PlanetModel
                modelPath="/object/marker-based/jupiter.glb"
                scale={[0.39, 0.39, 0.39]}
                rotation={[0.4, -1, 0]}
                position={[0, 0, 0]}
                rotationSpeed={0.007}
            />
        </Suspense>
    );
}