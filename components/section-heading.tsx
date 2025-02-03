import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
  style?: React.CSSProperties; // Add support for style prop
};

export default function SectionHeading({ children, style }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center" style={style}>
      {children}
    </h2>
  );
}
