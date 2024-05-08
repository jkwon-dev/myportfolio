import React from "react";
import ReactPlayer from "react-player";

export default function Mydemoair() {
  return (
    <div>
      <h2 className="text-3xl mx-2 my-6  font-bold">AirQuality App</h2>
      <div>
        <div className="flex inline-flex">
          {/* 비디오, 스크린샷*/}
          <div>
            <ReactPlayer
              url={"/videos/air-quality-video.mp4"}
              width="400px"
              height="600px"
              playing={false}
              controls={true}
            />
          </div>

          <div className="text-3xl ">
            <p>• Air Quality App </p>
            <p>• AirVisual API</p>
            <p>• Swift, SwiftUI </p>
            <p> 👈 Click! Live demo video</p>
          </div>
        </div>
      </div>
    </div>
  );
}
