/* eslint-disable no-undef */
var recorder = null;

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);
  recorder.start();
  recorder.onstop = () => {
    stream.getTracks().forEach((track) => {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };
  recorder.ondataavailable = (event) => {
    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);
    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "screen-recording.webm";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "start_recording") {
    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
  }

  if (message.action === "stop_recording") {
    if (!recorder) {
      return alert("No recorder available");
    }
    recorder.stop();
  }
});
