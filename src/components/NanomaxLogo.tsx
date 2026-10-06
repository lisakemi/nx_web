import React from 'react';

interface LogoProps {
  className?: string;
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const NanomaxLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const pixelSize =
    typeof size === 'number'
      ? size
      : size === 'sm'
      ? 48
      : size === 'md'
      ? 64
      : size === 'lg'
      ? 96
      : 140;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Crisp Vector SVG Emblem */}
      <div
        className="relative shrink-0 flex items-center justify-center transition-transform hover:scale-105 duration-300 drop-shadow-sm"
        style={{ width: pixelSize, height: pixelSize }}
      >
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path id="logoTextArc" d="M 85,300 A 215,215 0 1,1 515,300" fill="none" />
            
            <radialGradient id="sphereBurgundy" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="35%" stopColor="#b91c1c" />
              <stop offset="85%" stopColor="#700d1c" />
              <stop offset="100%" stopColor="#45050e" />
            </radialGradient>
            
            <radialGradient id="sphereSky" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="40%" stopColor="#38bdf8" />
              <stop offset="85%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0369a1" />
            </radialGradient>

            <radialGradient id="sphereSmallBurgundy" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#f87171" />
              <stop offset="70%" stopColor="#841424" />
              <stop offset="100%" stopColor="#4c0510" />
            </radialGradient>
          </defs>

          {/* Background disc */}
          <circle cx="300" cy="300" r="290" fill="#ffffff" stroke="#7c1221" strokeWidth="6" />
          
          {/* Main outer burgundy ring */}
          <circle cx="300" cy="300" r="274" fill="none" stroke="#7c1221" strokeWidth="11" />
          <circle cx="300" cy="300" r="264" fill="none" stroke="#f8fafc" strokeWidth="2" />
          
          {/* Inner fine guideline circle */}
          <circle cx="300" cy="300" r="165" fill="none" stroke="#841424" strokeWidth="2" opacity="0.4" />

          {/* Arched Upper Text: NANOMAX PRE - & PRIMARY SCHOOL */}
          <text
            fill="#0f172a"
            fontFamily="'Outfit', system-ui, sans-serif"
            fontWeight="900"
            fontSize="28.5"
            letterSpacing="4.5"
          >
            <textPath href="#logoTextArc" startOffset="50%" textAnchor="middle">
              NANOMAX PRE - &amp; PRIMARY SCHOOL
            </textPath>
          </text>

          {/* Fountain Pen & Open Book */}
          <g id="penAndBook">
            {/* Pen Nib at Top */}
            <rect x="286" y="108" width="28" height="6" rx="2" fill="#0f172a" />
            <rect x="289" y="114" width="22" height="12" fill="#0f172a" />
            <path
              d="M 289,126 C 289,142 277,156 288,180 L 300,196 L 312,180 C 323,156 311,142 311,126 Z"
              fill="#0f172a"
            />
            <circle cx="300" cy="164" r="3.5" fill="#ffffff" />
            <line x1="300" y1="167" x2="300" y2="196" stroke="#ffffff" strokeWidth="2.5" />

            {/* Book Pages in Deep Burgundy */}
            {/* Top Page Layer */}
            <path d="M 297,196 C 265,178 225,176 195,190 C 205,214 250,234 297,238 Z" fill="#841424" />
            <path d="M 303,196 C 335,178 375,176 405,190 C 395,214 350,234 303,238 Z" fill="#841424" />
            
            {/* Crisp White Curved Page Dividers */}
            <path d="M 197,192 C 227,178 266,180 297,198" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />
            <path d="M 403,192 C 373,178 334,180 303,198" fill="none" stroke="#ffffff" strokeWidth="4.5" strokeLinecap="round" />

            {/* Lower Page Layer */}
            <path d="M 297,222 C 260,205 220,206 188,226 C 202,246 250,256 297,258 Z" fill="#841424" />
            <path d="M 303,222 C 340,205 380,206 412,226 C 398,246 350,256 303,258 Z" fill="#841424" />

            {/* Base Book Line */}
            <path d="M 198,266 L 402,266" stroke="#841424" strokeWidth="4.5" strokeLinecap="round" />
          </g>

          {/* Burgundy Elliptical Loop */}
          <g transform="rotate(-7, 300, 360)">
            <ellipse cx="300" cy="360" rx="195" ry="46" fill="none" stroke="#841424" strokeWidth="17" />
            {/* 3D Burgundy Sphere with glossy highlight */}
            <circle cx="195" cy="336" r="44" fill="url(#sphereBurgundy)" />
            <path d="M 180,305 C 190,303 205,307 210,317 C 206,323 189,320 178,312 Z" fill="#ffffff" opacity="0.8" />
            {/* Small Burgundy Sphere */}
            <circle cx="132" cy="406" r="22" fill="url(#sphereSmallBurgundy)" />
          </g>

          {/* Sky-Blue Elliptical Loop */}
          <g transform="rotate(7, 300, 368)">
            <ellipse cx="300" cy="368" rx="190" ry="45" fill="none" stroke="#38bdf8" strokeWidth="13" />
            {/* Sky Blue Spheres */}
            <circle cx="360" cy="338" r="22" fill="url(#sphereSky)" />
            <circle cx="440" cy="408" r="25" fill="url(#sphereSky)" />
          </g>

          {/* Motto: Achieving Excellence Together */}
          <text
            x="300"
            y="373"
            textAnchor="middle"
            fontFamily="'Outfit', system-ui, sans-serif"
            fontWeight="900"
            fontSize="21"
            fill="#0f172a"
            letterSpacing="0.5"
          >
            Achieving Excellence Together
          </text>
        </svg>
      </div>

      {showSubtitle && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-heading font-black text-xl md:text-2xl tracking-tight text-[#7c1221] leading-none uppercase">
              NANOMAX
            </span>
            <span className="font-heading font-extrabold text-sm md:text-base tracking-wide text-sky-600 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200 uppercase">
              Pre &amp; Primary
            </span>
          </div>
          <span className="text-[11px] md:text-xs font-semibold tracking-wider text-slate-500 uppercase mt-0.5">
            Achieving Excellence Together
          </span>
        </div>
      )}
    </div>
  );
};
