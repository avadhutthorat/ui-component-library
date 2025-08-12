import { Suspense, lazy } from "react";
import ProgressBar from "./components/progress-bar";
import StarRating from "./components/star-rating";
import Loader from "./components/loader";

const StarRatingLazy = lazy(() => import("./components/star-rating"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      {/* <ProgressBar /> */}
      <StarRatingLazy />
    </Suspense>
  );
}

export default App;
