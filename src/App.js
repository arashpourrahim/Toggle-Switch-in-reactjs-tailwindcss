import "./App.css";
import ToggleSwitch1 from "./components/ToggleSwitch-1/ToggleSwitch";
import ToggleSwitch2 from "./components/ToggleSwitch-2/ToggleSwitch";
import ToggleSwitch3 from "./components/ToggleSwitch-3/ToggleSwitch";
import ToggleSwitch4 from "./components/ToggleSwitch-4/ToggleSwitch";

function App() {
  return (
    <div className="App grid grid-cols-2 grid-rows-2 h-screen">
      <div className="p-4 flex flex-col items-center justify-center bg-slate-100 w-full border border-gray-200">
        <h6 className="text-base font-semibold my-3">Toggle One</h6>
        <ToggleSwitch1 />
      </div>
      <div className="p-4 flex flex-col items-center justify-center bg-slate-100 w-full border border-gray-200">
        <h6 className="text-base font-semibold my-3">Toggle Two</h6>
        <ToggleSwitch2 />
      </div>
      <div className="p-4 flex flex-col items-center justify-center bg-slate-100 w-full border border-gray-200">
        <h6 className="text-base font-semibold my-3">Toggle Three</h6>
        <ToggleSwitch3 />
      </div>
      <div className="p-4 flex flex-col items-center justify-center bg-slate-100 w-full border border-gray-200">
        <h6 className="text-base font-semibold my-3">Toggle Four</h6>
        <ToggleSwitch4 />
      </div>
    </div>
  );
}

export default App;
