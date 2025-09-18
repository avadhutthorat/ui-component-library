import { useEffect, useState } from "react";
import Search from "./search";
import SearchResult from "./searchResult";
import "./style.css";
import { useSearchQuery } from "../../hooks/query-hooks/search-hooks";

type resultType = {
  id: number;
  title: string;
};

const Typeahead = () => {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState<resultType[]>([]);

  const { isError, isLoading, data, isFetching, isSuccess } = useSearchQuery(
    searchValue,
    "https://dummyjson.com/products/search?q="
  );

  useEffect(() => {
    if (isSuccess && data) {
      console.log("Data recived-", data);
      setResult(data.products);
    }
  }, [isSuccess, data]);

  console.log({
    data,
    isError,
    isLoading,
  });
  return (
    <div className="type-ahead">
      <Search value={searchValue} setSearch={setSearchValue} />
      {isLoading && <div>Loading...</div>}
      {searchValue && !isLoading && <SearchResult result={result} />}
    </div>
  );
};

export default Typeahead;
