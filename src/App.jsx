import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/common/MainLayout";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Properties from "./pages/Properties";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
