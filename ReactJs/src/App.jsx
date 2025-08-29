import { Suspense, lazy } from "react";
import Loader from "./components/loader";

const StarRating = lazy(() => import("./components/star-rating"));
const ProgressBar = lazy(() => import("./components/progress-bar"));
const Carousel = lazy(() => import("./components/carousel"));
const WhackMole = lazy(() => import("./components/whack-a-mole-game"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      {/* <ProgressBar /> */}
      {/* <StarRating /> */}
      {/* <Carousel /> */}
      <WhackMole />
    </Suspense>
  );
}

export default App;
