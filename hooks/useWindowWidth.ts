'use client'
import { useState, useEffect } from 'react';

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    }, []);

    return windowWidth;
}