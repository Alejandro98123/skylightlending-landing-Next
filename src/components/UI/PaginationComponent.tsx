"use client";
import { Pagination } from "@nextui-org/react";

interface PaginationComponent {
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponent> = ({
  currentPage,
  handlePageChange,
}) => {
  return (
    <Pagination
      className="flex justify-center fixed bottom-2 left-0 w-full"
      showControls
      total={10}
      initialPage={1}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default PaginationComponent;