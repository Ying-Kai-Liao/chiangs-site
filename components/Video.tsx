"use client";

import React, { useState, useRef, useEffect } from "react";
import videojs, { VideoJsPlayerOptions } from "video.js";

// Import video.js styles
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  src?: string;
  options: VideoJsPlayerOptions;
}

const initialOptions: VideoJsPlayerOptions = {
  controls: true,
  fluid: true,
  controlBar: {
    volumePanel: {
      inline: false,
    },
  },
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoNode = useRef<HTMLVideoElement>(null);
  const player = useRef<videojs.Player | null>(null);

  useEffect(() => {
    if (videoNode.current) {
      player.current = videojs(videoNode.current, {
        ...initialOptions,
        ...options,
      }).ready(function () {
        console.log("Ready");
        console.log(player)
      });

    }

    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js rounded-xl" />;
};

export default VideoPlayer;
