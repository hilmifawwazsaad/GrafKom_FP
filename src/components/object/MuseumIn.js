'use client';

import React, { Suspense } from 'react';
import PlanetModel from '../models/Planet';

export default function Venus() {
    return (
        <Suspense fallback={null}>
            <PlanetModel
                modelPath="/object/marker-based/4in.glb"
                scale={[0.5, 0.5, 0.5]}
                rotation={[0.4, -1, 0]}
                position={[0, 0, -6.5]}
                rotationSpeed={0.007}
            />
        </Suspense>
    );
}