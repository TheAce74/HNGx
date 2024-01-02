/* eslint-disable no-undef */
import { useReducer } from "react";
import Button from "./Button";
import RecordPopUp from "./RecordPopUp";
import { useTimer } from "../hooks/useTimer";

export default function RecordController() {
  const { timer, startTimer, stopTimer, resetTimer } = useTimer();

  const startRecording = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "start_recording" },
        (response) => {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(
              chrome.runtime.lastError,
              "error in starting recording at record controller file"
            );
          }
        }
      );
    });
  };

  const stopRecording = async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "stop_recording" },
        (response) => {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(
              chrome.runtime.lastError,
              "error in stopping recording at record controller file"
            );
          }
        }
      );
    });
  };

  const playStateReducer = (playState, { type }) => {
    switch (type) {
      case "PAUSE":
        stopTimer();
        return { show: true, play: false };
      case "PLAY":
        startRecording();
        startTimer();
        return { show: true, play: true };
      case "STOP":
        stopRecording();
        stopTimer();
        resetTimer();
        return { show: false, play: false };
      case "CANCEL":
        stopTimer();
        resetTimer();
        return { show: true, play: false };
      default:
        return playState;
    }
  };

  const [playState, setPlayState] = useReducer(playStateReducer, {
    show: false,
    play: false,
  });

  const handleClick = () => {
    if (!playState.show) {
      setPlayState({ type: "PLAY" });
    } else {
      setPlayState({ type: "STOP" });
    }
  };

  return (
    <>
      <Button
        handleClick={handleClick}
        className="bg-primary-600 text-neutral-100 w-full p-4 rounded-lg active:scale-95 focus-visible:outline-offset-[.2em] hover:bg-primary-400 focus-visible:bg-primary-400 mb-[5.5rem]"
      >
        {playState.show ? "Stop Recording" : "Start Recording"}
      </Button>
      {playState.show && (
        <RecordPopUp
          playState={playState}
          setPlayState={setPlayState}
          timer={timer}
        />
      )}
    </>
  );
}
