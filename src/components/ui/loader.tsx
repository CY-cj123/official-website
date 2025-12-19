import React from 'react';

export function Loader() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" className="loader">
      <circle className="loader__motion-thick" cx="26" cy="26" r="26" fill="none" strokeWidth="6" stroke="rgba(255, 255, 255, 0)" strokeDasharray="153.94 153.94" transform="rotate(270 26 26)" />
      <circle className="loader__motion-medium" cx="26" cy="26" r="26" fill="none" strokeWidth="6" stroke="rgba(255, 255, 255, 0)" strokeDasharray="153.94 153.94" transform="rotate(270 26 26)" />
      <circle className="loader__motion-thin" cx="26" cy="26" r="26" fill="none" strokeWidth="6" stroke="rgba(255, 255, 255, 0)" strokeDasharray="153.94 153.94" transform="rotate(270 26 26)" />
      <g className="loader__model">
        <path className="loader__sand-drop" d="M12.25 22.5 L12.25 31" fill="none" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 100" />
        <path className="loader__sand-fill" d="M12.25 22.5 L12.25 31" fill="none" stroke="#FFCC00" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 100" />
        <path className="loader__sand-grain-left" d="M12.25 22.5 L11.25 31" fill="none" stroke="#FFCC00" strokeWidth="1" strokeDasharray="1 100" />
        <path className="loader__sand-grain-right" d="M12.25 22.5 L13.25 31" fill="none" stroke="#FFCC00" strokeWidth="1" strokeDasharray="1 100" />
        <path className="loader__sand-line-left" d="M12.25 22.5 L11.25 31" fill="none" stroke="#FFCC00" strokeWidth="1" strokeDasharray="1 100" />
        <path className="loader__sand-line-right" d="M12.25 22.5 L13.25 31" fill="none" stroke="#FFCC00" strokeWidth="1" strokeDasharray="1 100" />
        <path className="loader__sand-mound-top" d="M8.25 22.5 A4 4 0 0 1 16.25 22.5" fill="#FFCC00" clipPath="url(#loader-mask-top)" />
        <path className="loader__sand-mound-bottom" d="M8.25 31 A4 4 0 0 0 16.25 31" fill="#FFCC00" clipPath="url(#loader-mask-bottom)" />
        <path className="loader__glare-top" d="M16 11.5 L16 12.5" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <path className="loader__glare-bottom" d="M16 33.5 L16 34.5" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" />
        <clipPath id="loader-mask-top">
          <rect x="0" y="0" width="24.5" height="22.5" />
        </clipPath>
        <clipPath id="loader-mask-bottom">
          <rect x="0" y="22.5" width="24.5" height="22.5" />
        </clipPath>
        <path d="M4.25 11.5 C4.25 8.18629 6.93629 5.5 10.25 5.5 L14.25 5.5 C17.5637 5.5 20.25 8.18629 20.25 11.5 L20.25 13.5 L4.25 13.5 L4.25 11.5 Z" fill="#003366" />
        <path d="M20.25 33.5 C20.25 36.8137 17.5637 39.5 14.25 39.5 L10.25 39.5 C6.93629 39.5 4.25 36.8137 4.25 33.5 L4.25 31.5 L20.25 31.5 L20.25 33.5 Z" fill="#003366" />
        <path d="M4.25 13.5 L20.25 13.5 L20.25 16.5 C20.25 19.8137 17.5637 22.5 14.25 22.5 L10.25 22.5 C6.93629 22.5 4.25 19.8137 4.25 16.5 L4.25 13.5 Z" fill="#003366" fillOpacity="0.3" />
        <path d="M4.25 31.5 L20.25 31.5 L20.25 28.5 C20.25 25.1863 17.5637 22.5 14.25 22.5 L10.25 22.5 C6.93629 22.5 4.25 25.1863 4.25 28.5 L4.25 31.5 Z" fill="#003366" fillOpacity="0.3" />
      </g>
    </svg>
  );
}
