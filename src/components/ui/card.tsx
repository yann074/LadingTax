// components/ui/card.tsx
import React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white rounded-lg shadow-md p-4">{children}</div>;
};

export const CardHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-b pb-2 mb-4">{children}</div>;
};

export const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-xl font-semibold">{children}</h3>;
};

export const CardDescription = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-500">{children}</p>;
};

export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
