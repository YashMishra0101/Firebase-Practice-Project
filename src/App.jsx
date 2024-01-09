import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center flex-col bg-slate-400 overflow-hidden">
      <Outlet />
    </div>
  );
}

export default App;
