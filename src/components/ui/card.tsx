// components/ui/card.tsx
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className = "" }: CardProps) => {
  return <div className={`border-b pb-2 mb-4 ${className}`}>{children}</div>;
};

export const CardTitle = ({ children, className = "" }: CardProps) => {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
};

export const CardDescription = ({ children, className = "" }: CardProps) => {
  return <p className={`text-gray-500 ${className}`}>{children}</p>;
};

export const CardContent = ({ children, className = "" }: CardProps) => {
  return <div className={className}>{children}</div>;
};
