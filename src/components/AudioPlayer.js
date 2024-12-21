'use client';

import React, { useEffect, useRef } from 'react';

const AudioPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <audio ref={audioRef} autoPlay loop>
            <source src="/audio/interstellar.mp3" type="audio/mp3" />
            Browser Anda tidak mendukung elemen audio.
        </audio>
    );
};

export default AudioPlayer;
