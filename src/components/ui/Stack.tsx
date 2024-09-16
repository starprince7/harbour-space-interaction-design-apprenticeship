import React from "react";

interface Props {
  direction: "row" | "column" | "row-reverse" | "column-reverse";
  className?: string;
  children?: React.ReactNode;
}

export const Stack = ({ direction, className, children }: Props) => {
  // Mapping direction to correct Tailwind class
  const directionClass = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse",
  }[direction];

  const combinedClasses = `flex ${directionClass} ${className || ""}`;

  return <div className={combinedClasses}>{children}</div>;
};