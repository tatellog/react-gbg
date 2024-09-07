import React, { FC } from "react";
interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        {currentPage} of {totalPage}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
