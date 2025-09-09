import { useQuery } from "@tanstack/react-query";

export const useGetPageData = (pageNo: number, limit: number) => {
  return useQuery({
    queryKey: ["images", pageNo],
    queryFn: async () => {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${pageNo}&limit=${limit}`
      );
      return await response.json();
    },
  });
};
