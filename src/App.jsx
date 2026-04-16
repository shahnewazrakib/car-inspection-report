import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/404";
import BasicReport from "./pages/BasicReport";
import PremiumReport from "./pages/PremiumReport";
import StandardReport from "./pages/StandardReport";
import CaravanReport from "./pages/CaravanReport";
import MotorhomeReport from "./pages/MotorhomeReport";

function App() {
  return (
    <Routes>
      <Route path="/basic-report/:slug" element={<BasicReport />} />
      <Route path="/standard-report/:slug" element={<StandardReport />} />
      <Route path="/premium-report/:slug" element={<PremiumReport />} />
      <Route path="/caravan-report/:slug" element={<CaravanReport />} />
      <Route path="/motorhome-report/:slug" element={<MotorhomeReport />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
