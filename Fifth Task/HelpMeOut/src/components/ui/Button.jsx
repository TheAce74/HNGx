export default function Button({ children, type, handleClick, invert }) {
  return (
    <button
      className="button"
      type={type || "button"}
      onClick={handleClick}
      data-invert={invert}
    >
      {children}
    </button>
  );
}
