import { useQuery } from "@tanstack/react-query";
import ImageList from "./image-list";
import "./style.css";
import { useEffect, useState } from "react";

type ListDataType = {
  id: number;
  download_url: string;
  author: string;
};

const ImageInfiniteScroll = () => {
  const [pageNo, setPageNo] = useState<number>(1);
  const [listData, setListData] = useState<ListDataType[]>([]);
  const { isLoading, isError, data } = useQuery({
    queryKey: ["images", pageNo],
    queryFn: async () => {
      const res = await fetch(
        `https://picsum.photos/v2/list?limit=5&page=${pageNo}`
      );
      return res.json();
    },
  });

  useEffect(() => {
    if (data) {
      setListData((prev) => [...prev, ...data]);
    }
  }, [data]);

  return (
    <div>
      <ImageList
        imageList={listData}
        setPageNo={setPageNo}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ImageInfiniteScroll;
