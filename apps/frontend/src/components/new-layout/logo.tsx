'use client';

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      role="img"
      aria-label="sh."
      className="mt-[8px]"
    >
      <text
        x="30"
        y="40"
        textAnchor="middle"
        fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        fontSize="27"
        fontWeight="600"
        letterSpacing="-2.4"
      >
        <tspan fill="var(--socialhub-wordmark-main)">s</tspan>
        <tspan fill="var(--socialhub-wordmark-secondary)">h</tspan>
        <tspan fill="var(--socialhub-wordmark-dot)">.</tspan>
      </text>
    </svg>
  );
};
