import PropTypes from "prop-types";
import { useState } from "react";

RecordPermission.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
};

export default function RecordPermission({ icon, text }) {
  const [checked, setChecked] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setChecked(!checked);
    }
  };

  return (
    <div className="border-[3px] border-primary-600 rounded-xl mb-4 flex items-center justify-between p-4">
      <div className="flex items-center justify-between gap-3">
        <span>{icon}</span>
        <span>{text}</span>
      </div>
      <input
        type="checkbox"
        id={text}
        className="hidden peer"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label
        htmlFor={text}
        tabIndex={0}
        className="w-10 bg-primary-600 rounded-full relative select-none cursor-pointer text-transparent before:absolute before:inset-[12%_auto_12%_8%] before:aspect-square before:rounded-full before:bg-neutral-100 peer-checked:before:inset-[12%_8%_12%_auto] focus-visible:outline-offset-[.2em]"
        role="checkbox"
        aria-label={`${text} permission ${checked ? "on" : "off"}`}
        onKeyDown={handleKeyDown}
        aria-live="polite"
      >
        &nbsp;
      </label>
    </div>
  );
}
