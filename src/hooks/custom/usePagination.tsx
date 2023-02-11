import { useEffect, useState } from "react";

const PER_PAGINATION = 5;

const usePagination = (currentPage: number, totalPage: number) => {
  const [pageList, setPageList] = useState<Array<number>>([]);

  useEffect(() => {
    const tempPageList = [];

    if (PER_PAGINATION + 1 > currentPage) {
      if (PER_PAGINATION > totalPage) {
        for (let idx = 1; totalPage >= idx; ++idx) {
          tempPageList.push(idx);
        }
      } else {
        for (let idx = 1; PER_PAGINATION >= idx; ++idx) {
          tempPageList.push(idx);
        }
      }
    } else {
      const pivot =
        (Math.ceil(currentPage / PER_PAGINATION) - 1) * PER_PAGINATION;

      if (pivot + 1 + PER_PAGINATION > totalPage) {
        for (let idx = pivot + 1; totalPage >= idx; ++idx) {
          tempPageList.push(idx);
        }
      } else {
        for (let idx = pivot + 1; pivot + PER_PAGINATION >= idx; ++idx) {
          tempPageList.push(idx);
        }
      }
    }

    setPageList(tempPageList);
  }, [currentPage, totalPage]);

  return { pageList };
};

export default usePagination;
