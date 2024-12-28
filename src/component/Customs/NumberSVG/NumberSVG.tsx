import React from "react";

type NumberSVGProps = {
  number: number;
};

const NumberSVG: React.FC<NumberSVGProps> = ({ number }) => {
  return (
    <svg
      width="38"
      height="84"
      viewBox="0 0 38 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="path-1-outside-1_138_1492"
        maskUnits="userSpaceOnUse"
        x="-1"
        y="-1"
        width="40"
        height="86"
        fill="black"
      >
        <rect fill="white" x="-1" y="-1" width="40" height="86" />
        <path d="M37.0878 -5.72205e-06V84H17.6478V15.6H0.847813V-5.72205e-06H37.0878Z" />
      </mask>
      {number}
      <path
        d="M37.0878 -5.72205e-06V84H17.6478V15.6H0.847813V-5.72205e-06H37.0878Z"
        fill="white"
      />
      <path
        d="M37.0878 -5.72205e-06H38.0878V-1.00001H37.0878V-5.72205e-06ZM37.0878 84V85H38.0878V84H37.0878ZM17.6478 84H16.6478V85H17.6478V84ZM17.6478 15.6H18.6478V14.6H17.6478V15.6ZM0.847813 15.6H-0.152187V16.6H0.847813V15.6ZM0.847813 -5.72205e-06V-1.00001H-0.152187V-5.72205e-06H0.847813ZM36.0878 -5.72205e-06V84H38.0878V-5.72205e-06H36.0878ZM37.0878 83H17.6478V85H37.0878V83ZM18.6478 84V15.6H16.6478V84H18.6478ZM17.6478 14.6H0.847813V16.6H17.6478V14.6ZM1.84781 15.6V-5.72205e-06H-0.152187V15.6H1.84781ZM0.847813 0.999992H37.0878V-1.00001H0.847813V0.999992Z"
        fill="#F58634"
        fill-opacity="0.8"
        mask="url(#path-1-outside-1_138_1492)"
      />
    </svg>
  );
};

export default NumberSVG;
