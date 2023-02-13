import usePagination from "hooks/custom/usePagination";
import { useCallback } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";
import styled, { css, useTheme } from "styled-components";

const PaginationView = (props: {
  totalPage: number;
  page: number;
  changePage: (page: number) => void;
}) => {
  // theme
  const theme = useTheme();

  // pageList
  const { pageList } = usePagination(props.page, props.totalPage);

  // 한 페이지 이동 클릭시
  const onClickPage = useCallback(
    (addPageValue: number) => {
      if (addPageValue > 0 && props.totalPage === props.page) {
        return;
      }
      if (addPageValue < 0 && props.page === 1) {
        return;
      }

      props.changePage(props.page + addPageValue);
    },
    [props],
  );

  return (
    <S.Container isOnlyNumber={props.totalPage <= 5}>
      {props.totalPage > 5 && (
        <div className="prev-container">
          <button
            onClick={() => props.changePage(1)}
            disabled={props.page === 1}
          >
            <BiChevronsLeft size={24} />
          </button>
          <button onClick={() => onClickPage(-1)} disabled={props.page === 1}>
            <BiChevronLeft size={24} />
          </button>
        </div>
      )}

      <ul>
        {pageList.map((page) => (
          <li
            className={
              props.page === page ? "current-page-index" : "page-index"
            }
            key={`page-${page}`}
            onClick={() => props.changePage(page)}
          >
            {page}
          </li>
        ))}
      </ul>

      {props.totalPage > 5 && (
        <div className="next-container">
          <button
            onClick={() => onClickPage(1)}
            disabled={props.totalPage === props.page}
          >
            <BiChevronRight size={24} />
          </button>
          <button
            onClick={() => props.changePage(props.totalPage)}
            disabled={props.totalPage === props.page}
          >
            <BiChevronsRight size={24} />
          </button>
        </div>
      )}
    </S.Container>
  );
};

export default PaginationView;

const S = {
  Container: styled.div<{ isOnlyNumber: boolean }>`
    margin-top: 20px;
    display: flex;
    ${({ isOnlyNumber }) =>
      isOnlyNumber
        ? css`
            justify-content: center;
          `
        : css`
            justify-content: space-between;
          `}

    .prev-container,
    .next-container {
      button {
        border: none;
        cursor: pointer;
        background-color: transparent;
        color: ${({ theme }) => theme.paginationIndexColor};

        &:disabled {
          cursor: default;
          color: ${({ theme }) => theme.disabledColor};
        }
      }
    }

    ul {
      display: flex;
      justify-content: center;
      li {
        cursor: pointer;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        &:not(:first-child) {
          margin-left: 20px;
        }
        &.current-page-index {
          color: ${({ theme }) => theme.paginationCurrentIndexColor};
          text-decoration: underline;
        }
        &.page-index {
          color: ${({ theme }) => theme.paginationIndexColor};
        }
      }
    }
  `,
};
