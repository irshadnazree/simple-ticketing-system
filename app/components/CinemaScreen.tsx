export default function CinemaScreen() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="873"
      height="96"
      fill="currentColor"
      viewBox="0 0 873 96"
    >
      <g filter="url(#a)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M437.765 16.609c-126.98.057-254.436 19.343-418.244 57.75-1.344.315-2.705-.515-3.021-1.859a2.512 2.512 0 0 1 1.877-3.008C182.38 31.038 310.25 11.666 437.762 11.608c127.509-.058 254.542 19.199 416.872 57.876A2.512 2.512 0 0 1 856.5 72.5c-.321 1.343-1.685 2.168-3.028 1.848C691.35 35.72 564.736 16.552 437.765 16.608Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <filter
          id="a"
          width="872.334"
          height="95.017"
          x=".334"
          y=".509"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="8.05" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_5_4" />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_5_4"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
