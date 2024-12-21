'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the Scene component with no SSR
const Scene = dynamic(() => import('@components/Scene'), {
    ssr: false,
});

export default function ClientPlanetView({ planetComponent }) {
    return (
        <div className="h-[500px] w-full">
            <Scene>
                {planetComponent}
            </Scene>
        </div>
    );
}