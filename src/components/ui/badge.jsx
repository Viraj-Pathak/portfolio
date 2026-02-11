export function Badge({ className = "", variant = "default", ...props }) {
  const base = "badge-ui";
  const v = variant === "outline" ? "badge-ui--outline" : "badge-ui--default";
  return <span className={[base, v, className].filter(Boolean).join(" ")} {...props} />;
}
