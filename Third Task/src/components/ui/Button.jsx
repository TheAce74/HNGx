export default function Button({
  children,
  type,
  disabled,
  className,
  onClick,
}) {
  return (
    <button
      className={
        className && className.includes("btn-warning")
          ? `btn btn-warning ${className}`
          : `btn btn-dark ${className}`
      }
      type={type || "button"}
      disabled={disabled || false}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
