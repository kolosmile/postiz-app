'use client';

export const BrandWordmark = ({ className = '' }: { className?: string }) => (
  <span className={`socialhub-wordmark ${className}`} aria-label="socialhub">
    <span className="socialhub-wordmark__social">social</span>
    <i className="socialhub-wordmark__dot" aria-hidden="true">
      .
    </i>
    <b className="socialhub-wordmark__hub">hub</b>
  </span>
);
