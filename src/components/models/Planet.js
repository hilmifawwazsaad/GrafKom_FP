// components/models/Planet.js
'use client';

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PlanetModel = React.memo(function PlanetModel({
    modelPath,
    scale = [1, 1, 1],
    rotation = [0, 0, 0],
    position = [0, 0, 0],
    rotationSpeed = 0.007,
}) {
    const groupRef = useRef();
    const { scene } = useGLTF(modelPath);
    
    // Clone the scene to avoid mutations
    const clonedScene = React.useMemo(() => {
        if (!scene) return null;
        return scene.clone();
    }, [scene]);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += rotationSpeed;
        }
    });

    // Preload the model
    useGLTF.preload(modelPath);

    if (!clonedScene) {
        return null;
    }

    return (
        <group
            ref={groupRef}
            scale={scale}
            rotation={rotation}
            position={position}
        >
            <primitive object={clonedScene} />
        </group>
    );
});

export default PlanetModel;