import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Layout = lazy(() => import("src/Layout/Layout"));
import "./App.scss";
import "src/assets/styles/global.scss";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
