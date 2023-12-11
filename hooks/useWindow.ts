'use client'
import { useState, useEffect } from 'react';

export default function useWindow() {
    const [windowSize, setWindowSize] = useState({width: 0, height: 0});

    useEffect(() => {
        setWindowSize({width: window.innerWidth, height: window.innerHeight});
    }, [window.innerHeight, window.innerWidth]);

    return windowSize;
}