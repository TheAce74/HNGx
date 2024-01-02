import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  invert: PropTypes.bool,
  className: PropTypes.string,
};

export default function Button({
  children,
  type,
  handleClick,
  invert,
  className,
}) {
  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      data-invert={invert}
      className={className}
    >
      {children}
    </button>
  );
}
