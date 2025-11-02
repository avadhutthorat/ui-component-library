import { createContext, useMemo, useState, type ReactNode } from "react";

export const UserContext = createContext({});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("green");
  const [child1Input, setChild1Input] = useState("");
  const [child2Input, setChild2Input] = useState("");

  const data = useMemo(() => {
    return {
      theme,
      setTheme,
      child1Input,
      setChild1Input,
      child2Input,
      setChild2Input,
    };
  }, [theme, child1Input, child2Input]);
  return <UserContext value={data}>{children}</UserContext>;
}
