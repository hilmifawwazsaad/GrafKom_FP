'use client';

import React, { Suspense } from 'react';
import PlanetModel from '../models/Planet';

export default function Venus() {
    return (
        <Suspense fallback={null}>
            <PlanetModel
                modelPath="/object/marker-based/venus.glb"
                scale={[1.4, 1.4, 1.4]}
                rotation={[0.4, -1, 0]}
                position={[0, 0, 0]}
                rotationSpeed={0.007}
            />
        </Suspense>
    );
}