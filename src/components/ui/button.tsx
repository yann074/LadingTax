// components/ui/button.tsx
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  onClick?: () => void;
  className?: string;
};

export const Button = ({ children, variant = "solid", onClick, className = "" }: ButtonProps) => {
  return (
    <a
    href="#contact"
      onClick={onClick}
      className={`px-6 py-2 rounded-lg text-yellow-700 font-medium border border-yellow-700 bg-white shadow-md transition-all duration-200 ease-in-out  
        ${variant === "solid" ? "hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 active:scale-95" : "hover:bg-yellow-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 active:scale-95"} 
        ${className}`}
    >
      {children}
    </a>
  );
};
