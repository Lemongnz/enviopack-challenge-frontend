import ReactPaginate from "react-paginate";
import { Container } from "./styles";

export default function PaginateContainer({
  pageCount,
  productsPerPage,
  setItemOffset,
  products,
}) {
  const handlePageClick = (event) => {
    const newOffset = (event.selected * productsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination"
        activeClassName={"active"}
      />
    </Container>
  );
}
