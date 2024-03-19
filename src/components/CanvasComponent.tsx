"use client";
import { useEffect, useRef } from "react";

const CanvasComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(
        Math.sin(time * 0.005) * canvas.width,
        Math.cos(time * 0.005) * canvas.height,
        Math.sin(time * 0.005 + Math.PI) * canvas.width,
        Math.cos(time * 0.005 + Math.PI) * canvas.height
      );

      // Set gradient colors
      gradient.addColorStop(0, "#e44f4f");
      gradient.addColorStop(0.3, "#d345e9");
      gradient.addColorStop(0.6, "#e0bf38");
      gradient.addColorStop(0.9, "#72ffe7");

      // Fill with gradient
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Increment time
      time++;

      // Request next frame
      animationFrameId = requestAnimationFrame(draw);
    };

    // Start animation
    draw();

    // Cleanup function
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="">
      <div className="absolute z-[-2] left-0 bottom-0 w-full h-[80%] bg-gradient-to-b from-transparent to-[#ede7de] dark:to-[#1c2a62]"></div>
      <div className="">
        <canvas
          className="w-[100vw] h-[100vh] absolute left-0 right-0 bottom-0 top-0 overflow-hidden opacity-5"
          ref={canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -3,
            width: "100%",
            height: "100%",
            opacity: 0.3,
          }}
        />
      </div>
    </div>
  );
};

export default CanvasComponent;
