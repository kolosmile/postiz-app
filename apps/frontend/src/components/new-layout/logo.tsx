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
        x="8"
        y="40"
        fill="var(--socialhub-wordmark-main)"
        fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        fontSize="27"
        fontWeight="600"
        letterSpacing="-2.4"
      >
        s
      </text>
      <text
        x="29"
        y="40"
        fill="var(--socialhub-wordmark-secondary)"
        fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        fontSize="27"
        fontWeight="600"
        letterSpacing="-2.4"
      >
        h
      </text>
      <text
        x="49"
        y="40"
        fill="var(--socialhub-wordmark-dot)"
        fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        fontSize="27"
        fontWeight="600"
        letterSpacing="-2.4"
      >
        .
      </text>
    </svg>
  );
};
