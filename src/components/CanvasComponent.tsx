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

      gradient.addColorStop(0, "#e44f4f");
      gradient.addColorStop(0.2, "#d345e9");
      gradient.addColorStop(0.4, "#cba524");
      gradient.addColorStop(0.67, "#cb5b4c");
      gradient.addColorStop(0.92, "#a8db8e");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      time++;
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="max-h-[100%] overflow-hidden">
      <div className="">
        <canvas
          className="w-[100%] opacity-[42%] dark:opacity-[35%] h-[100%] absolute  left-0 right-0 bottom-0 top-0 overflow-hidden inset-0"
          ref={canvasRef}
        />
      </div>
      <div className="absolute left-0 bottom-0 w-full transition-all duration-[0.3s] h-[80%] bg-gradient-to-t from-secondary via-[#ede7deaf] to-transparent dark:from-[#1c2a62] dark:via-[#1c2a62b5]"></div>
    </div>
  );
};

export default CanvasComponent;
