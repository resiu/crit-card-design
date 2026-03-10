import { Routes, Route } from "react-router-dom";
import PrinterDashboard from "./PrinterDashboard";

export default function Index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrinterDashboard />} />
      </Routes>
    </div>
  );
}