import * as React from "react";

export const Card = React.forwardRef(function Card({ className = "", ...props }, ref) {
  return (
    <div
      ref={ref}
      className={["card-ui", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});

export const CardContent = React.forwardRef(function CardContent(
  { className = "", ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={["card-content-ui", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});
