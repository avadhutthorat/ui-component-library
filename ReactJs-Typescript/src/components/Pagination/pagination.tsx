import Content from "./Content";
import Pages from "./Pages";
import { useQuery } from "@tanstack/react-query";
import Loader from "@components/Loader";
import { useState } from "react";
import { useGetPageData } from "../../hooks/query-hooks/pagination-hooks";

type PaginationPropsTypes = {
  noOfPages: number;
  noOfItemsPerPage: number;
};

const Pagination = ({ noOfItemsPerPage, noOfPages }: PaginationPropsTypes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isPending, data, error, isFetching, isLoading } = useGetPageData(
    currentPage,
    5
  );

  const pageClickHandler = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <Content data={data} />
      <Pages
        noOfPages={noOfPages}
        pageClickHandler={pageClickHandler}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Pagination;
