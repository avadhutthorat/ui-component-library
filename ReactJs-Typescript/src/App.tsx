import "./App.css";
import { lazy, Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// @ts-ignore
import Loader from "@components/Loader";
import Homepage from "./layout/homepage";
// @ts-ignore
const Dropdown = lazy(() => import("@components/Dropdown"));
// @ts-ignore
const Toast = lazy(() => import("@components/toast"));
const Pagination = lazy(() => import("@components/Pagination"));
const Counter = lazy(() => import("@components/Counter"));
const Otp = lazy(() => import("@components/Otp"));
const HomeLayout = lazy(() => import("@components/HomeLayout"));
const Typeahead = lazy(() => import("@components/Typeahead"));
const StopWatch = lazy(() => import("@components/StopWatch"));
const ImageInfiniteScroll = lazy(
  () => import("@components/ImageInfiniteScroll")
);
const Virtualization = lazy(() => import("@components/Virtualization"));
const Tooltip = lazy(() => import("@components/Tooltip/story.tsx"));
const FileUploader = lazy(() => import("@components/FileUploader"));

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<Loader />}>
        {/* <Dropdown mode={"single-select"} key={"single"} /> */}
        {/* <Dropdown mode={"multi-select"} key={"multiple"} /> */}
        {/* <Toast /> */}
        {/* <Pagination /> */}
        {/* <Counter /> */}
        {/* <Otp /> */}
        {/* <HomeLayout /> */}
        {/* <Typeahead /> */}
        {/* <StopWatch /> */}
        {/* <ImageInfiniteScroll /> */}
        {/* <Homepage /> */}
        {/* <Virtualization /> */}
        {/* <Tooltip /> */}
        <FileUploader />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
