import "./App.css";
import { lazy, Suspense } from "react";

import Loader from "@components/Loader";
const Dropdown = lazy(() => import("@components/Dropdown"));
const Toast = lazy(() => import("@components/toast"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      {/* <Dropdown mode={"single-select"} key={"single"} /> */}
      {/* <Dropdown mode={"multi-select"} key={"multiple"} /> */}
      <Toast />
    </Suspense>
  );
}

export default App;
