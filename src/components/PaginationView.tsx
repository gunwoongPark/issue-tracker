import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

const PER_PAGE = 5;

const PaginationView = (props: {
  openIssuesCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}) => {
  const [paginationList, setPaginationList] = useState<Array<number>>([]);

  useEffect(() => {
    let tempPaginationList = [];

    if (PER_PAGE + 1 > props.page) {
      if (PER_PAGE > props.totalPage) {
        for (let idx = 1; props.totalPage >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      } else {
        for (let idx = 1; PER_PAGE >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      }
    } else {
      const pivot = (Math.ceil(props.page / PER_PAGE) - 1) * PER_PAGE;

      if (pivot + 1 + PER_PAGE > props.totalPage) {
        for (let idx = pivot + 1; props.totalPage >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      } else {
        for (let idx = pivot + 1; pivot + PER_PAGE >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      }
    }

    setPaginationList(tempPaginationList);
  }, [props.page, props.totalPage]);

  const onClickPaginationButton = (addPageValue: number) => {
    if (addPageValue > 0 && props.totalPage === props.page) {
      return;
    } else if (0 > addPageValue && props.page === 1) {
      return;
    }

    props.setPage((prevPage) => prevPage + addPageValue);
  };

  return (
    <S.Container>
      <ul>
        {props.totalPage > 5 && (
          <>
            <li onClick={() => props.setPage(1)}>
              <FiChevronsLeft />
            </li>
            <li onClick={() => onClickPaginationButton(-1)}>
              <FiChevronLeft />
            </li>
          </>
        )}

        {paginationList.map((pagination, idx) => (
          <li
            className={
              props.page === pagination ? "current-page-index" : "page-index"
            }
            key={idx}
            onClick={() => props.setPage(pagination)}
          >
            {pagination}
          </li>
        ))}

        {props.totalPage > 5 && (
          <>
            <li onClick={() => onClickPaginationButton(1)}>
              <FiChevronRight />
            </li>
            <li onClick={() => props.setPage(props.totalPage)}>
              <FiChevronsRight />
            </li>
          </>
        )}
      </ul>
    </S.Container>
  );
};

export default PaginationView;

const S = {
  Container: styled.div`
    ul {
      margin-top: 5px;
      display: flex;
      justify-content: space-between;

      li {
        cursor: pointer;
        font-size: 18px;
        color: ${({ theme }) => theme.arrowIconColor};
      }

      .current-page-index {
        color: ${({ theme }) => theme.mainTextColor};
      }
    }
  `,
};
