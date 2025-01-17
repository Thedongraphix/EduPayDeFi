"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-center">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="relative flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="object-cover rounded-full h-14 w-14 border-2 border-white group-hover:scale-105 transition-transform duration-200"
            />
          </div>
          {hoveredIndex === idx && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute -top-16 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black text-white text-sm rounded-lg whitespace-nowrap"
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-xs text-gray-300">{item.designation}</div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};