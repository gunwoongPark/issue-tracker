import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight,
} from "react-icons/fi";

const PER_PAGINATION = 5;

const PaginationView = (props: {
  openIssuesCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalPage: number;
}) => {
  const [paginationList, setPaginationList] = useState<Array<number>>([]);

  useEffect(() => {
    let tempPaginationList = [];

    if (PER_PAGINATION + 1 > props.page) {
      if (PER_PAGINATION > props.totalPage) {
        for (let idx = 1; props.totalPage >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      } else {
        for (let idx = 1; PER_PAGINATION >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      }
    } else {
      const pivot =
        (Math.ceil(props.page / PER_PAGINATION) - 1) * PER_PAGINATION;

      if (pivot + 1 + PER_PAGINATION > props.totalPage) {
        for (let idx = pivot + 1; props.totalPage >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      } else {
        for (let idx = pivot + 1; pivot + PER_PAGINATION >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      }
    }

    setPaginationList(tempPaginationList);
  }, [props.page, props.totalPage]);

  const onClickPaginationButton = useCallback(
    (addPageValue: number) => {
      if (addPageValue > 0 && props.totalPage === props.page) {
        return;
      } else if (0 > addPageValue && props.page === 1) {
        return;
      }

      props.setPage((prevPage) => prevPage + addPageValue);
    },
    [props]
  );

  return (
    <S.Container>
      {props.totalPage > 5 && (
        <div className="prev-container">
          <span onClick={() => props.setPage(1)}>
            <FiChevronsLeft />
          </span>
          <span onClick={() => onClickPaginationButton(-1)}>
            <FiChevronLeft />
          </span>
        </div>
      )}

      <ul>
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
      </ul>

      {props.totalPage > 5 && (
        <div className="next-container">
          <span onClick={() => onClickPaginationButton(1)}>
            <FiChevronRight />
          </span>
          <span onClick={() => props.setPage(props.totalPage)}>
            <FiChevronsRight />
          </span>
        </div>
      )}
    </S.Container>
  );
};

export default PaginationView;

const S = {
  Container: styled.div`
    margin-top: 5px;

    display: flex;
    justify-content: space-between;

    .prev-container {
      display: flex;
      span {
        cursor: pointer;
        color: ${({ theme }) => theme.arrowIconColor};
        font-size: 18px;
      }
    }

    ul {
      display: flex;
      justify-content: center;
      li {
        &:not(:first-child) {
          margin-left: 20px;
        }
        cursor: pointer;
        font-size: 18px;
        &.current-page-index {
          color: ${({ theme }) => theme.mainTextColor};
        }
        &.page-index {
          color: ${({ theme }) => theme.arrowIconColor};
        }
      }
    }

    .next-container {
      display: flex;
      span {
        cursor: pointer;
        color: ${({ theme }) => theme.arrowIconColor};
        font-size: 18px;
      }
    }
  `,
};
