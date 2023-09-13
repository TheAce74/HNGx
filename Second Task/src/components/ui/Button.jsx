export default function Button({
  children,
  type,
  color,
  rounded,
  handleClick,
}) {
  return (
    <button
      className="button"
      type={type || "button"}
      data-color={color}
      data-rounded={rounded}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
