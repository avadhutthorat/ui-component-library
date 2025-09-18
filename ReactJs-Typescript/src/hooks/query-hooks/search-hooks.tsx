import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useDebounceValue } from "../../utils/debounce";

export const useSearchQuery = (query: string, url: string) => {
  const queryClient = useQueryClient();
  const debounced = useDebounceValue(query, 1000);
  return useQuery({
    queryKey: ["search", url, debounced],
    queryFn: async () => {
      const controller = new AbortController();
      const result = await fetch(`${url}${debounced}`, {
        signal: controller.signal,
      });
      return await result.json();
    },
    enabled: query.trim().length > 0,
    staleTime: 1000 * 60, // cache results as fresh for 1 min
    // cacheTime: 1000 * 60 * 5, // keep cache in memory for 5 min
    initialData: () => {
      queryClient.getQueryData(["search", url, debounced]) ?? undefined;
    },
  });
};
