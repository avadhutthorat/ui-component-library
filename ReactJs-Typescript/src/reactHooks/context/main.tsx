import Child1 from "./child1";
import Child2 from "./child2";
import ContextProvider from "./contextProvider";

export default function Main() {
  return (
    <ContextProvider>
      <Child1 />
      <Child2 />
    </ContextProvider>
  );
}
