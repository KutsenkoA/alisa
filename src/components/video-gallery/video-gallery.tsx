"use client";
import { useRef, useState } from "react";
import style from "./video-gallery.module.css";

export function VideoGallery(props: {
  background: string;
  videoSources: string[];
}) {
  const videoRef = useRef<HTMLVideoElement>();
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const setPreviousVideo = () => {
    setActiveVideoIndex(
      (activeVideoIndex - 1 + props.videoSources.length) %
        props.videoSources.length,
    );
    videoRef.current.load();
  };

  const setNextVideo = () => {
    setActiveVideoIndex((activeVideoIndex + 1) % props.videoSources.length);
    videoRef.current.load();
  };

  return (
    <div
      className={style.backgroundContainer}
      style={{ backgroundImage: `url(${props.background})` }}
    >
      <div className={style.videoContainer}>
        <video muted autoPlay loop className={style.video} ref={videoRef}>
          <source src={props.videoSources[activeVideoIndex]} />
        </video>

        <div className={style.arrowButtons}>
          <button onClick={setPreviousVideo}>&#10229;</button>
          <button onClick={setNextVideo}>&#10230;</button>
        </div>
      </div>
    </div>
  );
}
