import Pagination from "./pagination";
import "./style.css";

const PaginationEntry = ({ noOfItemsPerPage = 5, noOfPages = 10 }) => {
  return (
    <Pagination noOfItemsPerPage={noOfItemsPerPage} noOfPages={noOfPages} />
  );
};

export default PaginationEntry;
