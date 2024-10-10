import React from "react";

interface CircleProps {
  componentType?: keyof JSX.IntrinsicElements;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement | SVGElement>;
  children?: React.ReactNode;
}

export default function Circle({
  componentType: Component = "button", // default value
  className = "",
  onClick,
  children,
}: CircleProps) {
  return (
    <Component className={className} onClick={onClick}>
      {children}
    </Component>
  );
}
