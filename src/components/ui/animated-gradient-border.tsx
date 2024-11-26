import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradientBorder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative rounded-xl p-[1px] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className={cn("relative bg-background rounded-xl", className)}>
        {children}
      </div>
    </div>
  );
}