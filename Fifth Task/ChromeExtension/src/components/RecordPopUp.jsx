import { AiOutlinePause } from "react-icons/ai";
import { CiPlay1, CiStop1, CiTrash } from "react-icons/ci";
import PropTypes from "prop-types";
import { formatTimer } from "../utils/timerFormatter";

RecordPopUp.propTypes = {
  playState: PropTypes.object,
  setPlayState: PropTypes.func,
  timer: PropTypes.number,
};

export default function RecordPopUp({ playState, setPlayState, timer }) {
  return (
    <div className="flex gap-5 items-center justify-between w-[max-content] bg-primary-600 text-neutral-100 px-5 py-2 fixed bottom-4 left-4 rounded-full ring-4 ring-primary-200">
      <div className="flex gap-1 justify-around items-center">
        <p className="w-20">{formatTimer(timer)}</p>
        <span
          className={`w-3 bg-red-600 aspect-square rounded-full ${
            playState.play && "pulse-pace"
          }`}
        ></span>
      </div>
      <span className="block w-0.5 bg-neutral-50 h-7 opacity-70 rounded-full"></span>
      <div className="flex gap-3 justify-around items-center">
        {playState.play ? (
          <button
            onClick={() => setPlayState({ type: "PAUSE" })}
            className="hover:text-primary-200 focus-visible:text-primary-200 active:scale-95 min-w-14"
          >
            <AiOutlinePause className="text-xl mx-auto mb-0.5" />
            <span>Pause</span>
          </button>
        ) : (
          <button
            onClick={() => setPlayState({ type: "PLAY" })}
            className="hover:text-primary-200 focus-visible:text-primary-200 active:scale-95 min-w-14"
          >
            <CiPlay1 className="text-xl mx-auto mb-0.5" />
            <span>Play</span>
          </button>
        )}
        <button
          onClick={() => setPlayState({ type: "STOP" })}
          className="hover:text-primary-200 focus-visible:text-primary-200 active:scale-95 min-w-14"
        >
          <CiStop1 className="text-xl mx-auto mb-0.5" />
          <span>Stop</span>
        </button>
        <button
          onClick={() => setPlayState({ type: "CANCEL" })}
          className="hover:text-primary-200 focus-visible:text-primary-200 active:scale-95 min-w-14"
        >
          <CiTrash className="text-xl mx-auto mb-0.5" />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
}
