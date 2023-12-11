"use client";
import { useState, useEffect } from "react";
import VideoPlayer from "@/components/Video";
import './video.css'

type VideoHeroProps = {
  src: string;
};

export default function VideoHero({ src }: VideoHeroProps) {
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [options, setOptions] = useState<any>();

  useEffect(() => {
    // Create a temporary video element
    const tempVideo = document.createElement("video");

    // Set the video source
    tempVideo.src = src;

    // Event listener for when video metadata is loaded
    const onMetadataLoaded = () => {
      setVideoDimensions({
        width: tempVideo.videoWidth,
        height: tempVideo.videoHeight,
      });
      console.log(tempVideo.videoWidth, tempVideo.videoHeight);
    };
    console.log(tempVideo.videoWidth, tempVideo.videoHeight);

    tempVideo.addEventListener("loadedmetadata", onMetadataLoaded);

    // Clean-up function
    return () => {
      tempVideo.removeEventListener("loadedmetadata", onMetadataLoaded);
    };
  }, [src]);

  useEffect(() => {
    // Ensure dimensions are set
    if (videoDimensions.width && videoDimensions.height) {
      setOptions({
        sources: [
          {
            src,
            type: "video/mp4",
          },
        ],
        ...videoDimensions,
        fluid: true,
        autoplay: true,
        controls: true,
        muted: true,
        controlBar: {
          volumePanel: false, // Disable volume control
          fullscreenToggle: false,
          pictureInPictureToggle: false,
          progressControl: false,
          currentTimeDisplay: false, // Disable the current time display
          durationDisplay: false, // Disable the duration display
          remainingTimeDisplay: false,
        },
      });
    }
  }, [videoDimensions, src]);

  const aspectRatio = videoDimensions.height/videoDimensions.width 
  return (
    <div
      className="rounded-3xl overflow-hidden max-w-full max-h-full min-w-[300px]"
      // style={{ height: videoDimensions.height, width: videoDimensions.width }}
      style={{aspectRatio}}
    >
      {options ? <VideoPlayer options={options} /> : <></>}
    </div>
  );
}
