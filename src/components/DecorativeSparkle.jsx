import React from 'react';

/**
 * Pure SVG 4-pointed luxury starburst sparkle element.
 * Zero external bitmap image dependencies.
 */
export default function DecorativeSparkle({
  size = 16,
  color = 'var(--primary-hot-pink)',
  className = '',
  style = {}
}) {
  const half = size / 2;
  const inner = size * 0.22;
  const pathD = `
    M ${half} 0
    Q ${half + inner} ${half - inner} ${size} ${half}
    Q ${half + inner} ${half + inner} ${half} ${size}
    Q ${half - inner} ${half + inner} 0 ${half}
    Q ${half - inner} ${half - inner} ${half} 0
    Z
  `;

  return (
    <span
      className={`sparkle-anim ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        verticalAlign: 'middle',
        ...style
      }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={pathD} fill={color} />
        <circle cx={half} cy={half} r={size * 0.14} fill="#FFFFFF" />
      </svg>
    </span>
  );
}
