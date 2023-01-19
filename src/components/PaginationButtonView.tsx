import { useSearchParams } from "react-router-dom";
import type { Issue } from "../lib/api/issues/schema";
import type { Repository } from "../lib/api/search/schema";

const PaginationButtonView = (props: { itemList: Issue[] | Repository[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  return (
    <>
      <button
        onClick={() => {
          searchParams.set("page", String(page - 1));
          setSearchParams(searchParams);
        }}
        disabled={page === 1}
      >
        Prev
      </button>
      <button
        onClick={() => {
          searchParams.set("page", String(page + 1));
          setSearchParams(searchParams);
        }}
        disabled={props.itemList.length < 15}
      >
        Next
      </button>
    </>
  );
};

export default PaginationButtonView;
