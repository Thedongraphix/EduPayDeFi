"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !animate) return;

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn("relative group", containerClassName)}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500",
          className
        )}
        style={{
          transform: animate
            ? `translate(${position.x * 0.02}px, ${position.y * 0.02}px)`
            : "none",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
};