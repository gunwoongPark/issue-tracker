import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import styled from "styled-components";

const PER_PAGE = 5;

const PaginationView = (props: {
  openIssuesCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const totalPage = useMemo(
    () => Math.ceil(props.openIssuesCount / PER_PAGE),
    [props.openIssuesCount]
  );

  const [paginationList, setPaginationList] = useState<Array<number>>([]);

  useEffect(() => {
    let tempPaginationList = [];

    if (PER_PAGE + 1 > props.page) {
      if (PER_PAGE > totalPage) {
        for (let idx = 1; totalPage >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      } else {
        for (let idx = 1; PER_PAGE >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      }
    } else {
      const pivot = (Math.ceil(props.page / PER_PAGE) - 1) * PER_PAGE;

      if (pivot + 1 + PER_PAGE > totalPage) {
        for (let idx = pivot + 1; totalPage >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      } else {
        for (let idx = pivot + 1; pivot + PER_PAGE >= idx; ++idx) {
          tempPaginationList.push(idx);
        }
      }
    }

    setPaginationList(tempPaginationList);
  }, [props.page, totalPage]);

  const onClickPaginationButton = (addPageValue: number) => {
    if (addPageValue > 0 && totalPage === props.page) {
      return;
    } else if (0 > addPageValue && props.page === 1) {
      return;
    }

    props.setPage((prevPage) => prevPage + addPageValue);
  };

  return (
    <S.Container>
      <ul>
        <li onClick={() => onClickPaginationButton(-1)}>
          <BiLeftArrowCircle />
        </li>
        {paginationList.map((pagination, idx) => (
          <li
            key={idx}
            onClick={() => props.setPage(pagination)}
            style={
              props.page === pagination ? { color: "red" } : { color: "black" }
            }
          >
            {pagination}
          </li>
        ))}
        <li onClick={() => onClickPaginationButton(1)}>
          <BiRightArrowCircle />
        </li>
      </ul>
    </S.Container>
  );
};

export default PaginationView;

const S = {
  Container: styled.div`
    ul {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      li {
      }
    }
  `,
};
