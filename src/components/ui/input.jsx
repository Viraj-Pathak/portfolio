import * as React from "react";

export const Input = React.forwardRef(function Input(
  { className = "", type = "text", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      type={type}
      className={["input-ui", className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});
