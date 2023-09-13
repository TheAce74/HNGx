export default function Button({
  children,
  type,
  color,
  rounded,
  handleClick,
  ariaLabel,
  ariaControls,
}) {
  return (
    <button
      className="button"
      type={type || "button"}
      data-color={color}
      data-rounded={rounded}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
    >
      {children}
    </button>
  );
}
