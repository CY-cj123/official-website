"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

// Custom Crane Icon Component
const CraneIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Building */}
    <path d="M6 22V10h8v12" />
    <path d="M6 14h8" />
    <path d="M6 18h8" />
    <path d="M2 22h16" />
    {/* Crane Tower */}
    <path d="M14 10V4" />
    {/* Crane Arm */}
    <path d="M14 4H22" />
    <path d="M14 4L10 22" strokeOpacity="0.5" strokeDasharray="2 2" /> {/* Counterweight/Cable hint */}
    <path d="M22 4v4" /> {/* Hook line */}
    <path d="M20 8h4" /> {/* Hook load */}
  </svg>
);

export function PrimaryButton({ children, href, className, onClick, icon, ...props }: PrimaryButtonProps) {
  // Styles adapted for White/Blue theme to avoid the "ugly yellow" and improve contrast
  // Base: White Background
  // Text: Dark Blue (#003366)
  // Icon Box: Dark Blue (#003366) with White Icon
  
  const baseClasses = cn(
    "relative min-w-[220px] w-auto px-6 h-[56px] cursor-pointer flex items-center overflow-hidden border border-white bg-white group transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed",
    className
  );

  const content = (
    <>
      <span className="w-full text-center pr-[40px] text-[#003366] font-bold text-lg transition-all duration-300 group-hover:text-transparent group-hover:translate-x-[150%] whitespace-nowrap">
        {children}
      </span>
      <span className="absolute right-0 top-0 h-full w-[60px] bg-[#003366] flex items-center justify-center transition-all duration-500 group-hover:w-full group-active:bg-[#002244]">
        {icon || <CraneIcon className="w-7 h-7 text-white" />}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
