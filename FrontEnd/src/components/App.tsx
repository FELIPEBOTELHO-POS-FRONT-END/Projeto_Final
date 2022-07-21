import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TabelaCampeonato from "../pages/TabelaCampeonato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/campeonato/:year" element={<TabelaCampeonato />} />
        <Route
          path="*"
          element={<Navigate to={"/campeonato/2003"} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
