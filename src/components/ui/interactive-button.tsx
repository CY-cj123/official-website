import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface InteractiveButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  children?: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

export function InteractiveButton({ text, children, href, className, onClick, style, icon, ...props }: InteractiveButtonProps) {
  const content = (
    <span className="text-container">
      <span className="text flex items-center justify-center gap-2">
        {icon}
        {children || text}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link 
        href={href} 
        className={cn("btn-31", className)} 
        style={style}
        {...(props as any)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={cn("btn-31", className)} onClick={onClick} style={style} {...props}>
      {content}
    </button>
  );
}
