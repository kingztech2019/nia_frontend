import React, { useState, useEffect, Fragment, useRef } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import "./Camera.css";
import SuccessPage from "./SuccessPage";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function CameraDetails() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const phoneRef = useRef(null);

  const [hasPhoto, setHasPhoto] = useState(false);
  const [idCode, setIdCode] = useState();
  const [image, setImage] = useState({
    firstimage: "",
    secondimage: "",
    thirdimage: "",
    fourthimage: "",
  });
  const [status, setStatus] = useState();
  const [active, setActive] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
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
          facingMode: {
            exact: "environment",
          },
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

  const takePhotoOne = () => {
    setDisabled(false);
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
    var imageString = imageData.src.split("base64,")[1];
    setHasPhoto(true);
    setImage({ ...image, firstimage: imageString });
  };
  const takePhotoTwo = () => {
    setDisabled(false);
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
    var imageString = imageData.src.split("base64,")[1];
    setHasPhoto(true);
    setImage({ ...image, secondimage: imageString });
  };

  const takePhotoThree = () => {
    setDisabled(false);
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
    var imageString = imageData.src.split("base64,")[1];
    setHasPhoto(true);
    setImage({ ...image, thirdimage: imageString });
  };

  const takePhotoFour = () => {
    setDisabled(false);
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
    var imageString = imageData.src.split("base64,")[1];
    setHasPhoto(true);
    setImage({ ...image, fourthimage: imageString });
  };

  //console.log(decode);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("id");
    if (code) {
      setIdCode(code);
    }
  }, []);
  const postImages = () => {
    setLoading(true);
    const payload = {
      firstimage: image.firstimage,
      secondimage: image.secondimage,
      thirdimage: image.thirdimage,
      fourthimage: image.fourthimage,
    };
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/public/uploadimage?id=${idCode}`,
        {
          ...payload,
        }
      )
      .then(function (response) {
        toast.success("Images uploaded successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        navigate("/success");
      })

      .catch(function (error) {
        toast.success(error.response?.data?.message, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        console.log(error);
      });
  };
  const handleEnable = () => {
    setActive(active + 1);
    setDisabled(true);
  };

  const handleBack = () => {
    setActive(active - 1);
    setDisabled(false);
  };
  return (
    <>
      <NavBar>
        {loading && (
          <div id="overlay">
            <div className="text-center font-semibold text-lg" id="text">
              Processing Images
              <div className="text-center">Please wait...</div>
            </div>
          </div>
        )}
        <div className="lg:px- max-w-screen-sm">
          <ToastContainer
            position="bottom-right"
            autoClose={7000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="text-center">
            <video
              playsInline={true}
              className="w-96 h-64"
              ref={videoRef}
            ></video>
          </div>
          <div className="lg:pl-20">
            {active == 0 && (
              <div className="pt-3 text-center">
                <div className="text-base capitalize">front view</div>
                <button
                  onClick={takePhotoOne}
                  className="lg:w-1/3 bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Click to take a picture
                </button>
              </div>
            )}
            {active == 1 && (
              <div className="pt-3 text-center">
                <div className="text-base capitalize">side view</div>
                <button
                  onClick={takePhotoTwo}
                  className="lg:w-1/3  bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 -px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Click to take a picture
                </button>
              </div>
            )}
            {active == 2 && (
              <div className="pt-3 text-center">
                <div className="text-base capitalize">rear view</div>
                <button
                  onClick={takePhotoThree}
                  className="lg:w-1/3 bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 -px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Click to take a picture
                </button>
              </div>
            )}
            {active == 3 && (
              <div className="pt-3 text-center">
                <div className="text-base capitalize">vin view</div>
                <button
                  onClick={takePhotoFour}
                  className="lg:w-1/3 bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-2 -px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Click to take a picture
                </button>
              </div>
            )}
          </div>

          <canvas className="hidden" ref={phoneRef}></canvas>
          <div className="pt-3  pb-7">
            {active == 0 && image.firstimage !== "" && (
              <div>
                <img
                  className="h-60"
                  src={`data:image/png;base64,${image.firstimage}`}
                />
              </div>
            )}
            {active == 1 && image.secondimage !== "" && (
              <div>
                <img
                  className="h-60 "
                  src={`data:image/png;base64,${image.secondimage}`}
                />
              </div>
            )}
            {active == 2 && image.thirdimage !== "" && (
              <div>
                <img
                  className="h-60 "
                  src={`data:image/png;base64,${image.thirdimage}`}
                />
              </div>
            )}
            {active == 3 && image.fourthimage !== "" && (
              <div>
                <img
                  className="h-60 "
                  src={`data:image/png;base64,${image.fourthimage}`}
                />
              </div>
            )}

            <div className="flex justify-between pt-6">
              <div>
                {active !== 0 && (
                  <button
                    className="text-indigo-700 text-xl font-bold"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
              </div>

              <div>
                {active === 3 ? (
                  <button
                    className="text-indigo-700 text-xl font-bold"
                    onClick={postImages}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    className="text-indigo-700 text-xl font-bold"
                    disabled={disabled}
                    onClick={handleEnable}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* <button >SNAP</button>
        <div>
          <canvas ref={phoneRef}></canvas>
          <button>Close</button>
        </div> */}
        </div>
      </NavBar>
    </>
  );
}
