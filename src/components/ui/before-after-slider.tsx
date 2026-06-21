"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  serviceName: string;
  stylistName: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  serviceName,
  stylistName,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  const handleInteractionEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div 
        ref={containerRef}
        className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-sm cursor-ew-resize group select-none touch-none"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={(e) => handleInteractionStart(e.clientX)}
        onTouchStart={(e) => handleInteractionStart(e.touches[0].clientX)}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0">
          <Image
            src={beforeImage}
            alt="Before Transformation"
            fill
            className="object-cover pointer-events-none"
            priority
          />
          {/* Before Label */}
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-1 border border-white/10 text-white text-xs uppercase tracking-widest font-medium z-10 opacity-0 group-hover:opacity-100 transition-opacity">
            Before
          </div>
        </div>

        {/* After Image (Clipped) */}
        <div 
          className="absolute inset-0 z-10 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt="After Transformation"
            fill
            className="object-cover pointer-events-none"
            priority
          />
          {/* After Label */}
          <div className="absolute top-6 right-6 bg-gold-500/80 backdrop-blur-md px-4 py-1 text-black text-xs uppercase tracking-widest font-bold z-10 opacity-0 group-hover:opacity-100 transition-opacity"
               style={{ right: `calc(${100 - sliderPosition}% + 24px)` }}>
            After
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white/50 backdrop-blur-sm z-20 cursor-ew-resize"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-black border border-black/10">
            <ChevronLeft className="w-4 h-4 -mr-1" />
            <ChevronRight className="w-4 h-4 -ml-1" />
          </div>
        </div>
      </div>

      {/* Info labels */}
      <div className="flex justify-between items-start pt-2 border-t border-white/10">
        <div>
          <h4 className="font-playfair text-xl text-white">{serviceName}</h4>
          <p className="text-muted-foreground text-sm mt-1 uppercase tracking-wider">Stylist: <span className="text-gold-500">{stylistName}</span></p>
        </div>
      </div>
    </div>
  );
}
