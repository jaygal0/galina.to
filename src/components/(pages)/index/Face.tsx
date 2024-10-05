"use client";

import React, { useEffect, useState } from "react";

const Face = () => {
  const [background, setBackground] = useState(false);
  const [skin, setSkin] = useState(false);
  const [facialFeatures, setFacialFeatures] = useState(false);
  const [tshirt, setTshirt] = useState(false);
  const [hair, setHair] = useState(false);
  const [nose, setNose] = useState(false);
  const [eyes, setEyes] = useState(false);
  const [smile, setSmile] = useState(false);
  const [beard, setBeard] = useState(false);
  const [mustache, setMustache] = useState(false);

  useEffect(() => {
    const backgroundTimer = setTimeout(() => {
      setBackground(true);
    }, 300);
    const skinTimer = setTimeout(() => {
      setSkin(true);
    }, 1500);
    const noseTimer = setTimeout(() => {
      setNose(true);
    }, 1800);
    const tshirtTimer = setTimeout(() => {
      setTshirt(true);
    }, 2000);
    const facialFeaturesTimer = setTimeout(() => {
      setFacialFeatures(true);
    }, 2400);
    const eyesTimer = setTimeout(() => {
      setEyes(true);
    }, 2600);
    const smileTimer = setTimeout(() => {
      setSmile(true);
    }, 2700);
    const hairTimer = setTimeout(() => {
      setHair(true);
    }, 2800);
    const beardTimer = setTimeout(() => {
      setBeard(true);
    }, 2900);
    const mustacheTimer = setTimeout(() => {
      setMustache(true);
    }, 2900);

    // Cleanup function to clear the timeouts when the component unmounts
    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(skinTimer);
      clearTimeout(facialFeaturesTimer);
      clearTimeout(tshirtTimer);
      clearTimeout(hairTimer);
      clearTimeout(noseTimer);
      clearTimeout(eyesTimer);
      clearTimeout(smileTimer);
      clearTimeout(beardTimer);
      clearTimeout(mustacheTimer);
    };
  }, []);

  return (
    <svg
      xmlns="http://www.w4.org/2000/svg"
      viewBox="0 0 265.06 279.34"
      className="w-1/3 overflow-visible"
    >
      <style jsx>
        {`
          .cls-1 {
            fill: #3a897a;
          }
          .cls-2 {
            fill: #fff;
          }
          .cls-3 {
            fill: #e5e5e5;
          }
          .cls-4 {
            fill: #c58569;
          }
          .cls-5 {
            fill: #894c37;
            opacity: 0.36;
            isolation: isolate;
          }
          .cls-6,
          .cls-7 {
            fill: none;
          }
          .cls-6,
          .cls-7,
          .cls-9 {
            stroke: #000;
            stroke-linecap: round;
            stroke-linejoin: round;
          }
          .cls-6 {
            stroke-width: 0.58px;
          }
          .cls-7 {
            stroke-width: 0.77px;
          }
          .cls-8 {
            fill: #fcfcfc;
          }
          .cls-9 {
            stroke-width: 1.09px;
          }
        `}
      </style>

      {/* Background */}
      <g
        id="background"
        className={`origin-center transform ${background ? "animate-bounceScaleLg" : "scale-0 "}`}
      >
        <g>
          <circle
            className={"cls-1"}
            cx="144"
            cy="144"
            r="129.53"
            transform="translate(-32.68 259.02) rotate(-80.78)"
          />
          <path
            className={"cls-2"}
            d="M144,17.47a126.53,126.53,0,0,1,89.47,216A126.53,126.53,0,1,1,54.53,54.53,125.69,125.69,0,0,1,144,17.47m0-6A132.53,132.53,0,1,0,276.53,144,132.52,132.52,0,0,0,144,11.47Z"
            transform="translate(-11.47 -4.06)"
          />
        </g>
      </g>

      {/* T-Shirt */}
      <g
        id="tshirt"
        className={`origin-bottom transform ${tshirt ? "animate-bounceScaleLg" : "scale-0"}`}
      >
        <path
          className={"cls-2"}
          d="M263.7,226.48A137,137,0,0,0,237,218.24c-16.35-3.08-28.07-8-36.47-13.39l-.65-.42c-9.71-6.41-14.86-13.51-17.6-19.17-.53-1.09-1-2.13-1.33-3.1a25.37,25.37,0,0,1-1.76-7.52v-18a55,55,0,0,0-22.55-10.7c-1-.22-2-.4-3.06-.56a56.37,56.37,0,0,0-8.7-.68,55,55,0,0,0-34.55,12.13v17.86s-.38,16.25-20.46,29.64l-.65.43C80.78,210.18,69,215.14,52.5,218.25a138.94,138.94,0,0,0-28.2,8.86A154.56,154.56,0,0,0,143.53,283.4H144A154.53,154.53,0,0,0,263.7,226.48Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* T-Shirt Shadow */}
      <g
        id="tshirt-shadow"
        className={`origin-center transform ${tshirt ? "animate-bounceScaleSm" : "scale-0"}`}
      >
        <path
          className={"cls-3"}
          d="M200.51,204.85c-3.1,31.31-26.83,55.65-55.65,55.65s-52.62-24.42-55.65-55.79l.65-.43c20.08-13.39,20.46-29.64,20.46-29.64V156.78a55.35,55.35,0,0,1,43.24-11.46c1,.16,2.05.35,3.06.56a55.06,55.06,0,0,1,22.55,10.69v18.06a25.69,25.69,0,0,0,1.76,7.51c.37,1,.8,2,1.34,3.11,2.73,5.66,7.88,12.75,17.59,19.16A6.75,6.75,0,0,0,200.51,204.85Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Neck */}
      <g
        id="neck"
        className={`origin-center transform ${skin ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <path
          className={"cls-4"}
          d="M199.86,204.43a55.19,55.19,0,0,1-110-.15c20.08-13.38,20.46-29.64,20.46-29.64V156.78a55.35,55.35,0,0,1,43.24-11.46c1,.16,2.05.35,3.06.56a55.06,55.06,0,0,1,22.55,10.69v18.06a25.69,25.69,0,0,0,1.76,7.51c.37,1,.8,2,1.34,3.11C185,190.93,190.15,198,199.86,204.43Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Neck Shadow */}
      <g
        id="neck-shadow"
        className={`origin-center transform ${skin ? "animate-bounceScaleSm" : "scale-0"}`}
      >
        <path
          className={"cls-5"}
          d="M182.26,185.27a48.22,48.22,0,0,1-26.71,7.64c-22.14,0-40.09-13.44-40.09-30,0-.28,0-.55,0-.82s0-.27,0-.44c0-8.75,16.88-15.89,38.1-16.31,1,.16,2.05.35,3.06.56a55.06,55.06,0,0,1,22.55,10.69v18.06a25.69,25.69,0,0,0,1.76,7.51C181.29,183.13,181.74,184.18,182.26,185.27Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Face */}
      <g
        id="face"
        className={`origin-center transform ${skin ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <path
          className={"cls-4"}
          d="M208.54,83.59h0a15.6,15.6,0,0,0-16.06,2v-19a44.24,44.24,0,0,0-44.11-44.1h-7A44.24,44.24,0,0,0,97.26,66.6V85.93a15.59,15.59,0,0,0-16.45-2.34h0A15.6,15.6,0,0,0,73,104.16l2.87,6.37a15.58,15.58,0,0,0,20.57,7.79h0a9,9,0,0,0,.83-.4v17A44.24,44.24,0,0,0,141.39,179h7a44.23,44.23,0,0,0,44.1-44.1V118.12l.44.21h0a15.6,15.6,0,0,0,20.57-7.8l2.86-6.37A15.59,15.59,0,0,0,208.54,83.59Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Left Ear */}
      <g
        id="left-ear-line"
        className={`origin-center transform ${skin ? "animate-bounceScaleSm" : "scale-0"}`}
      >
        <line
          className={"cls-6"}
          x1="72.68"
          y1="91.94"
          x2="81.84"
          y2="101.49"
        />
      </g>

      {/* Right Ear */}
      <g
        id="right-ear-line"
        className={`origin-center transform ${skin ? "animate-bounceScaleSm" : "scale-0"}`}
      >
        <line className={"cls-6"} x1="193.16" y1="91.94" x2="184" y2="101.49" />
      </g>

      {/* Nose */}
      <g
        id="nose"
        className={`origin-center transform ${nose ? "animate-bounceScaleLg" : "scale-0"}`}
      >
        <path
          className={"cls-7"}
          d="M143.69,96s-.8,16.53-4,27.09,10.15,0,10.15,0"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Smile */}
      <g
        id="smile"
        className={`origin-center transform ${smile ? "animate-bounceScaleLg" : "scale-0"}`}
      >
        <path
          className={"cls-2"}
          d="M131.9,137.89c0,.18,0,.35,0,.53,0,4.92,5.64,8.91,12.61,8.91s12.61-4,12.61-8.91a4.7,4.7,0,0,0,0-.53Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Eye Black Left */}
      <g
        id="eye-black-left"
        className={`origin-center transform ${facialFeatures ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <path
          d="M123.53,94.17h0A3.48,3.48,0,0,1,127,97.65v1.9a3.48,3.48,0,0,1-3.48,3.49h0a3.48,3.48,0,0,1-3.48-3.49v-1.9A3.48,3.48,0,0,1,123.53,94.17Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Eye Black Right */}
      <g
        id="eye-black-right"
        className={`origin-center transform ${facialFeatures ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <path
          d="M165.44,94.17h0a3.48,3.48,0,0,1,3.48,3.48v1.9a3.48,3.48,0,0,1-3.48,3.49h0A3.49,3.49,0,0,1,162,99.55v-1.9A3.48,3.48,0,0,1,165.44,94.17Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Eye White Left */}
      <g
        id="eye-white-left"
        className={`origin-center transform ${eyes ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <circle className="cls-8" cx="112.06" cy="94.75" r="1.09" />
      </g>

      {/* Eye White Right */}
      <g
        id="eye-white-right"
        className={`origin-center transform ${eyes ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <circle className={"cls-8"} cx="153.97" cy="94.75" r="1.09" />
      </g>

      {/* Hair */}
      <g
        id="hair"
        className={`origin-center transform ${hair ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <path
          className={"cls-9"}
          d="M194.14,84.47c4.3-10.92,1.41-25.28,8.52-36.07a36.88,36.88,0,0,0,5.48-12.6c9.05-42.41-34.84-11.8-33-31.2C152.25,13.14,146.29,1,110.85,22.5s-15.63,62-15.63,62,2,1,2,1.46,1.31-16.5,3-21.19S106,50.59,112.64,47.61C156.05,28.3,158,59.36,192.49,69.45V85.3Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Eyebrow Right */}
      <g
        id="eyebrow-right"
        className={`origin-center transform ${facialFeatures ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <path
          d="M174,86.55c-4.59-2-9.32-1.31-14.08-.38-1.71.34-1,3,.72,2.62,3.94-.77,8.16-1.58,12,.1C174.22,89.57,175.61,87.23,174,86.55Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Eyebrow Left */}
      <g
        id="eyebrow-left"
        className={`origin-center transform ${facialFeatures ? "animate-bounceScaleSm" : "scale-0"}`}
      >
        <path
          d="M116.36,86.55c4.58-2,9.31-1.31,14.08-.38,1.71.34,1,3-.72,2.62-4-.77-8.17-1.58-12,.1C116.14,89.57,114.76,87.23,116.36,86.55Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Mustache */}
      <g
        id="mustache"
        className={`origin-center transform ${mustache ? "animate-bounceScaleMd" : "scale-0"}`}
      >
        <path
          d="M160.75,141.2a.57.57,0,0,0,.59-.57h0c0-5.4-7.55-9.77-16.86-9.77s-16.86,4.37-16.86,9.77h0a.58.58,0,0,0,.6.57Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>

      {/* Beard */}
      <g
        id="beard"
        className={`origin-center transform ${beard ? "animate-bounceScaleLg" : "scale-0"}`}
      >
        <path
          d="M157.1,172.33c0-3.41-5.85-6.16-13.09-6.16s-13.09,2.75-13.09,6.16v.47c0,6.25,5.85,11.32,13.09,11.32s13.09-5.07,13.09-11.32v-.31A.86.86,0,0,1,157.1,172.33Z"
          transform="translate(-11.47 -4.06)"
        />
      </g>
    </svg>
  );
};

export default Face;
