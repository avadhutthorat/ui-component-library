import "./App.css";
import { lazy, Suspense } from "react";

// @ts-ignore
import Loader from "@components/Loader";
// @ts-ignore
const Dropdown = lazy(() => import("@components/Dropdown"));
// @ts-ignore
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
