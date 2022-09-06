import React from "react";
import "./ProgressCircle.css";
const Circle = ({ color, percentage, size, strokeWidth }) => {
  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius - 20;
  const strokePercentage =
    ((100 - Math.round(percentage)) * circumference) / 100;

  return (
    <circle
      r={radius}
      cx="50%"
      cy="50%"
      fill="transparent"
      stroke={strokePercentage !== circumference ? color : ""}
      strokeWidth={strokeWidth}
      strokeDasharray={circumference}
      strokeDashoffset={percentage ? strokePercentage : 0}
      strokeLinecap="round"
    />
  );
};

const ProgressCircle = ({ percentage, isPlaying, image, size, color }) => {
  return (
    <div className="progress-circle">
      <svg width={size} height={size}>
        <g>
        <Circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
        <Circle
          strokeWidth={"0.6rem"}
          color={color}
          percentage={percentage}
          size={size}
        />
        </g>
        <defs>
          <clipPath id="myCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 30} fill="#FFFFFF" />
          </clipPath>
          <clipPath id="myInnerCircle">
            <circle cx="50%" cy="50%" r={size / 2 - 100} fill="#FFFFFF" />
          </clipPath>
        </defs>
        <image
          className={isPlaying ? "active" : ""}
          x={30}
          y={30}
          width={2 * (size / 2 - 30)}
          height={2 * (size / 2 - 30)}
          href="https://pngimg.com/uploads/vinyl/vinyl_PNG107.png"
          clipPath="url(#myCircle)"
        />
        <image
          className={isPlaying ? "active" : ""}
          x={100}
          y={100}
          width={2 * (size / 2 - 100)}
          height={2 * (size / 2 - 100)}
          href={image}
          clipPath="url(#myInnerCircle)"
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
