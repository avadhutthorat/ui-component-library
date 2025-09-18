import type { ChangeEvent } from "react";

type SearchPropsType = {
  value: string;
  setSearch: (searchValue: string) => void;
};

const Search = ({ value, setSearch }: SearchPropsType) => {
  const setSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        id="searchInput"
        className="search-layout searchInput"
        name="searchInput"
        placeholder="Search products"
        type="text"
        value={value}
        onChange={setSearchHandler}
      />
    </div>
  );
};

export default Search;
