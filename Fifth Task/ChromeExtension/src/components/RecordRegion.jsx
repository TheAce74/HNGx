import PropTypes from "prop-types";

RecordRegion.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};

export default function RecordRegion({ icon, text }) {
  return (
    <button className="group hover:text-primary-600 active:scale-95 focus-visible:outline-offset-[.2em]">
      {icon}
      <span className="group-hover:font-semibold group-focus-visible:font-semibold">
        {text}
      </span>
    </button>
  );
}
