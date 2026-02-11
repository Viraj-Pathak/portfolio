import * as React from "react";

export const Button = React.forwardRef(function Button(
  { className = "", variant = "default", size = "md", type = "button", ...props },
  ref
) {
  const base = "btn-ui";
  const v =
    variant === "outline"
      ? "btn-ui--outline"
      : variant === "ghost"
      ? "btn-ui--ghost"
      : "btn-ui--default";

  const s =
    size === "sm" ? "btn-ui--sm" : size === "lg" ? "btn-ui--lg" : "btn-ui--md";

  return (
    <button
      ref={ref}
      type={type}
      className={[base, v, s, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
});
