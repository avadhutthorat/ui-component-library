type PagesPropsTypes = {
  noOfPages: number;
  currentPage: number;
  pageClickHandler: (page: number) => void;
};

const Pages = ({
  noOfPages,
  pageClickHandler,
  currentPage,
}: PagesPropsTypes) => {
  return (
    <div
      className="pages-container"
      onClick={(e) => {
        const target = e.target as HTMLElement;
        const child = target.closest("[data-child]") as HTMLElement;
        if (child.dataset.child) {
          pageClickHandler(Number(child?.dataset?.child));
        }
      }}
    >
      <div className={`page-no prev`} data-child={"prev"}>
        {"<"}
      </div>
      {Array.from({ length: noOfPages }, (_, i) => i).map((i) => {
        const isCurrentPage = i + 1 === currentPage;
        return (
          <div
            key={i + 1}
            className={`page-no ${isCurrentPage && "current-page"}`}
            data-child={i + 1}
          >
            {i + 1}
          </div>
        );
      })}
      <div className={`page-no next`} data-child={"next"}>
        {">"}
      </div>
    </div>
  );
};

export default Pages;
