'use client'

import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';

function ThreeDModelViewer ()  {
  return (
    <div className='h-screen bg-white'>

    <Canvas>
      <Box />
    </Canvas>
    </div>
  )
};

export default ThreeDModelViewer;
