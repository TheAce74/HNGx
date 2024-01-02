import logo from "./assets/logo.svg";
import RecordPermission from "./components/RecordPermission";
import RecordRegion from "./components/RecordRegion";
import { FiMonitor, FiVideo, FiMic } from "react-icons/fi";
import { TiTabsOutline } from "react-icons/ti";
import RecordController from "./components/RecordController";

function App() {
  return (
    <main className="font-body text-primary-400 p-5 w-[90vmax] mx-auto">
      <img src={logo} alt="site logo" className="mb-3" />
      <p className="mb-3">
        This extension helps you record and download videos with ease.
      </p>
      <div className="mt-4 mb-5 flex items-center justify-evenly gap-6">
        <RecordRegion
          icon={<FiMonitor className="text-3xl mx-auto mb-1" />}
          text="Full Screen"
        />
        <RecordRegion
          icon={<TiTabsOutline className="text-3xl mx-auto mb-1" />}
          text="Current Tab"
        />
      </div>
      <RecordPermission icon={<FiVideo />} text="Camera" />
      <RecordPermission icon={<FiMic />} text="Audio" />
      <RecordController />
    </main>
  );
}

export default App;
