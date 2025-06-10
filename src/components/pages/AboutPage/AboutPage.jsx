import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import s from "./AboutPage.module.css";

function VideoPlayer({ src, isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log("playing");
      videoRef.current.play();
    } else {
      console.log("pause");
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      style={{ width: 200 + "px", display: "block", margin: "10px auto" }}
      ref={videoRef}
      src={src}
      loop
      playsInline
    />
  );
}

function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className={s.aboutPage}>
      <h4>About</h4>
      <div>
        <h5>useEffect()</h5>
        <button
          type="button"
          onClick={() => {
            setIsPlaying((prev) => !prev);
          }}
          style={{ padding: "10px" }}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <VideoPlayer
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          isPlaying={isPlaying}
        />
      </div>
    </section>
  );
}

export default AboutPage;
