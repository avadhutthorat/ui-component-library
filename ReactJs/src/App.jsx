import { Suspense, lazy } from "react";
import Loader from "./components/loader";

const StarRating = lazy(() => import("./components/star-rating"));
const ProgressBar = lazy(() => import("./components/progress-bar"));
const Carousel = lazy(() => import("./components/carousel"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      {/* <ProgressBar /> */}
      {/* <StarRating /> */}
      <Carousel />
    </Suspense>
  );
}

export default App;
