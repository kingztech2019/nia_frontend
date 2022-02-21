import React, { useState, useEffect, Fragment, useRef } from "react";
import NavBar from "./NavBar";

import { Camera } from "react-cam";
export default function CameraDetails() {
  const videoRef = useRef(null);
  const phoneRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);

  const [image, setImage] = useState();
  // function handleTakePhoto(dataUri) {
  //   // Do stuff with the photo...
  //   console.log(dataUri);
  //   console.log("takePhoto");
  // }

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 500,
          height: 500,
        },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);
    let video = videoRef.current;
    let photo = phoneRef.current;
    photo.width = width;
    photo.height = height;
    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    var imageData = new Image();
    imageData.src = photo.toDataURL();
    setHasPhoto(true);
    console.log(imageData.src);
    setImage(imageData.src);
  };

  //console.log(decode);

  useEffect(() => {
    getVideo();
  }, [videoRef]);
  console.log(image);
  return (
    <NavBar>
      <div className="lg:px-40">
        <div className="border border-gray-100  ">
          <video className="w-96 h-64" ref={videoRef}></video>
        </div>
        <div className="lg:pl-20">
          <div className="pt-3">
            <div>Point 1</div>
            <button
              onClick={takePhoto}
              className="w-full lg:w-1/3 bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Click to take a picture
            </button>
          </div>
          <div className="pt-3">
            <div>Point 2</div>
            <button
              onClick={takePhoto}
              className="w-full lg:w-1/3 bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Click to take a picture
            </button>
          </div>
          <div className="pt-3">
            <div>Point 3</div>
            <button
              onClick={takePhoto}
              className="w-full lg:w-1/3 bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Click to take a picture
            </button>
          </div>
          <div className="pt-3">
            <div>Point 4</div>
            <button
              onClick={takePhoto}
              className="w-full lg:w-1/3 bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Click to take a picture
            </button>
          </div>
        </div>

        <canvas className="hidden" ref={phoneRef}></canvas>

        <img src={image} />

        {/* <button >SNAP</button>
        <div>
          <canvas ref={phoneRef}></canvas>
          <button>Close</button>
        </div> */}
      </div>
    </NavBar>
  );
}
