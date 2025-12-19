"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface EngineeringButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  initialTextColor?: string;
  hoverTextColor?: string;
  slideColor?: string;
}

export const EngineeringButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, EngineeringButtonProps>(
  ({ className, children, href, initialTextColor = "#ffffff", hoverTextColor = "#003366", slideColor = "#FFCC00", ...props }, ref) => {
    const content = (
      <>
        <motion.div
          className="absolute inset-0 z-0"
          style={{ backgroundColor: slideColor }}
          initial={{ x: "-100%" }}
          variants={{
            hover: { x: "0%" }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
        <motion.span
          className="relative z-10 flex items-center gap-2"
          variants={{
            initial: { color: initialTextColor },
            hover: { color: hoverTextColor }
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {children}
        </motion.span>
      </>
    );

    const baseClasses = cn(
      "relative overflow-hidden bg-[#003366] text-white font-bold px-8 py-4 rounded-none group inline-flex items-center justify-center cursor-pointer select-none",
      className
    );

    if (href) {
      return (
        <motion.div
          initial="initial"
          whileHover="hover"
          className="inline-block"
        >
          <Link href={href} className={baseClasses} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as any)}>
            {content}
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        className={baseClasses}
        initial="initial"
        whileHover="hover"
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </motion.button>
    );
  }
);

EngineeringButton.displayName = "EngineeringButton";
