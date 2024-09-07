import React from "react";
import { Button, Box, Typography } from "@mui/material";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
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
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <Button onClick={handlePrevious} disabled={currentPage === 1}>
        Prev
      </Button>
      <Typography variant="body1" mx={2}>
        {currentPage} of {totalPage}
      </Typography>
      <Button onClick={handleNext} disabled={currentPage === totalPage}>
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
