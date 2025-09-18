type resultType = {
  id: number;
  title: string;
};

type searchResultTypeProps = {
  result: resultType[];
};

const SearchResult = ({ result = [] }: searchResultTypeProps) => {
  return (
    <div className="search-layout search-list">
      {result.length ? (
        result.map((product) => {
          return <div className="search-list__item">{product.title}</div>;
        })
      ) : (
        <div className="search-list__noresult">
          No Result found. Try Searching another word
        </div>
      )}
    </div>
  );
};

export default SearchResult;
