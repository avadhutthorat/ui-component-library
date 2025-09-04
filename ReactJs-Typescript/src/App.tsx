import "./App.css";
import { lazy, Suspense } from "react";

import Loader from "@components/Loader";
const Dropdown = lazy(() => import("@components/Dropdown"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Dropdown />
    </Suspense>
  );
}

export default App;
