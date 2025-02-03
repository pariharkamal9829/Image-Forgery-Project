import React, { useState } from 'react';

function ImageComparison() {
  const [position, setPosition] = useState(50);
  
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setPosition(Math.min(Math.max(percent, 0), 100));
  };

  return (
    <div className="max-w-2xl mx-auto bg-gray-800/30 p-4 rounded-xl">
      <h3 className="text-center text-lg mb-4">Interactive Demo: Drag to Compare Original vs Forged</h3>
      <div
        className="relative h-[400px] cursor-ew-resize group"
        onMouseMove={handleMove}
        onClick={handleMove}
      >
        {/* Original Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7"
            alt="Original document"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Forged Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
            alt="Forged document"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-y-0 right-0 w-1 bg-blue-400 group-hover:w-2 transition-all"></div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{ left: `${position}%` }}
        >
          <div className="h-12 w-12 -ml-6 rounded-full bg-blue-400 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="w-8 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        Slide to compare the original document with a forged version
      </p>
    </div>
  );
}

export default ImageComparison;