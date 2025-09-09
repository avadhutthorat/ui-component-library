import "./App.css";
import { lazy, Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// @ts-ignore
import Loader from "@components/Loader";
// @ts-ignore
const Dropdown = lazy(() => import("@components/Dropdown"));
// @ts-ignore
const Toast = lazy(() => import("@components/toast"));
const Pagination = lazy(() => import("@components/Pagination"));

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Suspense fallback={<Loader />}>
        {/* <Dropdown mode={"single-select"} key={"single"} /> */}
        {/* <Dropdown mode={"multi-select"} key={"multiple"} /> */}
        {/* <Toast /> */}
        <Pagination />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
