"use client";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

export default function Video() {
    const videoRef = useRef(null);
    const [isPlaying , setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      };

  return (
    <div className="video position-relative">
      <video
        ref={videoRef}
        loop
        playsInline
        src="/video.mp4"
        width={"100%"}
        className="rounded-2"
      ></video>

      {/* play and pause btn */}
      <div role="button" style={{
        position : "absolute" ,
        top : "50%" ,
        left : "50%" ,
        transform : "translate(-50% , -50%)" , 
        color : "#fff" ,
        fontSize : "20px" ,
        background : "#FFFFFF33" ,
        border : "4px solid #FFFFFF4D" ,
        borderRadius : "50%" ,
        height : "54px",
        width : "54px" ,
        display : "flex" ,
        alignItems : "center",
        justifyContent : "center"
      }} onClick={togglePlay}>
        {isPlaying ? <FontAwesomeIcon icon={faPause}/> : <FontAwesomeIcon icon={faPlay}/>}
      </div>
    </div>
  );
}
